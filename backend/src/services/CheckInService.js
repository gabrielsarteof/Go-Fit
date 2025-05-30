//Arthur
import { CheckIn } from '../models/CheckIn.js';
import { Cliente } from '../models/Cliente.js';
import sequelize from '../config/database-connection.js';
import { QueryTypes } from 'sequelize';

class CheckInService {
  static async findAll() {
    const objs = await CheckIn.findAll({
      include: { all: true, nested: true },
    });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await CheckIn.findByPk(id, {
      include: { all: true, nested: true },
    });
    return obj;
  }

  static async create(req) {
    const { entrada, saida, acessoAutorizado, razaoBloqueio, clienteId } = req.body;

    if (!entrada || !clienteId) {
      throw 'Horário de entrada e clienteId são obrigatórios.';
    }

    if (await this.verificarRegrasDeNegocio(req)) {
      const t = await sequelize.transaction();
      try {
        const obj = await CheckIn.create(
          {
            entrada,
            saida: saida || null,
            acessoAutorizado: acessoAutorizado !== undefined ? acessoAutorizado : true,
            razaoBloqueio: razaoBloqueio || null,
            clienteId,
          },
          { transaction: t }
        );

        await t.commit();
        return await CheckIn.findByPk(obj.id, { include: { all: true, nested: true } });
      } catch (error) {
        await t.rollback();
        throw "Erro ao criar checkin!";
      }
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { entrada, saida, acessoAutorizado, razaoBloqueio, clienteId } = req.body;

    const obj = await CheckIn.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'CheckIn não encontrado!';

    const t = await sequelize.transaction();
    try {
      Object.assign(obj, {
        entrada: entrada || obj.entrada,
        saida: saida !== undefined ? saida : obj.saida,
        acessoAutorizado: acessoAutorizado !== undefined ? acessoAutorizado : obj.acessoAutorizado,
        razaoBloqueio: razaoBloqueio !== undefined ? razaoBloqueio : obj.razaoBloqueio,
        clienteId: clienteId || obj.clienteId,
      });

      await obj.save({ transaction: t });
      await t.commit();
      return await CheckIn.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Erro ao atualizar checkin!";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await CheckIn.findByPk(id);
    if (obj == null) throw 'CheckIn não encontrado!';
    
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover este checkin!";
    }
  }

  // RN1: Cliente não pode fazer mais de um check-in por dia
  // RN2: Limite de 7 diárias semanais
  static async verificarRegrasDeNegocio(req) {
    const { entrada, clienteId } = req.body;

    const dataEntrada = new Date(entrada);
    const umaSemanaAtras = new Date(dataEntrada);
    umaSemanaAtras.setDate(dataEntrada.getDate() - 7);

    // Regra de Negócio 1: Verificação de check-in diário
    const checkInsDiarios = await sequelize.query(
      `SELECT entrada
       FROM CheckIns
       WHERE clienteId = :clienteId
       AND DATE(entrada) = DATE(:dataEntrada)`,
      {
        replacements: { clienteId, dataEntrada },
        type: QueryTypes.SELECT,
      }
    );

    if (checkInsDiarios.length > 0) {
      throw "Cliente já fez check-in hoje!";
    }

    // Regra de Negócio 2: Limite de diárias semanais (7 diárias por semana)
    const [countSemanal] = await sequelize.query(
      `SELECT COUNT(*) as total
       FROM CheckIns
       WHERE clienteId = :clienteId
       AND entrada >= :umaSemanaAtras
       AND entrada <= :dataEntrada`,
      {
        replacements: { clienteId, umaSemanaAtras, dataEntrada },
        type: QueryTypes.SELECT,
      }
    );

    if (countSemanal.total >= 7) {
      throw "Limite de 7 diárias semanais atingido!";
    }

    return true;
  }

  static async findByCliente(req) {
    const { clienteId } = req.params;
    const objs = await CheckIn.findAll({
      where: { clienteId },
      order: [['entrada', 'DESC']],
      include: { all: true, nested: true },
    });
    return objs;
  }

  static async findAutorizados(req) {
    const { autorizado } = req.query;
    const objs = await CheckIn.findAll({
      where: { acessoAutorizado: autorizado === 'true' },
      include: { all: true, nested: true },
    });
    return objs;
  }

  static async getClientesNaAcademia() {
    const objs = await CheckIn.findAll({
      where: { saida: null },
      include: { all: true, nested: true },
    });
    return objs;
  }
}

export { CheckInService };