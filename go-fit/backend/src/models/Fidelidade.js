import { Model, DataTypes } from 'sequelize';

class Fidelidade extends Model {
  static init(sequelize) {
    super.init({
      periodoInicio: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: { msg: 'Data de início deve ser válida.' }
        }
      },
      periodoFim: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: { msg: 'Data de fim deve ser válida.' },
          isAfterInicio(value) {
            if (this.periodoInicio && value <= this.periodoInicio) {
              throw new Error('Data de fim deve ser após a data de início.');
            }
          }
        }
      },
      beneficioAplicado: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
          msg: 'Benefício aplicado deve ser um valor positivo.'
        }
      }
    }, {
      sequelize,
      modelName: 'fidelidade',
      tableName: 'fidelidades',
      timestamps: true
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'clienteId',
        allowNull: false
      }
    });
  }
}

export { Fidelidade };
