import { Model, DataTypes } from 'sequelize';

class Treino extends Model {
  static init(sequelize) {
    super.init({
      nivel: DataTypes.STRING,
      objetivo: DataTypes.STRING,
      dataCriacao: DataTypes.DATE,
      dataExpiracao: DataTypes.DATE,
      exercicios: DataTypes.STRING
    }, { sequelize, modelName: 'treino', tableName: 'treinos' });
  }
}

export { Treino };
