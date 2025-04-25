//Arthur
import { Model, DataTypes } from 'sequelize';

class Dieta extends Model {
  static init(sequelize) {
    super.init({
      descricao: {
        type: DataTypes.STRING(255), 
        allowNull: false,
        validate: {
          notNull: { msg: 'A descrição é obrigatória' }, 
          notEmpty: { msg: 'A descrição não pode ser vazia' }, 
          len: { 
            args: [3, 255],
            msg: 'A descrição deve ter entre 3 e 255 caracteres'
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
          isDate: { msg: 'Data de expiração inválida' }, 
          isAfterDataCriacao(value) { 
            if (this.dataCriacao && value <= this.dataCriacao) {
              throw new Error('Data de expiração deve ser após a criação');
            }
          }
        }
      },
      instrucoes: {
        type: DataTypes.TEXT, 
        allowNull: false,
        validate: {
          notEmpty: { msg: "Instruções não podem ser vazias" } 
        }
      }
    }, { 
      sequelize, 
      modelName: 'dieta', 
      tableName: 'dietas',
      paranoid: true, 
      indexes: [
        {
          unique: true,
          fields: ['clienteId', 'dataCriacao'] 
        }
      ]
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

    this.belongsTo(models.nutricionista, {
      as: 'nutricionista',
      foreignKey: {
        name: 'nutricionistaId',
        allowNull: false,
        validate: { 
          notNull: { msg: 'Nutricionista é obrigatório' } 
        }
      }
    });
  }
}

export { Dieta };