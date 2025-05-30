export const databaseConfig = {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,           
      rejectUnauthorized: false 
    }
  },
  define: {
    timestamps: true,       
    freezeTableName: true,  
    underscored: true       
  },
  logging: false            
};
