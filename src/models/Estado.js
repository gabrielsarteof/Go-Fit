import { Model, DataTypes } from 'sequelize';

class Estado extends Model {
  static init(sequelize) {
    super.init({
      data: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data do Estado deve seguir o formato YYYY-MM-DD." }
        }
      },
      peso: { 
        type: DataTypes.FLOAT, 
        validate: {
          isFloat: { msg: "Peso deve estar em kilos, em um valor numérico decimal." }
        }
      },
      altura: { 
        type: DataTypes.FLOAT, 
        validate: {
          isFloat: { msg: "Altura deve estar em metros, em um valor numérico decimal." }
        }
      },
      taxaGordura: { 
        type: DataTypes.FLOAT, 
        validate: {
          isFloat: { msg: "Taxa de gordura deve ser um valor numérico decimal." }
        }
      },
      circunferenciaCintura: { 
        type: DataTypes.FLOAT, 
        validate: {
          isFloat: { msg: "A circunferência da cintura deve estar em centímetros, em um valor numérico decimal." }
        }
      },
      circunferenciaBraco: { 
        type: DataTypes.FLOAT, 
        validate: {
          isFloat: { msg: "A circunferência do braço deve estar em centímetros, em um valor numérico decimal." }
        }
      },
      comentarios: DataTypes.STRING
    }, { sequelize, modelName: 'estado', tableName: 'estados' });
  }
}

export { Estado };
