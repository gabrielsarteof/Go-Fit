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
      sequelize, modelName: 'checkIn', tableName: 'checkins' });
  }
}

export { CheckIn };