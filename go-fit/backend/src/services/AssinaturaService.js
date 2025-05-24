//Gabriel Sarte
import { Assinatura } from "../models/Assinatura.js";
import { Cliente } from "../models/Cliente.js";
import { Plano } from "../models/Plano.js";
import { Op } from "sequelize";
import { Fidelidade } from "../models/Fidelidade.js";
import { CheckIn } from "../models/CheckIn.js";


class AssinaturaService {

  static async findAll() {
    return await Assinatura.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Assinatura.findByPk(id);
  }


  static async verificarRegrasDeNegocio({ clienteId }) {
  // Regra 1: não pode haver mais de uma assinatura ativa para um mesmi cliente
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
  // Regra 2: Conceder 50% de desconto para clientes que tenham 12 meses consecutivos de fidelidade
  const ultimoCiclo = await Fidelidade.findOne({
    where: { clienteId },
    order: [['periodoFim', 'DESC']]
  });
  const now = new Date();
  const inicioWindow = ultimoCiclo
    ? new Date(ultimoCiclo.periodoFim)
    : new Date(now.getFullYear(), now.getMonth() - 11, 1);

  // Busca todas as assinaturas do cliente dentro da janela de 12 meses
  const assinaturas = await Assinatura.findAll({
    where: {
      clienteId,
      createdAt: { [Op.gte]: inicioWindow }
    }
  });

  // Mapeia os meses efetivamente pagos
  const mesesPresentes = new Set(
    assinaturas.map(a => {
      const d = a.createdAt;
      return `${d.getFullYear()}-${d.getMonth()}`;
    })
  );
  // Inclui o mês corrente para somar o 12º mês
  mesesPresentes.add(`${now.getFullYear()}-${now.getMonth()}`);

  // Gera a lista de 12 meses consecutivos esperados 
  const mesesNecessarios = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (11 - i), 1);
    return `${d.getFullYear()}-${d.getMonth()}`;
  });

  // Verifica se todos os meses estão presentes
  const tem12Consecutivos = mesesNecessarios.every(m => mesesPresentes.has(m));

  if (tem12Consecutivos) {
    // concede 50% e informa o período de fidelidade
    return {
      valido: true,
      desconto: 50,
      aplicarCicloFidelidade: true,
      periodoFidelidade: {
        inicio: new Date(now.getFullYear(), now.getMonth() - 11, 1),
        fim:   new Date(now.getFullYear(), now.getMonth(), 1)
      }
    };
  }

  // caso contrário, sem desconto extra
  return {
    valido: true,
    desconto: 0,
    aplicarCicloFidelidade: false,
    periodoFidelidade: null
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
    await CheckIn.destroy({ where: { assinaturaId: id } });
    return await obj.destroy();
  }
}

export { AssinaturaService };
