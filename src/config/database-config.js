<<<<<<< HEAD
=======

// Configuração do banco de dados no ambiente de teste
>>>>>>> 2eb5a7465b76c94ee64aaa67ce7da74042e61510
export const databaseConfig = {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
      timestamps: true,
      freezeTableName: true,
      underscored: true
    }
<<<<<<< HEAD
  };
=======
  };
  
  /*
  // Configuração do banco de dados no ambiente de desenvolvimento
  export const databaseConfig = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'scv-backend-node-sequelize',
    define: {
      timestamps: true,
      freezeTableName: true,
      underscored: true
    }
  };
  */
  
  /*
  // Configuração do banco de dados no ambiente de produção
  export const databaseConfig = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'scv-backend-node-sequelize',
    define: {
      timestamps: true,
      freezeTableName: true,
      underscored: true
    }
  };
  */
>>>>>>> 2eb5a7465b76c94ee64aaa67ce7da74042e61510
