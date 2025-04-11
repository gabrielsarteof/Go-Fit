//Gabriel Sarte
import { Assinatura } from "../models/Assinatura.js";
import { Op } from "sequelize";

class AssinaturaService {
  
  static async findAll() {
    return await Assinatura.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Assinatura.findByPk(id);
  }

  static async create(req) {
    const { dataAssinatura, dataExpiracao, desconto, metodoPagamento, clienteId, planoId, valor } = req.body;
    let descontoFinal = desconto || 0;
    
    // Verifica se já existe uma assinatura ativa para o cliente
    const existingAssinatura = await Assinatura.findOne({ 
      where: { 
        clienteId, 
        dataExpiracao: { [Op.gt]: new Date() } // Verifica se a assinatura ainda está ativa
      } 
    });
    if (existingAssinatura) {
      throw new Error("Já existe uma assinatura ativa para este cliente");
    }

    // Verifica se há assinaturas nos últimos 12 meses para aplicar um bônus de 10% no desconto
    const dataLimite = new Date();
    dataLimite.setFullYear(dataLimite.getFullYear() - 1);
    
    const assinaturasRecentes = await Assinatura.findOne({
      where: {
        clienteId,
        dataAssinatura: { [Op.gte]: dataLimite }
      }
    });

    if (assinaturasRecentes) {
      descontoFinal += 10; // Bônus de 10%
    }

    const valorFinal = valor * (1 - descontoFinal / 100);
    
    return await Assinatura.create({ dataAssinatura, dataExpiracao, desconto: descontoFinal, metodoPagamento, clienteId, planoId, valor: valorFinal });
  }

  static async update(req) {
    const { id } = req.params;
    const { dataAssinatura, dataExpiracao, desconto, metodoPagamento, clienteId, planoId, valor } = req.body;
    let obj = await Assinatura.findOne({ where: { id } });
    
    Object.assign(obj, { dataAssinatura, dataExpiracao, desconto, metodoPagamento, clienteId, planoId, valor });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await Assinatura.findByPk(id);
    return await obj.destroy();
  }
}

export { AssinaturaService };