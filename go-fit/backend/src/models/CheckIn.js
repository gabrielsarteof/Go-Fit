//Arthur
import { Model, DataTypes } from 'sequelize';

class CheckIn extends Model {
  static init(sequelize) {
    super.init({
      entrada: {
        type: DataTypes.DATE, // Tipo correto para armazenar data e hora
        allowNull: false,
        validate: {
          notNull: { msg: 'Horário de entrada é obrigatório' },
          isValidDateTimeFormat(value) {
            if (!(value instanceof Date) || isNaN(value.getTime())) {
              throw new Error('Valor de data/hora inválido');
            }
          }
        }
      },
      saida: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isAfterEntrada(value) {
            if (value && this.entrada && new Date(value) <= new Date(this.entrada)) {
              throw new Error('Horário de saída deve ser após o horário de entrada');
            }
          }
        }
      },
      acessoAutorizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          isBoolean(value) {
            if (typeof value !== 'boolean') {
              throw new Error('O campo "acessoAutorizado" deve ser verdadeiro ou falso');
            }
          }
        }
      },
      razaoBloqueio: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 100],
            msg: 'Razão do bloqueio não pode ter mais que 100 caracteres'
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
    this.belongsTo(models.assinatura, {
      as: 'assinatura',
      foreignKey: {
        name: 'assinaturaId',
        allowNull: false,
        validate: {
          notNull: { msg: 'O campo assinaturaId deve ser preenchido com um valor válido!' }
        }
      }
    });
  }
}

export { CheckIn };
