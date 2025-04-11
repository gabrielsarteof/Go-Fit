//Gabriel Sarte
import { Administrador } from "../models/Administrador.js";
import { Op } from "sequelize";

class AdministradorService {
  
  static async findAll() {
    return await Administrador.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Administrador.findByPk(id);
  }

  static async create(req) {
    const { nome, senha, email, telefone } = req.body;
    
    const existingEmail = await Administrador.findOne({ where: { email } });
    if (existingEmail) {
      throw new Error("Já existe um administrador com este e-mail");
    }

    const existingTelefone = await Administrador.findOne({ where: { telefone } });
    if (existingTelefone) {
      throw new Error("Já existe um administrador com este telefone");
    }

    return await Administrador.create({ nome, senha, email, telefone });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, senha, email, telefone } = req.body;
    let obj = await Administrador.findOne({ where: { id } });

    const existingEmail = await Administrador.findOne({
      where: {
        id: { [Op.ne]: id },
        email
      }
    });
    if (existingEmail) {
      throw new Error("Já existe um administrador com este e-mail");
    }
    
    const existingTelefone = await Administrador.findOne({
      where: {
        id: { [Op.ne]: id },
        telefone
      }
    });
    if (existingTelefone) {
      throw new Error("Já existe um administrador com este telefone");
    }
    
    Object.assign(obj, { nome, senha, email, telefone });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await Administrador.findByPk(id);
    return await obj.destroy();
  }
}

export { AdministradorService };