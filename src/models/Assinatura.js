import { Model, DataTypes } from 'sequelize';

class Assinatura extends Model {
  static init(sequelize) {
    super.init({
      dataAssinatura: DataTypes.DATE,
      dataExpiracao: DataTypes.DATE,
      desconto: DataTypes.FLOAT,
      valor: DataTypes.FLOAT,
      metodoPagamento: DataTypes.STRING
    }, { sequelize, modelName: 'assinatura', tableName: 'assinaturas' });
  }
}

export { Assinatura };
