import { Model, DataTypes } from 'sequelize';

class PersonalTrainer extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome não pode ficar vazio." },
          len: { args: [1, 50], msg: "Nome pode ter no máximo 50 caracteres." },
        }
      },
      certificacao: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Certificação não pode ficar vazio." },
          len: { args: [1, 50], msg: "Certificação pode ter no máximo 50 caracteres." },
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Email não pode ficar vazio." },
          len: { args: [1, 50], msg: "Email pode ter no máximo 50 caracteres." },
        }
      },
      telefone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Telefone não pode ficar vazio." },
          is: { args: /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}/, msg: "Telefone deve seguir o padrão (NN) NNNNN-NNNN" },
        }
      },
      horarioAtendimento: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Horário de atendimento não pode ficar vazio." },
        }
      },
      especialidade: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Especialidade não pode ficar vazio." },
          len: { args: [1, 50], msg: "Especialidade pode ter no máximo 50 caracteres." },
        }
      },
    }, { sequelize, modelName: 'personalTrainer', tableName: 'personais' });


  }
  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'clienteId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Cliente deve ter um valor válido!' } }
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.nutricionista, {
      as: 'nutricionista',
      foreignKey: {
        name: 'nutricionistaId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Nutricionista deve ter um valor válido!' } }
      }
    });
  }
}

export { PersonalTrainer };
