import { Model, DataTypes } from 'sequelize';

class Administrador extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome do Administrador deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Administrador deve ter entre 2 e 50 letras!" }
        }
      },
      senha: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Senha do Administrador deve ser preenchida!" }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: { msg: "E-mail do Administrador deve ser válido!" }
        }
      },
      telefone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Telefone do Administrador deve ser preenchido!" }
        }
      }
    }, { sequelize, modelName: 'administrador', tableName: 'administradores' });
  }
}


export { Administrador };
