import { Model, DataTypes } from 'sequelize';

class Dieta extends Model {
  static init(sequelize) {
    super.init({
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'A descrição é obrigatória' },
          notEmpty: { msg: 'A descrição não pode ser vazia' },
          len: {
            args: [3, 255],
            msg: 'A descrição deve ter entre 3 e 255 caracteres'
          }
        }  
      },  
      dataCriacao: {
        type: DataTypes.DATE,
      },
      dataExpiracao: {
        type: DataTypes.DATE,
      },
      instrucoes: {
        type: DataTypes.STRING,
        allowNull: false,  
        validate: {
          notEmpty: { msg: "Instruções não podem ser vazias" }
        }
      }
    }, { 
      sequelize, modelName: 'dieta', tableName: 'dietas' });
  }
}

export { Dieta };