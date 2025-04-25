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
          notEmpty: { msg: 'Horário de entrada não pode ser vazio' }, 
          isValidTimeFormat(value) { 
            if (!/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(value)) {
              throw new Error('Formato de hora inválido (use HH:MM:SS)');
            }
          }
        }
      },
      saida: {
        type: DataTypes.TIME,
        allowNull: true,
        validate: {
          isAfterEntrada(value) { 
            if (value && this.entrada && value <= this.entrada) {
              throw new Error('Horário de saída deve ser após a entrada');
            }
          }
        }
      },
      autorizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          isBoolean(value) { 
            if (typeof value !== 'boolean') {
              throw new Error('Autorizado deve ser true ou false');
            }
          }
        }
      },
      razao: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: { 
            args: [0, 100],
            msg: 'Razão não pode ter mais que 100 caracteres'
          }
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

export { CheckIn };