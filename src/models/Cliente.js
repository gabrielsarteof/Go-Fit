import { Model, DataTypes } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
      dataNascimento: DataTypes.DATEONLY,
    }, { sequelize, modelName: 'cliente', tableName: 'clientes' });
  }
}


export { Cliente };
