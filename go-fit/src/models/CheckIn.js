import { Model, DataTypes } from 'sequelize';

class CheckIn extends Model {
  static init(sequelize) {
    super.init({
      entrada: {
        type: DataTypes.DATE,
      },
      saida: {
        type: DataTypes.DATE,
      },
      acessoAutorizado: {
        type: DataTypes.BOOLEAN,
      },
      razaoBloqueio: {
        type: DataTypes.STRING,
      }
    }, {
      sequelize, modelName: 'checkIn', tableName: 'checkins'
    });
  }

  static associate(models) {
    this.belongsTo(models.assinatura, {
      as: 'assinatura',
      foreignKey: {
        name: 'assinaturaId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Assinatura deve ter um valor válido!' } }
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.administrador, {
      as: 'administrador',
      foreignKey: {
        name: 'administradorId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Administrador deve ter um valor válido!' } }
      }
    });
  }
}

export { CheckIn };