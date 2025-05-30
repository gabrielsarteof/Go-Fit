//Gabriel Sarte
import { Model, DataTypes } from 'sequelize';

class Assinatura extends Model {
  static init(sequelize) {
    super.init({
      desconto: {
        type: DataTypes.FLOAT,
        validate: {
          min: { args: [0], msg: "Desconto não pode ser negativo!" },
          max: { args: [100], msg: "Desconto não pode ser maior que 100%!" }
        }
      },
      valor: {
        type: DataTypes.FLOAT,
        validate: {
          notEmpty: { msg: "Valor deve ser preenchido!" },
          min: { args: [0], msg: "Valor deve ser maior que zero!" }
        }
      },
      metodoPagamento: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Método de Pagamento deve ser preenchido!" },
          len: { args: [2, 50], msg: "Método de Pagamento deve ter entre 3 e 50 caracteres!" }
        }
      },
      expiresAt: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: { msg: "Data de Expiração deve ser preenchida!" },
          isDate: { msg: "Data de Expiração deve ser uma data válida!" }
        }
      },
    },  {
      sequelize,
      modelName: 'assinatura',
      tableName: 'assinaturas',
      hooks: {
        beforeValidate: (assinatura) => {
          if (!assinatura.expiresAt) {
            const data = new Date();
            data.setMonth(data.getMonth() + 1);
            assinatura.expiresAt = data;
          }
        }
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'cliente_id',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Cliente deve ter um valor válido!' } }
      }
    });

    this.belongsTo(models.plano, {
      as: 'plano',
      foreignKey: {
        name: 'plano_id',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Plano deve ter um valor válido!' } }
      }
    });
  }

}

export { Assinatura };
