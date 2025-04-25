//Arthur
import { Dieta } from '../models/Dieta.js';

class DietaService {
  static async findAll() {
    try {
      const objs = await Dieta.findAll({
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'nutricionista', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar dietas: ${err.message}`);
    }
  }

  static async findByPk(req) {
    const { id } = req.params;
    try {
      const obj = await Dieta.findByPk(id, {
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'nutricionista', attributes: ['id', 'nome'] }
        ]
      });
      if (!obj) {
        throw new Error(`Dieta com ID ${id} não encontrada.`);
      }
      return obj;
    } catch (err) {
      throw new Error(`Erro ao buscar dieta por ID: ${err.message}`);
    }
  }

  static async create(req) {
    const { descricao, dataCriacao, dataExpiracao, instrucoes, clienteId, nutricionistaId } = req.body;
    
    if (!descricao || !instrucoes || !dataExpiracao || !clienteId || !nutricionistaId) {
      throw new Error('Descrição, instruções, data de expiração, cliente e nutricionista são obrigatórios.');
    }
    
    try {
      const obj = await Dieta.create({ 
        descricao, 
        dataCriacao: dataCriacao || new Date(),
        dataExpiracao,
        instrucoes,
        clienteId,
        nutricionistaId
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar dieta: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { descricao, dataExpiracao, instrucoes, clienteId, nutricionistaId } = req.body;
    
    try {
      const obj = await Dieta.findByPk(id);
      if (!obj) {
        throw new Error(`Dieta com ID ${id} não encontrada.`);
      }
      
      Object.assign(obj, {
        descricao: descricao !== undefined ? descricao : obj.descricao,
        dataExpiracao: dataExpiracao !== undefined ? dataExpiracao : obj.dataExpiracao,
        instrucoes: instrucoes !== undefined ? instrucoes : obj.instrucoes,
        clienteId: clienteId !== undefined ? clienteId : obj.clienteId,
        nutricionistaId: nutricionistaId !== undefined ? nutricionistaId : obj.nutricionistaId
      });
      
      await obj.save();
      return obj;
    } catch (err) {
      throw new Error(`Erro ao atualizar dieta: ${err.message}`);
    }
  }

  static async delete(req) {
    const { id } = req.params;
    try {
      const obj = await Dieta.findByPk(id);
      if (!obj) {
        throw new Error(`Dieta com ID ${id} não encontrada.`);
      }
      await obj.destroy();
      return { message: `Dieta com ID ${id} deletada com sucesso.` };
    } catch (err) {
      throw new Error(`Erro ao deletar dieta: ${err.message}`);
    }
  }

  static async findByCliente(req) {
    const { clienteId } = req.params;
    try {
      const objs = await Dieta.findAll({
        where: { clienteId },
        include: [
          { association: 'nutricionista', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar dietas por cliente: ${err.message}`);
    }
  }

  static async findByNutricionista(req) {
    const { nutricionistaId } = req.params;
    try {
      const objs = await Dieta.findAll({
        where: { nutricionistaId },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar dietas por nutricionista: ${err.message}`);
    }
  }
}

export { DietaService };