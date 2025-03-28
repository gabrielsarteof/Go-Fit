import { Model, DataTypes } from 'sequelize';

class Nutricionista extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      horarioAtendimento: DataTypes.INTEGER
    }, { sequelize, modelName: 'nutricionista', tableName: 'nutricionistas' });
  }
}


export { Nutricionista };
