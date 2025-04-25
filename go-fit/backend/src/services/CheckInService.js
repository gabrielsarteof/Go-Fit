//Arthur
import { CheckIn } from '../models/CheckIn.js';

class CheckInService {
  static async findAll() {
    try {
      const objs = await CheckIn.findAll({
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar checkins: ${err.message}`);
    }
  }

  static async findByPk(req) {
    const { id } = req.params;
    try {
      const obj = await CheckIn.findByPk(id, {
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      if (!obj) {
        throw new Error(`CheckIn com ID ${id} não encontrado.`);
      }
      return obj;
    } catch (err) {
      throw new Error(`Erro ao buscar checkin por ID: ${err.message}`);
    }
  }

  static async create(req) {
    const { entrada, saida, autorizado, razao, clienteId } = req.body;
    
    if (!entrada || !clienteId) {
      throw new Error('Horário de entrada e cliente são obrigatórios.');
    }
    
    try {
      const obj = await CheckIn.create({ 
        entrada,
        saida,
        autorizado: autorizado || false,
        razao,
        clienteId
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar checkin: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { entrada, saida, autorizado, razao, clienteId } = req.body;
    
    try {
      const obj = await CheckIn.findByPk(id);
      if (!obj) {
        throw new Error(`CheckIn com ID ${id} não encontrado.`);
      }
      
      Object.assign(obj, {
        entrada: entrada !== undefined ? entrada : obj.entrada,
        saida: saida !== undefined ? saida : obj.saida,
        autorizado: autorizado !== undefined ? autorizado : obj.autorizado,
        razao: razao !== undefined ? razao : obj.razao,
        clienteId: clienteId !== undefined ? clienteId : obj.clienteId
      });
      
      await obj.save();
      return obj;
    } catch (err) {
      throw new Error(`Erro ao atualizar checkin: ${err.message}`);
    }
  }

  static async delete(req) {
    const { id } = req.params;
    try {
      const obj = await CheckIn.findByPk(id);
      if (!obj) {
        throw new Error(`CheckIn com ID ${id} não encontrado.`);
      }
      await obj.destroy();
      return { message: `CheckIn com ID ${id} deletado com sucesso.` };
    } catch (err) {
      throw new Error(`Erro ao deletar checkin: ${err.message}`);
    }
  }

  static async findByCliente(req) {
    const { clienteId } = req.params;
    try {
      const objs = await CheckIn.findAll({
        where: { clienteId },
        order: [['entrada', 'DESC']]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar checkins por cliente: ${err.message}`);
    }
  }

  static async findAutorizados(req) {
    const { autorizado } = req.query;
    try {
      const objs = await CheckIn.findAll({
        where: { autorizado: autorizado === 'true' },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar checkins por autorização: ${err.message}`);
    }
  }
}

export { CheckInService };