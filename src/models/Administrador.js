import { Model, DataTypes } from 'sequelize';

class Administrador extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome do Administrador deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Administrador deve ter entre 2 e 50 caracteres!" }
        }
      },
      senha: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Senha do Administrador deve ser preenchida!" },
          len: { args: [6, 100], msg: "Senha do Administrador deve ter pelo menos 6 caracteres!" }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "E-mail do Administrador deve ser preenchido!" },
          isEmail: { msg: "E-mail do Administrador deve ser válido!" }
        }
      },
      telefone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Telefone do Administrador deve ser preenchido!" },
          len: { args: [10, 15], msg: "Telefone do Administrador deve ter entre 10 e 15 caracteres!" }
        }
      }
    }, { sequelize, modelName: 'administrador', tableName: 'administradores' });
  }
}

export { Administrador };
