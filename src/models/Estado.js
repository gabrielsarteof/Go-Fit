import { Model, DataTypes } from 'sequelize';

class Estado extends Model {
  static init(sequelize) {
    super.init({
      data: DataTypes.DATE,
      peso: DataTypes.FLOAT,
      altura: DataTypes.FLOAT,
      taxaGordura: DataTypes.FLOAT,
      circunferenciaCintura: DataTypes.FLOAT,
      circunferenciaBraco: DataTypes.FLOAT,
      comentarios: DataTypes.STRING
    }, { sequelize, modelName: 'estado', tableName: 'estados' });
  }
}

export { Estado };
