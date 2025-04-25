//Arthur
import { PlanoTreino } from '../models/PlanoTreino.js';

class TreinoService {
  static async findAll() {
    try {
      const objs = await PlanoTreino.findAll({
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'personal', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar planos de treino: ${err.message}`);
    }
  }

  static async findByPk(req) {
    const { id } = req.params;
    try {
      const obj = await PlanoTreino.findByPk(id, {
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'personal', attributes: ['id', 'nome'] }
        ]
      });
      if (!obj) {
        throw new Error(`Plano de treino com ID ${id} não encontrado.`);
      }
      return obj;
    } catch (err) {
      throw new Error(`Erro ao buscar plano de treino por ID: ${err.message}`);
    }
  }

  static async create(req) {
    const { nivel, objetivo, dataExpiracao, exercicios, clienteId, personalId } = req.body;
    
    if (!nivel || !objetivo || !dataExpiracao || !exercicios || !clienteId || !personalId) {
      throw new Error('Todos os campos são obrigatórios');
    }
    
    try {
      const obj = await PlanoTreino.create({ 
        nivel,
        objetivo,
        dataExpiracao,
        exercicios,
        clienteId,
        personalId
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar plano de treino: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { nivel, objetivo, dataExpiracao, exercicios, clienteId, personalId } = req.body;
    
    try {
      const obj = await PlanoTreino.findByPk(id);
      if (!obj) {
        throw new Error(`Plano de treino com ID ${id} não encontrado.`);
      }
      
      Object.assign(obj, {
        nivel: nivel !== undefined ? nivel : obj.nivel,
        objetivo: objetivo !== undefined ? objetivo : obj.objetivo,
        dataExpiracao: dataExpiracao !== undefined ? dataExpiracao : obj.dataExpiracao,
        exercicios: exercicios !== undefined ? exercicios : obj.exercicios,
        clienteId: clienteId !== undefined ? clienteId : obj.clienteId,
        personalId: personalId !== undefined ? personalId : obj.personalId
      });
      
      await obj.save();
      return obj;
    } catch (err) {
      throw new Error(`Erro ao atualizar plano de treino: ${err.message}`);
    }
  }

  static async delete(req) {
    const { id } = req.params;
    try {
      const obj = await PlanoTreino.findByPk(id);
      if (!obj) {
        throw new Error(`Plano de treino com ID ${id} não encontrado.`);
      }
      await obj.destroy();
      return { message: `Plano de treino com ID ${id} deletado com sucesso.` };
    } catch (err) {
      throw new Error(`Erro ao deletar plano de treino: ${err.message}`);
    }
  }

  static async findByCliente(req) {
    const { clienteId } = req.params;
    try {
      const objs = await PlanoTreino.findAll({
        where: { clienteId },
        include: [
          { association: 'personal', attributes: ['id', 'nome'] }
        ],
        order: [['dataCriacao', 'DESC']]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar planos de treino por cliente: ${err.message}`);
    }
  }

  static async findByPersonal(req) {
    const { personalId } = req.params;
    try {
      const objs = await PlanoTreino.findAll({
        where: { personalId },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ],
        order: [['dataCriacao', 'DESC']]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar planos de treino por personal trainer: ${err.message}`);
    }
  }

  static async findAtivos(req) {
    try {
      const objs = await PlanoTreino.findAll({
        where: {
          dataExpiracao: { [Op.gte]: new Date() }
        },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'personal', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar planos de treino ativos: ${err.message}`);
    }
  }
}

export { TreinoService };