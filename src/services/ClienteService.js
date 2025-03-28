import { Cliente } from "../models/Cliente.js";
import { Op } from "sequelize";

class ClienteService {
  
  static async findAll() {
    return await Cliente.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Cliente.findByPk(id);
  }

  static async create(req) {
    const { nome, email, telefone, dataNascimento, dataCadastro } = req.body;

    // Verifica se o email já está em uso
    const emailExistente = await Cliente.findOne({ where: { email } });
    if (emailExistente) {
      throw new Error("Já existe um cliente com este email");
    }

    // Verifica se o telefone já está em uso
    const telefoneExistente = await Cliente.findOne({ where: { telefone } });
    if (telefoneExistente) {
      throw new Error("Já existe um cliente com este telefone");
    }

    return await Cliente.create({ nome, email, telefone, dataNascimento, dataCadastro });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, email, telefone, dataNascimento, dataCadastro } = req.body;
    let obj = await Cliente.findOne({ where: { id } });

    if (!obj) {
      throw new Error("Cliente não encontrado");
    }

    // Verifica se o email já está em uso por outro cliente
    const emailExistente = await Cliente.findOne({ where: { email, id: { [Op.ne]: id } } });
    if (emailExistente) {
      throw new Error("Já existe um cliente com este email");
    }

    // Verifica se o telefone já está em uso por outro cliente
    const telefoneExistente = await Cliente.findOne({ where: { telefone, id: { [Op.ne]: id } } });
    if (telefoneExistente) {
      throw new Error("Já existe um cliente com este telefone");
    }

    Object.assign(obj, { nome, email, telefone, dataNascimento, dataCadastro });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await Cliente.findByPk(id);
    return await obj.destroy();
  }
}

export { ClienteService };