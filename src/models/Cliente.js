import { Model, DataTypes } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome do Cliente deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Cliente deve ter entre 2 e 50 caracteres!" }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Email do Cliente deve ser preenchido!" },
          isEmail: { msg: "Email do Cliente deve ser válido!" }
        }
      },
      telefone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Telefone do Cliente deve ser preenchido!" },
          len: { args: [10, 15], msg: "Telefone do Cliente deve ter entre 10 e 15 caracteres!" }
        }
      },
      dataNascimento: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: { msg: "Data de Nascimento deve ser preenchida!" },
          isDate: { msg: "Data de Nascimento deve ser uma data válida!" }
        }
      }
    }, { sequelize, modelName: 'cliente', tableName: 'clientes' });
  }
}

export { Cliente };
