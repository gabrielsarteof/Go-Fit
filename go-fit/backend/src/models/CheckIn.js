//Arthur
import { Model, DataTypes } from 'sequelize';

class CheckIn extends Model {
  static init(sequelize) {
    super.init({
      entrada: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: { msg: 'Horário de entrada é obrigatório' },
          notEmpty: { msg: 'Horário de entrada não pode ser vazio' }
        }
      },
      saida: {
        type: DataTypes.TIME,
        allowNull: true,
        validate: {
          notEmpty: { msg: 'Horário de saída não pode ser vazio' }
        }
      },
      autorizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      razao: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: { msg: 'Razão não pode ser vazia' }
        }
      }
    }, { 
      sequelize, 
      modelName: 'checkin', 
      tableName: 'checkins',
      timestamps: false
    });
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
}

export default CheckIn;