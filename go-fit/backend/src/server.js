import express from "express";
import routes from './routes.js';

// Importando configuração e estabelecimento da conexão com o banco de dados
import sequelize from './config/database-connection.js';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);