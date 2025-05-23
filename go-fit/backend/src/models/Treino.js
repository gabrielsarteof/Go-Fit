//Arthur
import { Model, DataTypes } from 'sequelize';

class Treino extends Model {  
  static init(sequelize) {
    super.init({
      nivel: {
        type: DataTypes.ENUM('Iniciante', 'Intermediário', 'Avançado'), 
        allowNull: false,
        validate: {
          notNull: { msg: 'Nível é obrigatório' }, 
          notEmpty: { msg: 'Nível não pode ser vazio' }, 
          isIn: { 
            args: [['Iniciante', 'Intermediário', 'Avançado']],
            msg: 'Nível deve ser Iniciante, Intermediário ou Avançado'
          }
        }
      },
      objetivo: {
        type: DataTypes.STRING(100), 
        allowNull: false,
        validate: {
          notNull: { msg: 'Objetivo é obrigatório' }, 
          notEmpty: { msg: 'Objetivo não pode ser vazio' }, 
          len: { 
            args: [3, 100],
            msg: 'Objetivo deve ter entre 3 e 100 caracteres'
          }
        }
      },
      dataCriacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
        validate: {
          isDate: { msg: 'Data de criação inválida' } 
        }
      },
      dataExpiracao: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: 'Data de expiração é obrigatória' }, 
          isDate: { msg: 'Data de expiração deve ser válida' }, 
          isAfter: { 
            args: new Date().toISOString(),
            msg: 'Data de expiração deve ser futura'
          },
          isAfterDataCriacao(value) { 
            if (this.dataCriacao && value <= this.dataCriacao) {
              throw new Error('Data de expiração deve ser após a criação');
            }
          }
        }
      },
      exercicios: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Exercícios são obrigatórios' }, 
          notEmpty: { msg: 'Exercícios não podem ser vazios' } 
        }
      }
    }, { 
      sequelize, 
      modelName: 'treino',  
      tableName: 'treinos', 
      timestamps: false,
      hooks: {
        beforeValidate: (treino) => {
          if (!treino.dataCriacao) {
            treino.dataCriacao = new Date();
          }
        }
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'clienteId',
        allowNull: false,
        validate: { 
          notNull: { msg: 'Cliente é obrigatório' } 
        }
      }
    });

    this.belongsTo(models.personalTrainer, {
      as: 'personal',
      foreignKey: {
        name: 'personalTrainerId',
        allowNull: false,
        validate: { 
          notNull: { msg: 'Personal Trainer é obrigatório' } 
        }
      }
    });
  }
}

export { Treino };