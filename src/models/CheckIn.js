import { Model, DataTypes } from 'sequelize';

class CheckIn extends Model {
  static init(sequelize) {
    super.init({
      entrada: DataTypes.TIME,
      saida: DataTypes.TIME,
      acessoAutorizado: DataTypes.BOOLEAN,
      razaoBloqueio: DataTypes.STRING
    }, { sequelize, modelName: 'checkIn', tableName: 'checkins' });
  }
}

export { CheckIn};
