import sqlite3 from 'sqlite3';
import fs from 'fs';

const sqlite = sqlite3.verbose();

const dbFile = './database.sqlite'; 
const outputFile = './dump.json';

const db = new sqlite.Database(dbFile);

function getTables() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows.map(row => row.name));
    });
  });
}

function getTableData(table) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${table}`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

(async () => {
  try {
    const tables = await getTables();
    const result = {};

    for (const table of tables) {
      console.log(`Exportando dados da tabela: ${table}`);
      const data = await getTableData(table);
      result[table] = data;
    }

    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
    console.log(`Dados exportados para ${outputFile}`);
    db.close();
  } catch (error) {
    console.error('Erro ao exportar dados:', error);
    db.close();
  }
})();
