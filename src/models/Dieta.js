import { Model, DataTypes } from 'sequelize';

class Dieta extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      dataCriacao: DataTypes.DATE,
      dataExpiracao: DataTypes.DATE,
      instrucoes: DataTypes.STRING
    }, { sequelize, modelName: 'dieta', tableName: 'dietas' });
  }
}

export { Dieta };
