//Gabriel Sarte
import { Assinatura } from "../models/Assinatura.js";
import { Cliente } from "../models/Cliente.js";
import { Plano } from "../models/Plano.js";
import { Op } from "sequelize";
import { Fidelidade } from "../models/Fidelidade.js";


class AssinaturaService {

  static async findAll() {
    return await Assinatura.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Assinatura.findByPk(id);
  }

  
  static async verificarRegrasDeNegocio({ clienteId }) {
    // Regra 1: Verifica se já existe uma assinatura ativa
    const assinaturaAtiva = await Assinatura.findOne({
      where: {
        clienteId,
        expiresAt: { [Op.gt]: new Date() }
      }
    });
  
    if (assinaturaAtiva) {
      return {
        valido: false,
        mensagem: "Já existe uma assinatura ativa para este cliente"
      };
    }
  
    // Regra 2: Avaliação de fidelidade com base nos últimos 12 meses consecutivos
  
    // Obtém o último ciclo de fidelidade (se houver)
    const ultimoCiclo = await Fidelidade.findOne({
      where: { clienteId },
      order: [['periodoFim', 'DESC']]
    });
  
    const dataBase = ultimoCiclo ? new Date(ultimoCiclo.periodoFim) : new Date(new Date().getFullYear(), 0, 1);
  
    // Busca todas as assinaturas após o último ciclo
    const assinaturas = await Assinatura.findAll({
      where: {
        clienteId,
        createdAt: { [Op.gt]: dataBase }
      },
      order: [['createdAt', 'ASC']]
    });
  
    // Extrai e ordena os meses únicos
    const mesesOrdenados = assinaturas.map(a => {
      const d = a.createdAt;
      return new Date(d.getFullYear(), d.getMonth(), 1);
    }).sort((a, b) => a - b);
  
    // Remove duplicatas
    const mesesUnicos = mesesOrdenados.filter((m, i, arr) =>
      i === 0 || m.getFullYear() !== arr[i - 1].getFullYear() || m.getMonth() !== arr[i - 1].getMonth()
    );
  
    // Verifica se há 12 meses consecutivos
    let consecutivos = 1;
    let descontoProgressivo = 0;
    let aplicarCicloFidelidade = false;
    let periodoFidelidade = null;
  
    for (let i = 1; i < mesesUnicos.length; i++) {
      const atual = mesesUnicos[i];
      const anterior = mesesUnicos[i - 1];
  
      const esperado = new Date(anterior);
      esperado.setMonth(esperado.getMonth() + 1);
  
      if (
        atual.getFullYear() === esperado.getFullYear() &&
        atual.getMonth() === esperado.getMonth()
      ) {
        consecutivos++;
        if (consecutivos === 12) {
          descontoProgressivo = 10;
          aplicarCicloFidelidade = true;
          periodoFidelidade = {
            inicio: mesesUnicos[i - 11], 
            fim: mesesUnicos[i]          
          };
          break;
        }
      } else {
        consecutivos = 1;
      }
    }
  
    return {
      valido: true,
      desconto: descontoProgressivo,
      aplicarCicloFidelidade,
      periodoFidelidade
    };
  }

  static async create(req) {
    const { metodoPagamento, clienteId, planoId, valor, desconto = 0 } = req.body;
  
    const regras = await this.verificarRegrasDeNegocio({ clienteId });
    if (!regras.valido) {
      throw new Error(regras.mensagem);
    }
  
    const descontoFinal = desconto + (regras.desconto || 0);
    const valorFinal = valor * (1 - descontoFinal / 100);
  
    const novaAssinatura = await Assinatura.create({
      desconto: descontoFinal,
      metodoPagamento,
      clienteId,
      planoId,
      valor: valorFinal
    });
    console.log(regras.aplicarCicloFidelidade, regras.periodoFidelidade)
    if (regras.aplicarCicloFidelidade && regras.periodoFidelidade) {
      await Fidelidade.create({
        clienteId,
        periodoInicio: regras.periodoFidelidade.inicio,
        periodoFim: regras.periodoFidelidade.fim,
        beneficioAplicado: regras.desconto
      });
    }
  
    return novaAssinatura;
  }

  static async update(req) {
    const { id } = req.params;
    const { createdAt, expiresAt, desconto, metodoPagamento, clienteId, planoId, valor } = req.body;

    const assinatura = await Assinatura.findOne({ where: { id } });
    if (!assinatura) throw new Error('Assinatura não encontrada!');

    const clienteExiste = await Cliente.findByPk(clienteId);
    if (!clienteExiste) throw new Error("Cliente referenciado não encontrado!");

    const planoExiste = await Plano.findByPk(planoId);
    if (!planoExiste) throw new Error("Plano referenciado não encontrado!");

    Object.assign(assinatura, {
      createdAt,
      expiresAt,
      desconto,
      metodoPagamento,
      clienteId,
      planoId,
      valor
    });

    return await assinatura.save();
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Assinatura.findByPk(id);
    if (!obj) throw new Error("Assinatura não encontrada.");
    if (obj.expiresAt < new Date()) throw new Error("Não foi possivel deletar essa assinatura, pois ela esta expirada");
    return await obj.destroy();
  }
}

export { AssinaturaService };
