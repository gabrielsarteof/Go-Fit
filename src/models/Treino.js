import { Model, DataTypes } from 'sequelize';

class Treino extends Model {
  static init(sequelize) {
    super.init({
      nivel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'O nível do treino é obrigatório' },
          notEmpty: { msg: 'O nível não pode ser vazio' },
          isIn: {
            args: [['Iniciante', 'Intermediário', 'Avançado']],
            msg: 'Nível deve ser Iniciante, Intermediário ou Avançado'
          }
        }
      },
      objetivo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'O objetivo do treino é obrigatório' },
          notEmpty: { msg: 'O objetivo não pode ser vazio' },
          len: {
            args: [3, 100],
            msg: 'O objetivo deve ter entre 3 e 100 caracteres'
          }
        }
      },
      dataCriacao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: { msg: 'Informe uma data de criação válida' }
        }
      },
      dataExpiracao: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: { msg: 'Informe uma data de expiração válida' },
          isAfterCreation(value) {
            if (value && this.dataCriacao && new Date(value) <= new Date(this.dataCriacao)) {
              throw new Error('A data de expiração deve ser após a data de criação');
            }
          }
        }
      },
      exercicios: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'A lista de exercícios é obrigatória' },
          notEmpty: { msg: 'A lista de exercícios não pode ser vazia' }
        }
      }
    }, { 
      sequelize, modelName: 'treino', tableName: 'treinos', timestamps: true,  })
  }
  
}

export { Treino };