import { Model, DataTypes } from 'sequelize';

class PersonalTrainer extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      certificacao: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      horarioAtendimento: DataTypes.STRING,
      especialidade: DataTypes.STRING
    }, { sequelize, modelName: 'personalTrainer', tableName: 'personais' });
  }
}

export { PersonalTrainer };
