import { Sequelize } from 'sequelize';
import sqlite3 from 'sqlite3';
import { Administrador } from './src/models/Administrador.js'; 
import { Assinatura } from './src/models/Assinatura.js';
import { Cliente } from './src/models/Cliente.js';  
import { Dieta } from './src/models/Dieta.js';
import { Estado } from './src/models/Estado.js';
import { Fidelidade } from './src/models/Fidelidade.js';
import { Nutricionista } from './src/models/Nutricionista.js';
import { PersonalTrainer } from './src/models/PersonalTrainer.js';
import { Plano } from './src/models/Plano.js';
import { Treino } from './src/models/Treino.js';
import dotenv from 'dotenv';  

dotenv.config();  

const sequelizePostgres = new Sequelize(process.env.SUPABASE_DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});


const sqliteDb = new sqlite3.Database('database.sqlite');  


const transferData = async () => {
  try {
    // Migrar dados da tabela 'administradores'
    sqliteDb.all('SELECT * FROM administradores', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de administradores:', err);
        return;
      }

      for (let row of rows) {
        await Administrador.create({
          nome: row.nome,
          senha: row.senha,
          email: row.email,
          telefone: row.telefone,
        });
      }
      console.log('Dados de administradores migrados com sucesso!');
    });

    // Migrar dados da tabela 'clientes'
    sqliteDb.all('SELECT * FROM clientes', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de clientes:', err);
        return;
      }

      for (let row of rows) {
        await Cliente.create({
          nome: row.nome,
          email: row.email,
          telefone: row.telefone,
          data_nascimento: row.data_nascimento,
        });
      }
      console.log('Dados de clientes migrados com sucesso!');
    });

    // Migrar dados da tabela 'assinaturas'
    sqliteDb.all('SELECT * FROM assinaturas', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de assinaturas:', err);
        return;
      }

      for (let row of rows) {
        await Assinatura.create({
          desconto: row.desconto,
          valor: row.valor,
          metodo_pagamento: row.metodo_pagamento,
          cliente_id: row.cliente_id,
          plano_id: row.plano_id,
          createdAt: row.createdAt,
          updatedAt: row.updatedAt,
          expires_at: row.expires_at,
        });
      }
      console.log('Dados de assinaturas migrados com sucesso!');
    });

    // Migrar dados da tabela 'dietas'
    sqliteDb.all('SELECT * FROM dietas', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de dietas:', err);
        return;
      }

      for (let row of rows) {
        await Dieta.create({
          descricao: row.descricao,
          created_at: row.created_at,
          expires_at: row.expires_at,
          instrucoes: row.instrucoes,
          cliente_id: row.cliente_id,
          nutricionista_id: row.nutricionista_id,
        });
      }
      console.log('Dados de dietas migrados com sucesso!');
    });

    // Migrar dados da tabela 'estados'
    sqliteDb.all('SELECT * FROM estados', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de estados:', err);
        return;
      }

      for (let row of rows) {
        await Estado.create({
          data: row.data,
          peso: row.peso,
          altura: row.altura,
          taxa_gordura: row.taxa_gordura,
          circunferencia_cintura: row.circunferencia_cintura,
          circunferencia_braco: row.circunferencia_braco,
          comentarios: row.comentarios,
          cliente_id: row.cliente_id,
          nutricionista_id: row.nutricionista_id,
        });
      }
      console.log('Dados de estados migrados com sucesso!');
    });

    // Migrar dados da tabela 'fidelidades'
    sqliteDb.all('SELECT * FROM fidelidades', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de fidelidade:', err);
        return;
      }

      for (let row of rows) {
        await Fidelidade.create({
          cliente_id: row.cliente_id,
          periodo_inicio: row.periodo_inicio,
          periodo_fim: row.periodo_fim,
          beneficio_aplicado: row.beneficio_aplicado,
        });
      }
      console.log('Dados de fidelidades migrados com sucesso!');
    });

    // Migrar dados da tabela 'nutricionistas'
    sqliteDb.all('SELECT * FROM nutricionistas', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de nutricionistas:', err);
        return;
      }

      for (let row of rows) {
        await Nutricionista.create({
          nome: row.nome,
          email: row.email,
          telefone: row.telefone,
          horario_atendimento: row.horario_atendimento,
        });
      }
      console.log('Dados de nutricionistas migrados com sucesso!');
    });

    // Migrar dados da tabela 'personal_trainers'
    sqliteDb.all('SELECT * FROM personais', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de personais:', err);
        return;
      }

      for (let row of rows) {
        await PersonalTrainer.create({
          nome: row.nome,
          certificacao: row.certificacao,
          email: row.email,
          telefone: row.telefone,
          horario_atendimento: row.horario_atendimento,
          especialidade: row.especialidade,
        });
      }
      console.log('Dados de personais migrados com sucesso!');
    });

    // Migrar dados da tabela 'planos'
    sqliteDb.all('SELECT * FROM planos', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de planos:', err);
        return;
      }

      for (let row of rows) {
        await Plano.create({
          nome: row.nome,
          frequencia: row.frequencia,
          valor: row.valor,
        });
      }
      console.log('Dados de planos migrados com sucesso!');
    });

    // Migrar dados da tabela 'treinos'
    sqliteDb.all('SELECT * FROM treinos', async (err, rows) => {
      if (err) {
        console.error('Erro ao ler dados de treinos:', err);
        return;
      }

      for (let row of rows) {
        await Treino.create({
          nivel: row.nivel,
          objetivo: row.objetivo,
          created_at: row.created_at,
          expires_at: row.expires_at,
          exercicios: row.exercicios, // Supondo que seja um JSON
          cliente_id: row.cliente_id,
          personal_trainer_id: row.personal_trainer_id,
        });
      }
      console.log('Dados de treinos migrados com sucesso!');
    });

  } catch (error) {
    console.error('Erro na migração dos dados:', error);
  } finally {
    sqliteDb.close();  
  }
};

// Chama a função de migração
transferData();
