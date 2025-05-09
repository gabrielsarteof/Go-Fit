# go-fit\.gitignore

```
# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/
```

# go-fit\backend\database.sqlite

This is a binary file of the type: Binary

# go-fit\backend\eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

# go-fit\backend\package.json

```json
{
  "name": "go-fit-backend",
  "version": "1.0.0",
  "description": "Backend do sistema GO-FIT",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js"
  },
  "author": "Gabriel Sarte",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "pg": "^8.8.0",
    "sequelize": "^6.28.0",
    "sqlite3": "^5.1.4"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}

```

# go-fit\backend\src\config\database-config.js

```js
export const databaseConfig = {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
      timestamps: true,
      freezeTableName: true,
      underscored: true
    }
  };

```

# go-fit\backend\src\config\database-connection.js

```js
import Sequelize from 'sequelize';
import { databaseConfig } from "./database-config.js";
import { Administrador } from '../models/Administrador.js';
import { Assinatura } from '../models/Assinatura.js';
import { CheckIn } from '../models/CheckIn.js';
import { Cliente } from '../models/Cliente.js';
import { Dieta } from '../models/Dieta.js';
import { Estado } from '../models/Estado.js';
import { Nutricionista } from '../models/Nutricionista.js';
import { PersonalTrainer } from '../models/PersonalTrainer.js';
import { Plano } from '../models/Plano.js';
import { Treino } from '../models/Treino.js';

const sequelize = new Sequelize(databaseConfig);

Administrador.init(sequelize);
Assinatura.init(sequelize);
CheckIn.init(sequelize);
Cliente.init(sequelize);
Dieta.init(sequelize);
Estado.init(sequelize);
Nutricionista.init(sequelize);
PersonalTrainer.init(sequelize);
Plano.init(sequelize);
Treino.init(sequelize);

const associateModels = (models) => {
    if (Cliente.associate) {
        Cliente.associate(models);
    }

    if (Administrador.associate) {
        Administrador.associate(models);
    }

    if (Assinatura.associate) {
        const originalAssociate = Assinatura.associate;

        Assinatura.associate = function (models) {
            if (!this._associationsDone) {
                originalAssociate.call(this, models);
                this._associationsDone = true;
            }
        };

        Assinatura.associate(models);
    }

    if (CheckIn.associate) {
        const originalAssociate = CheckIn.associate;

        CheckIn.associate = function (models) {
            if (!this._associationsDone) {
                originalAssociate.call(this, models);
                this._associationsDone = true;
            }
        };

        CheckIn.associate(models);
    }

    if (Dieta.associate) {
        const originalAssociate = Dieta.associate;

        Dieta.associate = function (models) {
            if (!this._associationsDone) {
                originalAssociate.call(this, models);
                this._associationsDone = true;
            }
        };

        Dieta.associate(models);
    }

    if (Estado.associate) {
        const originalAssociate = Estado.associate;

        Estado.associate = function (models) {
            if (!this._associationsDone) {
                originalAssociate.call(this, models);
                this._associationsDone = true;
            }
        };

        Estado.associate(models);
    }

    if (Nutricionista.associate) {
        Nutricionista.associate(models);
    }

    if (PersonalTrainer.associate) {
        PersonalTrainer.associate(models);
    }

    if (Plano.associate) {
        Plano.associate(models);
    }

    if (Treino.associate) {
        const originalAssociate = Treino.associate;

        Treino.associate = function (models) {
            if (!this._associationsDone) {
                originalAssociate.call(this, models);
                this._associationsDone = true;
            }
        };

        Treino.associate(models);
    }
};

associateModels(sequelize.models);

databaseInserts();

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true });


        const admin1 = await Administrador.create({
            nome: "Carlos Silva",
            senha: "Admin@123",
            email: "carlos.admin@gofit.com",
            telefone: "(28) 98765-4321"
        });

        const admin2 = await Administrador.create({
            nome: "Ana Oliveira",
            senha: "Ana#4567",
            email: "ana.admin@gofit.com",
            telefone: "(28) 91234-5678"
        });

        const admin3 = await Administrador.create({
            nome: "Roberto Santos",
            senha: "Roberto$789",
            email: "roberto.admin@gofit.com",
            telefone: "(28) 99876-5432"
        });

        const admin4 = await Administrador.create({
            nome: "Juliana Costa",
            senha: "Costa!101",
            email: "juliana.admin@gofit.com",
            telefone: "(28) 95555-9999"
        });


        const nutri1 = await Nutricionista.create({
            nome: "Mariana Alves",
            email: "mariana.nutri@gofit.com",
            telefone: "(28) 98888-7777",
            horarioAtendimento: "Segunda a Sexta, 8h às 17h"
        });

        const nutri2 = await Nutricionista.create({
            nome: "Pedro Mendes",
            email: "pedro.nutri@gofit.com",
            telefone: "(28) 97777-8888",
            horarioAtendimento: "Segunda a Sexta, 9h às 18h"
        });

        const nutri3 = await Nutricionista.create({
            nome: "Camila Rocha",
            email: "camila.nutri@gofit.com",
            telefone: "(28) 96666-5555",
            horarioAtendimento: "Terça a Sábado, 8h às 17h"
        });

        const nutri4 = await Nutricionista.create({
            nome: "Lucas Ferreira",
            email: "lucas.nutri@gofit.com",
            telefone: "(28) 95555-6666",
            horarioAtendimento: "Segunda a Sexta, 10h às 19h"
        });


        const personal1 = await PersonalTrainer.create({
            nome: "Rafael Souza",
            certificacao: "CREF 12345-G/SP",
            email: "rafael.personal@gofit.com",
            telefone: "(28) 94444-3333",
            horarioAtendimento: "Segunda a Sexta, 6h às 22h",
            especialidade: "Musculação"
        });

        const personal2 = await PersonalTrainer.create({
            nome: "Fernanda Lima",
            certificacao: "CREF 54321-G/SP",
            email: "fernanda.personal@gofit.com",
            telefone: "(28) 93333-4444",
            horarioAtendimento: "Segunda a Sábado, 7h às 21h",
            especialidade: "Funcional"
        });

        const personal3 = await PersonalTrainer.create({
            nome: "Gustavo Martins",
            certificacao: "CREF 67890-G/SP",
            email: "gustavo.personal@gofit.com",
            telefone: "(28) 92222-1111",
            horarioAtendimento: "Terça a Domingo, 8h às 20h",
            especialidade: "CrossFit"
        });

        const personal4 = await PersonalTrainer.create({
            nome: "Patrícia Campos",
            certificacao: "CREF 09876-G/SP",
            email: "patricia.personal@gofit.com",
            telefone: "(28) 91111-2222",
            horarioAtendimento: "Segunda a Sexta, 6h às 15h",
            especialidade: "Pilates"
        });


        const plano1 = await Plano.create({
            nome: "Básico",
            frequencia: "2x por semana",
            valor: 39.90
        });

        const plano2 = await Plano.create({
            nome: "Intermediário",
            frequencia: "3x por semana",
            valor: 59.90
        });

        const plano3 = await Plano.create({
            nome: "Premium",
            frequencia: "5x por semana",
            valor: 79.90
        });

        const plano4 = await Plano.create({
            nome: "VIP",
            frequencia: "Ilimitado",
            valor: 99.90
        });


        const cliente1 = await Cliente.create({
            nome: "João da Silva",
            email: "joao.silva@email.com",
            telefone: "(11) 99999-8888",
            dataNascimento: "1990-05-15"
        });

        const cliente2 = await Cliente.create({
            nome: "Maria de Oliveira",
            email: "maria.oliveira@email.com",
            telefone: "(11) 98888-9999",
            dataNascimento: "1985-10-20"
        });

        const cliente3 = await Cliente.create({
            nome: "Pedro dos Santos",
            email: "pedro.santos@email.com",
            telefone: "(11) 97777-6666",
            dataNascimento: "1995-03-25"
        });

        const cliente4 = await Cliente.create({
            nome: "Ana da Costa",
            email: "ana.costa@email.com",
            telefone: "(11) 96666-7777",
            dataNascimento: "1988-12-10"
        });


        const assinatura1 = await Assinatura.create({
            dataExpiracao: "2025-04-10",
            desconto: 0,
            valor: 39.90,
            metodoPagamento: "Cartão de Crédito",
            clienteId: cliente1.id,
            planoId: plano1.id
        });

        const assinatura2 = await Assinatura.create({
            dataExpiracao: "2025-04-15",
            desconto: 5,
            valor: 56.90,
            metodoPagamento: "Débito Automático",
            clienteId: cliente2.id,
            planoId: plano2.id
        });

        const assinatura3 = await Assinatura.create({
            dataExpiracao: "2025-05-01",
            desconto: 10,
            valor: 71.91,
            metodoPagamento: "Boleto Bancário",
            clienteId: cliente3.id,
            planoId: plano3.id
        });

        const assinatura4 = await Assinatura.create({
            dataExpiracao: "2025-05-10",
            desconto: 15,
            valor: 84.91,
            metodoPagamento: "PIX",
            clienteId: cliente4.id,
            planoId: plano4.id
        });


        const checkIn1 = await CheckIn.create({
            entrada: "2025-04-01 08:00:00",
            saida: "2025-04-01 09:30:00",
            acessoAutorizado: true,
            razaoBloqueio: null,
            assinaturaId: assinatura1.id,
            administradorId: admin1.id
        });

        const checkIn2 = await CheckIn.create({
            entrada: "2025-04-01 17:00:00",
            saida: "2025-04-01 18:45:00",
            acessoAutorizado: true,
            razaoBloqueio: null,
            assinaturaId: assinatura2.id,
            administradorId: admin2.id
        });

        const checkIn3 = await CheckIn.create({
            entrada: "2025-04-02 10:00:00",
            saida: "2025-04-02 11:30:00",
            acessoAutorizado: true,
            razaoBloqueio: null,
            assinaturaId: assinatura3.id,
            administradorId: admin3.id
        });

        const checkIn4 = await CheckIn.create({
            entrada: "2025-04-02 19:00:00",
            saida: null,
            acessoAutorizado: false,
            razaoBloqueio: "Assinatura vencida",
            assinaturaId: assinatura4.id,
            administradorId: admin4.id
        });


        const dieta1 = await Dieta.create({
            descricao: "Dieta para ganho de massa",
            dataCriacao: "2025-03-15",
            dataExpiracao: "2025-06-15",
            instrucoes: "Consumir 6 refeições diárias com alto teor proteico",
            clienteId: cliente1.id,
            nutricionistaId: nutri1.id
        });

        const dieta2 = await Dieta.create({
            descricao: "Dieta para emagrecimento",
            dataCriacao: "2025-03-20",
            dataExpiracao: "2025-06-20",
            instrucoes: "Reduzir carboidratos e aumentar consumo de vegetais",
            clienteId: cliente2.id,
            nutricionistaId: nutri2.id
        });

        const dieta3 = await Dieta.create({
            descricao: "Dieta para definição muscular",
            dataCriacao: "2025-03-25",
            dataExpiracao: "2025-06-25",
            instrucoes: "Ciclar carboidratos e manter alto consumo proteico",
            clienteId: cliente3.id,
            nutricionistaId: nutri3.id
        });

        const dieta4 = await Dieta.create({
            descricao: "Dieta para aumento de energia",
            dataCriacao: "2025-03-30",
            dataExpiracao: "2025-06-30",
            instrucoes: "Consumir carboidratos complexos e proteínas magras",
            clienteId: cliente4.id,
            nutricionistaId: nutri4.id
        });


        const estado1 = await Estado.create({
            data: "2025-03-01",
            peso: 75.5,
            altura: 1.78,
            taxaGordura: 18.5,
            circunferenciaCintura: 85.0,
            circunferenciaBraco: 32.0,
            comentarios: "Boa condição física inicial",
            clienteId: cliente1.id,
            nutricionistaId: nutri1.id
        });

        const estado2 = await Estado.create({
            data: "2025-03-05",
            peso: 68.2,
            altura: 1.65,
            taxaGordura: 22.0,
            circunferenciaCintura: 78.0,
            circunferenciaBraco: 28.5,
            comentarios: "Necessita reduzir percentual de gordura",
            clienteId: cliente2.id,
            nutricionistaId: nutri2.id
        });

        const estado3 = await Estado.create({
            data: "2025-03-10",
            peso: 82.0,
            altura: 1.82,
            taxaGordura: 15.0,
            circunferenciaCintura: 88.0,
            circunferenciaBraco: 35.0,
            comentarios: "Boa massa muscular, baixo percentual de gordura",
            clienteId: cliente3.id,
            nutricionistaId: nutri3.id
        });

        const estado4 = await Estado.create({
            data: "2025-03-15",
            peso: 62.5,
            altura: 1.70,
            taxaGordura: 20.0,
            circunferenciaCintura: 75.0,
            circunferenciaBraco: 27.0,
            comentarios: "Necessita ganhar massa muscular",
            clienteId: cliente4.id,
            nutricionistaId: nutri4.id
        });


        const treino1 = await Treino.create({
            nivel: "Iniciante",
            objetivo: "Ganho de massa muscular",
            dataCriacao: "2025-03-15",
            dataExpiracao: "2025-06-15",
            exercicios: JSON.stringify([
                { nome: "Supino reto", series: 3, repeticoes: 12, carga: 40 },
                { nome: "Leg press", series: 3, repeticoes: 15, carga: 100 },
                { nome: "Puxada frontal", series: 3, repeticoes: 12, carga: 50 },
                { nome: "Agachamento", series: 3, repeticoes: 12, carga: 30 }
            ]),
            clienteId: cliente1.id,
            personalTrainerId: personal1.id
        });

        const treino2 = await Treino.create({
            nivel: "Intermediário",
            objetivo: "Emagrecimento",
            dataCriacao: "2025-03-20",
            dataExpiracao: "2025-06-20",
            exercicios: JSON.stringify([
                { nome: "Esteira", series: 1, repeticoes: 1, carga: 0, tempo: "30 minutos" },
                { nome: "Bicicleta", series: 1, repeticoes: 1, carga: 0, tempo: "20 minutos" },
                { nome: "Burpees", series: 4, repeticoes: 15, carga: 0 },
                { nome: "Jumping jacks", series: 4, repeticoes: 30, carga: 0 }
            ]),
            clienteId: cliente2.id,
            personalTrainerId: personal2.id
        });

        const treino3 = await Treino.create({
            nivel: "Avançado",
            objetivo: "Definição muscular",
            dataCriacao: "2025-03-25",
            dataExpiracao: "2025-06-25",
            exercicios: JSON.stringify([
                { nome: "Supino inclinado", series: 4, repeticoes: 10, carga: 60 },
                { nome: "Agachamento livre", series: 4, repeticoes: 12, carga: 80 },
                { nome: "Remada curvada", series: 4, repeticoes: 10, carga: 70 },
                { nome: "Elevação lateral", series: 4, repeticoes: 12, carga: 10 }
            ]),
            clienteId: cliente3.id,
            personalTrainerId: personal3.id
        });

        const treino4 = await Treino.create({
            nivel: "Iniciante",
            objetivo: "Fortalecimento geral",
            dataCriacao: "2025-03-30",
            dataExpiracao: "2025-06-30",
            exercicios: JSON.stringify([
                { nome: "Prancha", series: 3, repeticoes: 1, carga: 0, tempo: "30 segundos" },
                { nome: "Flexões de joelho", series: 3, repeticoes: 10, carga: 0 },
                { nome: "Agachamento livre", series: 3, repeticoes: 15, carga: 0 },
                { nome: "Ponte", series: 3, repeticoes: 15, carga: 0 }
            ]),
            clienteId: cliente4.id,
            personalTrainerId: personal4.id
        });
    })();
}

export default sequelize;

```

# go-fit\backend\src\controllers\AdministradorController.js

```js
//Gabriel Sarte
import { AdministradorService } from "../services/AdministradorService.js";

class AdministradorController {
  
  static async findAll(req, res) {
    AdministradorService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    AdministradorService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    AdministradorService.create(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    AdministradorService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    AdministradorService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { AdministradorController };
```

# go-fit\backend\src\controllers\AssinaturaController.js

```js
//Gabriel Sarte
import { AssinaturaService } from "../services/AssinaturaService.js";

class AssinaturaController {
  
  static async findAll(req, res) {
    AssinaturaService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    AssinaturaService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    AssinaturaService.create(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    AssinaturaService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    AssinaturaService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { AssinaturaController };

```

# go-fit\backend\src\controllers\CheckInController.js

```js
//Arthur
import { CheckInService } from "../services/CheckInService.js";

class CheckInController {
  
  static async findAll(req, res) {
    CheckInService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    CheckInService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    CheckInService.create(req)
      .then(obj => res.status(201).json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    CheckInService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    CheckInService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByCliente(req, res) {
    CheckInService.findByCliente(req)
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findAutorizados(req, res) {
    CheckInService.findAutorizados(req)
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { CheckInController };
```

# go-fit\backend\src\controllers\ClienteController.js

```js
//Gabriel Sarte
import { ClienteService } from "../services/ClienteService.js";

class ClienteController {
  
  static async findAll(req, res) {
    ClienteService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    ClienteService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    ClienteService.create(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    ClienteService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    ClienteService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { ClienteController };

```

# go-fit\backend\src\controllers\DietaController.js

```js
//Arthur 
import { DietaService } from "../services/DietaService.js";

class DietaController {
  
  static async findAll(req, res) {
    DietaService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    DietaService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    DietaService.create(req)
      .then(obj => res.status(201).json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    DietaService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    DietaService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByCliente(req, res) {
    DietaService.findByCliente(req)
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByNutricionista(req, res) {
    DietaService.findByNutricionista(req)
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { DietaController };
```

# go-fit\backend\src\controllers\EstadoController.js

```js
import { EstadoService } from "../services/EstadoService.js";

class EstadoController {
  
  static async findAll(req, res) {
    EstadoService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    EstadoService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    EstadoService.create(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    EstadoService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    EstadoService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { EstadoController };

```

# go-fit\backend\src\controllers\NutricionistaController.js

```js
import { NutricionistaService } from "../services/NutricionistaService.js";

class NutricionistaController {
  
  static async findAll(req, res) {
    NutricionistaService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    NutricionistaService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    NutricionistaService.create(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    NutricionistaService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    NutricionistaService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { NutricionistaController };

```

# go-fit\backend\src\controllers\PersonalTrainerController.js

```js
import { PersonalTrainerService } from "../services/PersonalTrainerService.js";

class PersonalTrainerController {
  
  static async findAll(req, res) {
    PersonalTrainerService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    PersonalTrainerService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    PersonalTrainerService.create(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    PersonalTrainerService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    PersonalTrainerService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { PersonalTrainerController };

```

# go-fit\backend\src\controllers\PlanoController.js

```js
//Gabriel Sarte
import { PlanoService } from "../services/PlanoService.js";

class PlanoController {
  
  static async findAll(req, res) {
    PlanoService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    PlanoService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    PlanoService.create(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    PlanoService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    PlanoService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { PlanoController };

```

# go-fit\backend\src\controllers\TreinoController.js

```js
//Arthur
import { TreinoService } from "../services/TreinoService.js";

class TreinoController {
  
  static async findAll(req, res) {
    TreinoService.findAll()
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPk(req, res) {
    TreinoService.findByPk(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async create(req, res) {
    TreinoService.create(req)
      .then(obj => res.status(201).json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async update(req, res) {
    TreinoService.update(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async delete(req, res) {
    TreinoService.delete(req)
      .then(obj => res.json(obj))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByCliente(req, res) {
    TreinoService.findByCliente(req)
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findByPersonal(req, res) {
    TreinoService.findByPersonal(req)
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }

  static async findAtivos(req, res) {
    TreinoService.findAtivos(req)
      .then(objs => res.json(objs))
      .catch(err => res.status(400).json({ err: err.message }));
  }
}

export { TreinoController };
```

# go-fit\backend\src\models\Administrador.js

```js
//Gabriel Sarte
import { Model, DataTypes } from 'sequelize';

class Administrador extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome do Administrador deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Administrador deve ter entre 2 e 50 caracteres!" },
          is: {
            args: /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/,
            msg: "Nome inválido. Deve ser composto e iniciar com maiúsculas (Ex: Nome Sobrenome)."
          }
        }
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Senha do Administrador deve ser preenchida!" },
          len: { args: [6, 100], msg: "Senha deve ter no mínimo 6 caracteres." },
          is: {
            args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
            msg: "Senha inválida. Deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
          }
        }
      },      
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "unique_email",
          msg: "Este e-mail já está em uso. Escolha outro."
        },
        validate: {
          notEmpty: { msg: "E-mail do Administrador deve ser preenchido!" },
          isEmail: { msg: "E-mail do Administrador deve ser válido!" },
        }
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "unique_telefone",
          msg: "Este telefone já está em uso. Escolha outro."
        },
        validate: {
          notEmpty: { msg: "Telefone do Administrador deve ser preenchido!" },
          len: { args: [10, 15], msg: "Telefone do Administrador deve ter entre 10 e 15 caracteres!" }
        }
      }
    }, { sequelize, modelName: 'administrador', tableName: 'administradores' });
  }
}

export { Administrador };

```

# go-fit\backend\src\models\Assinatura.js

```js
//Gabriel Sarte
import { Model, DataTypes } from 'sequelize';

class Assinatura extends Model {
  static init(sequelize) {
    super.init({
      dataExpiracao: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: { msg: "Data de Expiração deve ser preenchida!" },
          isDate: { msg: "Data de Expiração deve ser uma data válida!" }
        }
      },
      desconto: {
        type: DataTypes.FLOAT,
        validate: {
          min: { args: [0], msg: "Desconto não pode ser negativo!" },
          max: { args: [100], msg: "Desconto não pode ser maior que 100%!" }
        }
      },
      valor: {
        type: DataTypes.FLOAT,
        validate: {
          notEmpty: { msg: "Valor deve ser preenchido!" },
          min: { args: [0], msg: "Valor deve ser maior que zero!" }
        }
      },
      metodoPagamento: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Método de Pagamento deve ser preenchido!" },
          len: { args: [2, 50], msg: "Método de Pagamento deve ter entre 3 e 50 caracteres!" }
        }
      }
    }, { sequelize, modelName: 'assinatura', tableName: 'assinaturas' });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'clienteId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Cliente deve ter um valor válido!' } }
      }
    });

    this.belongsTo(models.plano, {
      as: 'plano',
      foreignKey: {
        name: 'planoId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Plano deve ter um valor válido!' } }
      }
    });
  }

}

export { Assinatura };

```

# go-fit\backend\src\models\CheckIn.js

```js
//Arthur
import { Model, DataTypes } from 'sequelize';

class CheckIn extends Model {
  static init(sequelize) {
    super.init({
      entrada: {
        type: DataTypes.DATE, // Tipo correto para armazenar data e hora
        allowNull: false,
        validate: {
          notNull: { msg: 'Horário de entrada é obrigatório' },
          isValidDateTimeFormat(value) {
            if (!(value instanceof Date) || isNaN(value.getTime())) {
              throw new Error('Valor de data/hora inválido');
            }
          }
        }
      },
      saida: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isAfterEntrada(value) {
            if (value && this.entrada && new Date(value) <= new Date(this.entrada)) {
              throw new Error('Horário de saída deve ser após o horário de entrada');
            }
          }
        }
      },
      acessoAutorizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          isBoolean(value) {
            if (typeof value !== 'boolean') {
              throw new Error('O campo "acessoAutorizado" deve ser verdadeiro ou falso');
            }
          }
        }
      },
      razaoBloqueio: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 100],
            msg: 'Razão do bloqueio não pode ter mais que 100 caracteres'
          }
        }
      }
    }, {
      sequelize,
      modelName: 'checkin',
      tableName: 'checkins',
      timestamps: false
    });
  }

  static associate(models) {
    this.belongsTo(models.assinatura, {
      as: 'assinatura',
      foreignKey: {
        name: 'assinaturaId',
        allowNull: false,
        validate: {
          notNull: { msg: 'O campo assinaturaId deve ser preenchido com um valor válido!' }
        }
      }
    });
  }
}

export { CheckIn };

```

# go-fit\backend\src\models\Cliente.js

```js
//Gabriel Sarte
import { Model, DataTypes } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome do Cliente deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Cliente deve ter entre 2 e 50 caracteres!" },
          is: {
            args: /^[A-ZÀ-Ý][a-zà-ÿ]+(?:\s(?:[a-zà-ÿ]+|[A-ZÀ-Ý][a-zà-ÿ]+))*$/,
            msg: "Nome inválido. Deve ser composto por palavras iniciando com maiúsculas ou preposições em minúsculas."
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "unique_email",
          msg: "Este e-mail já está em uso. Escolha outro."
        },
        validate: {
          notEmpty: { msg: "E-mail do Administrador deve ser preenchido!" },
          isEmail: { msg: "E-mail do Administrador deve ser válido!" },
        }
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "unique_telefone",
          msg: "Este telefone já está em uso. Escolha outro."
        },
        validate: {
          notEmpty: { msg: "Telefone do Administrador deve ser preenchido!" },
          len: { args: [10, 15], msg: "Telefone do Administrador deve ter entre 10 e 15 caracteres!" }
        }
      },
      dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Data de Nascimento deve ser preenchida!" },
          isDate: { msg: "Data de Nascimento deve ser uma data válida!" },
          isOldEnough(value) {
            const birthDate = new Date(value);
            if (isNaN(birthDate.getTime())) {
              throw new Error("Data de Nascimento inválida.");
            }
      
            const today = new Date();
            const minAgeDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
      
            if (birthDate > minAgeDate) { 
              throw new Error("O cliente deve ter pelo menos 16 anos.");
            }
          }
        }
      }
      
    }, { sequelize, modelName: 'cliente', tableName: 'clientes' });
  }
}

export { Cliente };

```

# go-fit\backend\src\models\Dieta.js

```js
import { Model, DataTypes } from 'sequelize';

class Dieta extends Model {
  static init(sequelize) {
    super.init({
      descricao: {
        type: DataTypes.STRING(255),
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
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: { msg: 'Data de criação inválida' }
        }
      },
      dataExpiracao: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: { msg: 'Data de expiração inválida' },
          isAfterDataCriacao(value) {
            if (this.dataCriacao && value <= this.dataCriacao) {
              throw new Error('Data de expiração deve ser após a criação');
            }
          }
        }
      },
      instrucoes: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Instruções não podem ser vazias" }
        }
      },
    }, {
      sequelize,
      modelName: 'dieta',
      tableName: 'dietas',
      paranoid: true,
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'clienteId',
        allowNull: false,
        validate: {
          notNull: { msg: 'Cliente é obrigatório' }
        }
      }
    });

    this.belongsTo(models.nutricionista, {
      as: 'nutricionista',
      foreignKey: {
        name: 'nutricionistaId',
        allowNull: false,
        validate: {
          notNull: { msg: 'Nutricionista é obrigatório' }
        }
      }
    });
  }
}

export { Dieta };

```

# go-fit\backend\src\models\Estado.js

```js
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
  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'clienteId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Cliente deve ter um valor válido!' } }
      }
    });
    this.belongsTo(models.nutricionista, {
      as: 'nutricionista',
      foreignKey: {
        name: 'nutricionistaId',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Nutricionista deve ter um valor válido!' } }
      }
    });
  }
}

export { Estado };

```

# go-fit\backend\src\models\Nutricionista.js

```js
//Matheus Cardoso
import { Model, DataTypes } from 'sequelize';

class Nutricionista extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome não pode ficar vazio." },
          len: {args: [1, 50],  msg: "Nome pode ter no máximo 50 caracteres." },
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Email não pode ficar vazio." },
          len: {args: [1, 50],  msg: "Email pode ter no máximo 50 caracteres." },
        }
      },
      telefone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Telefone não pode ficar vazio." },
          is: {args: /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}/, msg: "Telefone deve seguir o padrão (NN) NNNNN-NNNN" },
        }
      },
      horarioAtendimento: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Horário de atendimento não pode ficar vazio." },
        }
      },
    }, { sequelize, modelName: 'nutricionista', tableName: 'nutricionistas' });
  }
}


export { Nutricionista };

```

# go-fit\backend\src\models\PersonalTrainer.js

```js
//Matheus Cardoso
import { Model, DataTypes } from 'sequelize';

class PersonalTrainer extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome não pode ficar vazio." },
          len: { args: [1, 50], msg: "Nome pode ter no máximo 50 caracteres." },
        }
      },
      certificacao: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Certificação não pode ficar vazio." },
          len: { args: [1, 50], msg: "Certificação pode ter no máximo 50 caracteres." },
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Email não pode ficar vazio." },
          len: { args: [1, 50], msg: "Email pode ter no máximo 50 caracteres." },
        }
      },
      telefone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Telefone não pode ficar vazio." },
          is: { args: /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}/, msg: "Telefone deve seguir o padrão (NN) NNNNN-NNNN" },
        }
      },
      horarioAtendimento: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Horário de atendimento não pode ficar vazio." },
        }
      },
      especialidade: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Especialidade não pode ficar vazio." },
          len: { args: [1, 50], msg: "Especialidade pode ter no máximo 50 caracteres." },
        }
      },
    }, { sequelize, modelName: 'personalTrainer', tableName: 'personais' });


  }
}

export { PersonalTrainer };

```

# go-fit\backend\src\models\Plano.js

```js
//Gabriel Sarte
import { Model, DataTypes } from 'sequelize';

class Plano extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      frequencia: DataTypes.STRING,
      valor: DataTypes.FLOAT
    }, { sequelize, modelName: 'plano', tableName: 'planos' });
  }
}

export { Plano};

```

# go-fit\backend\src\models\Treino.js

```js
//Arthur
import { Model, DataTypes } from 'sequelize';

class Treino extends Model {  
  static init(sequelize) {
    super.init({
      nivel: {
        type: DataTypes.ENUM('Iniciante', 'Intermediário', 'Avançado'), 
        allowNull: false,
        validate: {
          notNull: { msg: 'Nível é obrigatório' }, 
          notEmpty: { msg: 'Nível não pode ser vazio' }, 
          isIn: { 
            args: [['Iniciante', 'Intermediário', 'Avançado']],
            msg: 'Nível deve ser Iniciante, Intermediário ou Avançado'
          }
        }
      },
      objetivo: {
        type: DataTypes.STRING(100), 
        allowNull: false,
        validate: {
          notNull: { msg: 'Objetivo é obrigatório' }, 
          notEmpty: { msg: 'Objetivo não pode ser vazio' }, 
          len: { 
            args: [3, 100],
            msg: 'Objetivo deve ter entre 3 e 100 caracteres'
          }
        }
      },
      dataCriacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
        validate: {
          isDate: { msg: 'Data de criação inválida' } 
        }
      },
      dataExpiracao: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: 'Data de expiração é obrigatória' }, 
          isDate: { msg: 'Data de expiração deve ser válida' }, 
          isAfter: { 
            args: new Date().toISOString(),
            msg: 'Data de expiração deve ser futura'
          },
          isAfterDataCriacao(value) { 
            if (this.dataCriacao && value <= this.dataCriacao) {
              throw new Error('Data de expiração deve ser após a criação');
            }
          }
        }
      },
      exercicios: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Exercícios são obrigatórios' }, 
          notEmpty: { msg: 'Exercícios não podem ser vazios' } 
        }
      }
    }, { 
      sequelize, 
      modelName: 'treino',  
      tableName: 'treinos', 
      timestamps: false,
      hooks: {
        beforeValidate: (treino) => {
          if (!treino.dataCriacao) {
            treino.dataCriacao = new Date();
          }
        }
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'clienteId',
        allowNull: false,
        validate: { 
          notNull: { msg: 'Cliente é obrigatório' } 
        }
      }
    });

    this.belongsTo(models.personalTrainer, {
      as: 'personal',
      foreignKey: {
        name: 'personalTrainerId',
        allowNull: false,
        validate: { 
          notNull: { msg: 'Personal Trainer é obrigatório' } 
        }
      }
    });
  }
}

export { Treino };
```

# go-fit\backend\src\routes.js

```js
import express from "express";

import { AdministradorController } from './controllers/AdministradorController.js';
import { AssinaturaController } from './controllers/AssinaturaController.js';
import { CheckInController } from './controllers/CheckInController.js';
import { ClienteController } from './controllers/ClienteController.js';
import { DietaController } from './controllers/DietaController.js';
import { EstadoController } from './controllers/EstadoController.js';
import { NutricionistaController } from './controllers/NutricionistaController.js';
import { PersonalTrainerController } from './controllers/PersonalTrainerController.js';
import { PlanoController } from './controllers/PlanoController.js';
import { TreinoController } from './controllers/TreinoController.js';

const routes = express.Router();

routes.get('/administradores', AdministradorController.findAll);
routes.get('/administradores/:id', AdministradorController.findByPk);
routes.post('/administradores', AdministradorController.create);
routes.put('/administradores/:id', AdministradorController.update);
routes.delete('/administradores/:id', AdministradorController.delete);

routes.get('/assinaturas', AssinaturaController.findAll);
routes.get('/assinaturas/:id', AssinaturaController.findByPk);
routes.post('/assinaturas', AssinaturaController.create);
routes.put('/assinaturas/:id', AssinaturaController.update);
routes.delete('/assinaturas/:id', AssinaturaController.delete);

routes.get('/checkins', CheckInController.findAll);
routes.get('/checkins/:id', CheckInController.findByPk);
routes.post('/checkins', CheckInController.create);
routes.put('/checkins/:id', CheckInController.update);
routes.delete('/checkins/:id', CheckInController.delete);

routes.get('/clientes', ClienteController.findAll);
routes.get('/clientes/:id', ClienteController.findByPk);
routes.post('/clientes', ClienteController.create);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);

routes.get('/dietas', DietaController.findAll);
routes.get('/dietas/:id', DietaController.findByPk);
routes.post('/dietas', DietaController.create);
routes.put('/dietas/:id', DietaController.update);
routes.delete('/dietas/:id', DietaController.delete);

routes.get('/estados', EstadoController.findAll);
routes.get('/estados/:id', EstadoController.findByPk);
routes.post('/estados', EstadoController.create);
routes.put('/estados/:id', EstadoController.update);
routes.delete('/estados/:id', EstadoController.delete);

routes.get('/nutricionistas', NutricionistaController.findAll);
routes.get('/nutricionistas/:id', NutricionistaController.findByPk);
routes.post('/nutricionistas', NutricionistaController.create);
routes.put('/nutricionistas/:id', NutricionistaController.update);
routes.delete('/nutricionistas/:id', NutricionistaController.delete);

routes.get('/personaltrainers', PersonalTrainerController.findAll);
routes.get('/personaltrainers/:id', PersonalTrainerController.findByPk);
routes.post('/personaltrainers', PersonalTrainerController.create);
routes.put('/personaltrainers/:id', PersonalTrainerController.update);
routes.delete('/personaltrainers/:id', PersonalTrainerController.delete);

routes.get('/planos', PlanoController.findAll);
routes.get('/planos/:id', PlanoController.findByPk);
routes.post('/planos', PlanoController.create);
routes.put('/planos/:id', PlanoController.update);
routes.delete('/planos/:id', PlanoController.delete);

routes.get('/treinos', TreinoController.findAll);
routes.get('/treinos/:id', TreinoController.findByPk);
routes.post('/treinos', TreinoController.create);
routes.put('/treinos/:id', TreinoController.update);
routes.delete('/treinos/:id', TreinoController.delete);

export default routes;

```

# go-fit\backend\src\server.js

```js
import express from "express";
import routes from './routes.js';

// Importando configuração e estabelecimento da conexão com o banco de dados
import sequelize from './config/database-connection.js';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);
```

# go-fit\backend\src\services\AdministradorService.js

```js
//Gabriel Sartep067
import { Administrador } from "../models/Administrador.js";
import { Op } from "sequelize";

class AdministradorService {

  static async findAll() {
    return await Administrador.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Administrador.findByPk(id);
  }

  static async create(req) {
    const { nome, senha, email, telefone } = req.body;


    const existingEmail = await Administrador.findOne({ where: { email } });
    if (existingEmail) {
      throw new Error("Já existe um administrador com este e-mail");
    }

    const existingTelefone = await Administrador.findOne({ where: { telefone } });
    if (existingTelefone) {
      throw new Error("Já existe um administrador com este telefone");
    }

    return await Administrador.create({ nome, senha, email, telefone });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, senha, email, telefone } = req.body;


    let obj = await Administrador.findOne({ where: { id } });
    if (!obj) {
      throw new Error(`Administrador com ID ${id} não encontrado.`);
    }

    const existingEmail = await Administrador.findOne({
      where: {
        id: { [Op.ne]: id },
        email
      }
    });
    if (existingEmail) {
      throw new Error("Já existe um administrador com este e-mail");
    }
    
    const existingTelefone = await Administrador.findOne({
      where: {
        id: { [Op.ne]: id },
        telefone
      }
    });
    if (existingTelefone) {
      throw new Error("Já existe um administrador com este telefone");
    }

    
    Object.assign(obj, {
      nome: nome !== undefined ? nome : obj.nome,
      senha: senha !== undefined ? senha : obj.senha, 
      email: email !== undefined ? email : obj.email,
      telefone: telefone !== undefined ? telefone : obj.telefone
    });

    try {
      return await obj.save();
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        throw new Error(error.errors.map(e => e.message).join(', '));
      }
      throw error; 
    }
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await Administrador.findByPk(id);
    return await obj.destroy();
  }
}

export { AdministradorService };

```

# go-fit\backend\src\services\AssinaturaService.js

```js
//Gabriel Sarte
import { Assinatura } from "../models/Assinatura.js";
import { Op } from "sequelize";

class AssinaturaService {
  
  static async findAll() {
    return await Assinatura.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Assinatura.findByPk(id);
  }

  static async create(req) {
    const { dataAssinatura, dataExpiracao, desconto, metodoPagamento, clienteId, planoId, valor } = req.body;
    let descontoFinal = desconto || 0;
    
    const existingAssinatura = await Assinatura.findOne({ 
      where: { 
        clienteId, 
        dataExpiracao: { [Op.gt]: new Date() } 
      } 
    });
    if (existingAssinatura) {
      throw new Error("Já existe uma assinatura ativa para este cliente");
    }

    const dataLimite = new Date();
    dataLimite.setFullYear(dataLimite.getFullYear() - 1);
    
    const assinaturasRecentes = await Assinatura.findOne({
      where: {
        clienteId,
        dataAssinatura: { [Op.gte]: dataLimite }
      }
    });

    if (assinaturasRecentes) {
      descontoFinal += 10; 
    }

    const valorFinal = valor * (1 - descontoFinal / 100);
    
    return await Assinatura.create({ dataAssinatura, dataExpiracao, desconto: descontoFinal, metodoPagamento, clienteId, planoId, valor: valorFinal });
  }

  static async update(req) {
    const { id } = req.params;
    const { dataAssinatura, dataExpiracao, desconto, metodoPagamento, clienteId, planoId, valor } = req.body;
    let obj = await Assinatura.findOne({ where: { id } });
    
    Object.assign(obj, { dataAssinatura, dataExpiracao, desconto, metodoPagamento, clienteId, planoId, valor });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await Assinatura.findByPk(id);
    return await obj.destroy();
  }
}

export { AssinaturaService };
```

# go-fit\backend\src\services\CheckInService.js

```js
//Arthur
import {CheckIn } from '../models/CheckIn.js';

class CheckInService {
  static async findAll() {
    try {
      const objs = await CheckIn.findAll({
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar checkins: ${err.message}`);
    }
  }

  static async findByPk(req) {
    const { id } = req.params;
    try {
      const obj = await CheckIn.findByPk(id, {
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      if (!obj) {
        throw new Error(`CheckIn com ID ${id} não encontrado.`);
      }
      return obj;
    } catch (err) {
      throw new Error(`Erro ao buscar checkin por ID: ${err.message}`);
    }
  }

  static async create(req) {
    const { entrada, saida, autorizado, razao, clienteId } = req.body;
    
    if (!entrada || !clienteId) {
      throw new Error('Horário de entrada e cliente são obrigatórios.');
    }
    
    try {
      const obj = await CheckIn.create({ 
        entrada,
        saida,
        autorizado: autorizado || false,
        razao,
        clienteId
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar checkin: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { entrada, saida, autorizado, razao, clienteId } = req.body;
    
    try {
      const obj = await CheckIn.findByPk(id);
      if (!obj) {
        throw new Error(`CheckIn com ID ${id} não encontrado.`);
      }
      
      Object.assign(obj, {
        entrada: entrada !== undefined ? entrada : obj.entrada,
        saida: saida !== undefined ? saida : obj.saida,
        autorizado: autorizado !== undefined ? autorizado : obj.autorizado,
        razao: razao !== undefined ? razao : obj.razao,
        clienteId: clienteId !== undefined ? clienteId : obj.clienteId
      });
      
      await obj.save();
      return obj;
    } catch (err) {
      throw new Error(`Erro ao atualizar checkin: ${err.message}`);
    }
  }

  static async delete(req) {
    const { id } = req.params;
    try {
      const obj = await CheckIn.findByPk(id);
      if (!obj) {
        throw new Error(`CheckIn com ID ${id} não encontrado.`);
      }
      await obj.destroy();
      return { message: `CheckIn com ID ${id} deletado com sucesso.` };
    } catch (err) {
      throw new Error(`Erro ao deletar checkin: ${err.message}`);
    }
  }

  static async findByCliente(req) {
    const { clienteId } = req.params;
    try {
      const objs = await CheckIn.findAll({
        where: { clienteId },
        order: [['entrada', 'DESC']]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar checkins por cliente: ${err.message}`);
    }
  }

  static async findAutorizados(req) {
    const { autorizado } = req.query;
    try {
      const objs = await CheckIn.findAll({
        where: { autorizado: autorizado === 'true' },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar checkins por autorização: ${err.message}`);
    }
  }
}

export { CheckInService };
```

# go-fit\backend\src\services\ClienteService.js

```js
//Gabriel Sarte
import { Cliente } from "../models/Cliente.js";
import { Op } from "sequelize";


class ClienteService {

  static async findAll() {
    return await Cliente.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Cliente.findByPk(id);
  }

  static async create(req) {
    const { nome, email, telefone, dataNascimento, dataCadastro } = req.body;

    const emailExistente = await Cliente.findOne({ where: { email } });
    if (emailExistente) {
      throw new Error("Já existe um cliente com este email");
    }

    const telefoneExistente = await Cliente.findOne({ where: { telefone } });
    if (telefoneExistente) {
      throw new Error("Já existe um cliente com este telefone");
    }

    try {
      return await Cliente.create({ nome, email, telefone, dataNascimento, dataCadastro });
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        throw new Error(error.errors.map(e => e.message).join(', '));
      }
      throw error; 
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, email, telefone, dataNascimento, dataCadastro } = req.body;


    let obj = await Cliente.findOne({ where: { id } });

    if (!obj) {
      throw new Error("Cliente não encontrado");
    }

    const emailExistente = await Cliente.findOne({ where: { email, id: { [Op.ne]: id } } });
    if (emailExistente) {
      throw new Error("Já existe um cliente com este email");
    }

    const telefoneExistente = await Cliente.findOne({ where: { telefone, id: { [Op.ne]: id } } });
    if (telefoneExistente) {
      throw new Error("Já existe um cliente com este telefone");
    }

    
    Object.assign(obj, {
        nome: nome !== undefined ? nome : obj.nome,
        email: email !== undefined ? email : obj.email,
        telefone: telefone !== undefined ? telefone : obj.telefone,
        dataNascimento: dataNascimento !== undefined ? dataNascimento : obj.dataNascimento,
        dataCadastro: dataCadastro !== undefined ? dataCadastro : obj.dataCadastro
    });

    try {
      return await obj.save();
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        throw new Error(error.errors.map(e => e.message).join(', '));
      }
      throw error; 
    }
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await Cliente.findByPk(id);
    return await obj.destroy();
  }
}

export { ClienteService };

```

# go-fit\backend\src\services\DietaService.js

```js
//Arthur
import { Dieta } from '../models/Dieta.js';

class DietaService {
  static async findAll() {
    try {
      const objs = await Dieta.findAll({
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'nutricionista', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar dietas: ${err.message}`);
    }
  }

  static async findByPk(req) {
    const { id } = req.params;
    try {
      const obj = await Dieta.findByPk(id, {
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'nutricionista', attributes: ['id', 'nome'] }
        ]
      });
      if (!obj) {
        throw new Error(`Dieta com ID ${id} não encontrada.`);
      }
      return obj;
    } catch (err) {
      throw new Error(`Erro ao buscar dieta por ID: ${err.message}`);
    }
  }

  static async create(req) {
    const { descricao, dataCriacao, dataExpiracao, instrucoes, clienteId, nutricionistaId } = req.body;
    
    if (!descricao || !instrucoes || !dataExpiracao || !clienteId || !nutricionistaId) {
      throw new Error('Descrição, instruções, data de expiração, cliente e nutricionista são obrigatórios.');
    }
    
    try {
      const obj = await Dieta.create({ 
        descricao, 
        dataCriacao: dataCriacao || new Date(),
        dataExpiracao,
        instrucoes,
        clienteId,
        nutricionistaId
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar dieta: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { descricao, dataExpiracao, instrucoes, clienteId, nutricionistaId } = req.body;
    
    try {
      const obj = await Dieta.findByPk(id);
      if (!obj) {
        throw new Error(`Dieta com ID ${id} não encontrada.`);
      }
      
      Object.assign(obj, {
        descricao: descricao !== undefined ? descricao : obj.descricao,
        dataExpiracao: dataExpiracao !== undefined ? dataExpiracao : obj.dataExpiracao,
        instrucoes: instrucoes !== undefined ? instrucoes : obj.instrucoes,
        clienteId: clienteId !== undefined ? clienteId : obj.clienteId,
        nutricionistaId: nutricionistaId !== undefined ? nutricionistaId : obj.nutricionistaId
      });
      
      await obj.save();
      return obj;
    } catch (err) {
      throw new Error(`Erro ao atualizar dieta: ${err.message}`);
    }
  }

  static async delete(req) {
    const { id } = req.params;
    try {
      const obj = await Dieta.findByPk(id);
      if (!obj) {
        throw new Error(`Dieta com ID ${id} não encontrada.`);
      }
      await obj.destroy();
      return { message: `Dieta com ID ${id} deletada com sucesso.` };
    } catch (err) {
      throw new Error(`Erro ao deletar dieta: ${err.message}`);
    }
  }

  static async findByCliente(req) {
    const { clienteId } = req.params;
    try {
      const objs = await Dieta.findAll({
        where: { clienteId },
        include: [
          { association: 'nutricionista', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar dietas por cliente: ${err.message}`);
    }
  }

  static async findByNutricionista(req) {
    const { nutricionistaId } = req.params;
    try {
      const objs = await Dieta.findAll({
        where: { nutricionistaId },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar dietas por nutricionista: ${err.message}`);
    }
  }
}

export { DietaService };
```

# go-fit\backend\src\services\EstadoService.js

```js
//Matheus Cardoso
import { Estado } from "../models/Estado.js";

class EstadoService {

    static async findAll() {
        return await Estado.findAll();
    }

    static async findByPk(req) {
        const { id } = req.params;
        return await Estado.findByPk(id);
    }

    static async create(req) {
        const { peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, cliente, nutricionista } = req.body;

        if (cliente == null) throw 'Cliente invalido!';
        
        // Define o today pra checar se outro estado foi criado hoje, já retirando a hora
        const today = new Date().toISOString().split('T')[0];
        
        // Busca de um registro no dia de hoje
        const existingToday = await Estado.findOne({
            where: {
                data: today,
            },
        });
        
        // Faz a verificação em si
        if (existingToday) {
            throw new Error('Já existe um Estado criado hoje!');
        }
        
        if (nutricionista == null) throw 'Nutricionista invalido!';

        const obj = await Estado.create({ peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, clienteId: cliente.id, nutricionistaId: nutricionista.id });
        return await Estado.findByPk(obj.id, { include: { all: true, nested: true } });   
    }

    static async update(req) {
        const { id } = req.params;
        const { peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, clienteId, nutricionistaId } = req.body;
        let obj = await Estado.findOne({ where: { id } });

        Object.assign(obj, { peso, altura, taxaGordura, circunferenciaCintura, circunferenciaBraco, comentarios, clienteId, nutricionistaId });
        return await obj.save();
    }

    static async delete(req) {
        const { id } = req.params;
        let obj = await Estado.findByPk(id);
        return await obj.destroy();
    }
}

export { EstadoService };
```

# go-fit\backend\src\services\NutricionistaService.js

```js
//Matheus Cardoso
import { Nutricionista } from "../models/Nutricionista.js";
import { Op } from "sequelize";

class NutricionistaService {
  
  static async findAll() {
    return await Nutricionista.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Nutricionista.findByPk(id);
  }

  static async create(req) {
    const { nome, email, telefone, horarioAtendimento } = req.body;
    
    // Verifica se já existe um Nutricionista com o mesmo email
    const existingEmail = await Nutricionista.findOne({ where: { email } });
    if (existingEmail) {
      throw new Error("Já existe um nutricionista com este e-mail");
    }

    // Verifica se já existe um Nutricionista com o mesmo telefone
    const existingTelefone = await Nutricionista.findOne({ where: { telefone } });
    if (existingTelefone) {
      throw new Error("Já existe um nutricionista com este telefone");
    }

    return await Nutricionista.create({ nome, email, telefone, horarioAtendimento });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, email, telefone, horarioAtendimento } = req.body;
    let obj = await Nutricionista.findOne({ where: { id } });
    
    // Verifica se o novo email já existe em outro Nutricionista
    const existingEmail = await Nutricionista.findOne({
      where: {
        id: { [Op.ne]: id },
        email
      }
    });
    if (existingEmail) {
      throw new Error("Já existe um Nutricionista com este e-mail");
    }

    // Verifica se o novo telefone já existe em outro Nutricionista
    const existingTelefone = await Nutricionista.findOne({
      where: {
        id: { [Op.ne]: id },
        telefone
      }
    });
    if (existingTelefone) {
      throw new Error("Já existe um Nutricionista com este telefone");
    }
    
    Object.assign(obj, { nome, email, telefone, horarioAtendimento });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await Nutricionista.findByPk(id);
    return await obj.destroy();
  }
}

export { NutricionistaService };
```

# go-fit\backend\src\services\PersonalTrainerService.js

```js
//Matheus Cardoso
import { PersonalTrainer } from "../models/PersonalTrainer.js";
import { Op } from "sequelize";

class PersonalTrainerService {
  
  static async findAll() {
    return await PersonalTrainer.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await PersonalTrainer.findByPk(id);
  }

  static async create(req) {
    const { nome, certificacao, email, telefone, horarioAtendimento, especialidade } = req.body;
    
    // Verifica se já existe um PersonalTrainer com o mesmo email
    const existingEmail = await PersonalTrainer.findOne({ where: { email } });
    if (existingEmail) {
      throw new Error("Já existe um Personal Trainer com este e-mail");
    }

    // Verifica se já existe um PersonalTrainer com o mesmo telefone
    const existingTelefone = await PersonalTrainer.findOne({ where: { telefone } });
    if (existingTelefone) {
      throw new Error("Já existe um PersonalTrainer com este telefone");
    }

    return await PersonalTrainer.create({ nome, certificacao, email, telefone, horarioAtendimento, especialidade });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, certificacao, email, telefone, horarioAtendimento, especialidade } = req.body;
    let obj = await PersonalTrainer.findOne({ where: { id } });
    
    // Verifica se o novo email já existe em outro Personal Trainer
    const existingEmail = await PersonalTrainer.findOne({
      where: {
        id: { [Op.ne]: id },
        email
      }
    });
    if (existingEmail) {
      throw new Error("Já existe um Personal Trainer com este e-mail");
    }

    // Verifica se o novo telefone já existe em outro Personal Trainer
    const existingTelefone = await PersonalTrainer.findOne({
      where: {
        id: { [Op.ne]: id },
        telefone
      }
    });
    if (existingTelefone) {
      throw new Error("Já existe um Personal Trainer com este telefone");
    }
    
    Object.assign(obj, { nome, certificacao, email, telefone, horarioAtendimento, especialidade });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    let obj = await PersonalTrainer.findByPk(id);
    return await obj.destroy();
  }
}

export { PersonalTrainerService };
```

# go-fit\backend\src\services\PlanoService.js

```js
// Gabriel Sarte
import { Plano } from '../models/Plano.js';

class PlanoService {

  static async findAll() {
    try {
      const objs = await Plano.findAll();
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar planos: ${err.message}`);
    }
  }

  static async findByPk(req) {
    const { id } = req.params;
    try {
      const obj = await Plano.findByPk(id);
      if (!obj) {
        throw new Error(`Plano com ID ${id} não encontrado.`);
      }
      return obj;
    } catch (err) {
      throw new Error(`Erro ao buscar plano por ID: ${err.message}`);
    }
  }

  static async create(req) {
    const { nome, frequencia, valor } = req.body;
    if (!nome || !frequencia || valor == null) {
      throw new Error('Nome, frequência e valor são obrigatórios.');
    }
    try {
      const obj = await Plano.create({ nome, frequencia, valor });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar plano: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, frequencia, valor } = req.body;
    try {
      const obj = await Plano.findByPk(id);
      if (!obj) {
        throw new Error(`Plano com ID ${id} não encontrado.`);
      }
      Object.assign(obj, {
        nome: nome !== undefined ? nome : obj.nome,
        frequencia: frequencia !== undefined ? frequencia : obj.frequencia,
        valor: valor !== undefined ? valor : obj.valor
      });
      await obj.save();
      return obj;
    } catch (err) {
      throw new Error(`Erro ao atualizar plano: ${err.message}`);
    }
  }

  static async delete(req) {
    const { id } = req.params;
    try {
      const obj = await Plano.findByPk(id);
      if (!obj) {
        throw new Error(`Plano com ID ${id} não encontrado.`);
      }
      await obj.destroy();
      return { message: `Plano com ID ${id} deletado com sucesso.` };
    } catch (err) {
      throw new Error(`Erro ao deletar plano: ${err.message}`);
    }
  }

}

export { PlanoService }; 

```

# go-fit\backend\src\services\TreinoService.js

```js
//Arthur
import { Treino } from '../models/Treino.js';
import { Op } from 'sequelize';

class TreinoService {
  static async findAll() {
    try {
      const objs = await Treino.findAll({
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'personal', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar treinos: ${err.message}`);
    }
  }

  static async findByPk(req) {
    const { id } = req.params;
    try {
      const obj = await Treino.findByPk(id, {
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'personal', attributes: ['id', 'nome'] }
        ]
      });
      if (!obj) {
        throw new Error(`Treino com ID ${id} não encontrado.`);
      }
      return obj;
    } catch (err) {
      throw new Error(`Erro ao buscar treino por ID: ${err.message}`);
    }
  }

  static async create(req) {
    const { nivel, objetivo, dataExpiracao, exercicios, clienteId, personalTrainerId } = req.body;
    
    try {
      const obj = await Treino.create({ 
        nivel,
        objetivo,
        dataExpiracao,
        exercicios,
        clienteId,
        personalTrainerId
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar treino: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { nivel, objetivo, dataExpiracao, exercicios, clienteId, personalTrainerId } = req.body;
    
    try {
      const obj = await Treino.findByPk(id);
      if (!obj) {
        throw new Error(`Treino com ID ${id} não encontrado.`);
      }
      
      Object.assign(obj, {
        nivel: nivel !== undefined ? nivel : obj.nivel,
        objetivo: objetivo !== undefined ? objetivo : obj.objetivo,
        dataExpiracao: dataExpiracao !== undefined ? dataExpiracao : obj.dataExpiracao,
        exercicios: exercicios !== undefined ? exercicios : obj.exercicios,
        clienteId: clienteId !== undefined ? clienteId : obj.clienteId,
        personalTrainerId: personalTrainerId !== undefined ? personalTrainerId : obj.personalTrainerId
      });
      
      await obj.save();
      return obj;
    } catch (err) {
      throw new Error(`Erro ao atualizar treino: ${err.message}`);
    }
  }

  static async delete(req) {
    const { id } = req.params;
    try {
      const obj = await Treino.findByPk(id);
      if (!obj) {
        throw new Error(`Treino com ID ${id} não encontrado.`);
      }
      await obj.destroy();
      return { message: `Treino com ID ${id} deletado com sucesso.` };
    } catch (err) {
      throw new Error(`Erro ao deletar treino: ${err.message}`);
    }
  }

  static async findByCliente(req) {
    const { clienteId } = req.params;
    try {
      const objs = await Treino.findAll({
        where: { clienteId },
        include: [
          { association: 'personal', attributes: ['id', 'nome'] }
        ],
        order: [['dataCriacao', 'DESC']]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar treinos por cliente: ${err.message}`);
    }
  }

  static async findByPersonal(req) {
    const { personalTrainerId } = req.params;
    try {
      const objs = await Treino.findAll({
        where: { personalTrainerId },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ],
        order: [['dataCriacao', 'DESC']]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar treinos por personal trainer: ${err.message}`);
    }
  }

  static async findAtivos(req) {
    try {
      const objs = await Treino.findAll({
        where: {
          dataExpiracao: { [Op.gte]: new Date() }
        },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] },
          { association: 'personal', attributes: ['id', 'nome'] }
        ]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar treinos ativos: ${err.message}`);
    }
  }
}

export { TreinoService };
```

# go-fit\collection.json

```json
{
	"info": {
		"_postman_id": "9be234b9-45b3-45f0-a54b-bb1a35db3871",
		"name": "Go-Fit",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "43325999"
	},
	"item": [
		{
			"name": "administrador",
			"item": [
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:3333/administradores"
					},
					"response": []
				},
				{
					"name": "Get One",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/administradores/1"
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nome\": \"Gabriel Sarte\",\r\n    \"senha\": \"Gab@2025\",\r\n    \"email\": \"gabriel.admin@gofit.com\",\r\n    \"telefone\": \"(28) 99900-0000\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/administradores"
					},
					"response": []
				},
				{
					"name": "Create [Error]",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nome\": \"lucas sarte\",\r\n    \"senha\": \"1234\",\r\n    \"email\": \"lucas.com\",\r\n    \"telefone\": \"999999999\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/administradores"
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nome\": \"Gabriel Sarte\",\r\n    \"senha\": \"Gab@2025\",\r\n    \"email\": \"gabriel.admin@gofit.com\",\r\n    \"telefone\": \"(28) 99900-0000\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/administradores/2"
					},
					"response": []
				},
				{
					"name": "Delete",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "localhost:3333/administradores/3"
					},
					"response": []
				}
			]
		},
		{
			"name": "cliente",
			"item": [
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:3333/clientes"
					},
					"response": []
				},
				{
					"name": "Get One",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:3333/clientes/2"
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nome\": \"Camila Gomes\",\r\n    \"email\": \"camila@gmail.com\",\r\n    \"telefone\": \"(28) 99999-9999\",\r\n    \"dataNascimento\": \"2003-05-13\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/clientes"
					},
					"response": []
				},
				{
					"name": "Create [Error]",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nome\": \"bruna\",\r\n    \"email\": \"brunagmail.com\",\r\n    \"telefone\": \"99955443322\",\r\n    \"dataNascimento\": \"14 de março de 2000\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/clientes"
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"nome\": \"Camila Gomes\",\r\n    \"email\": \"camila@gmail.com\",\r\n    \"telefone\": \"(28) 99999-9999\",\r\n    \"dataNascimento\": \"2003-05-13\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/clientes/4"
					},
					"response": []
				},
				{
					"name": "Delete",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "localhost:3333/clientes/1"
					},
					"response": []
				}
			]
		},
		{
			"name": "dieta",
			"item": [
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:3333/dietas"
					},
					"response": []
				},
				{
					"name": "Get One",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/dietas/1"
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"descricao\": \"Dieta para emagrecimento\",\r\n  \"dataCriacao\": \"2025-04-25\",\r\n  \"dataExpiracao\": \"2025-06-25\",\r\n  \"instrucoes\": \"Consumir alimentos ricos em fibras e evitar açúcares.\",\r\n  \"clienteId\": 1,\r\n  \"nutricionistaId\": 2\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/dietas"
					},
					"response": []
				},
				{
					"name": "Create [Error]",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"descricao\": \"\",                  \r\n  \"dataCriacao\": \"data inválida\",   \r\n  \"dataExpiracao\": null,\r\n  \"instrucoes\": \"\",\r\n  \"clienteId\": null,\r\n  \"nutricionistaId\": null\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/dietas"
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"descricao\": \"Dieta para emagrecimento\",\r\n  \"dataCriacao\": \"2025-04-25\",\r\n  \"dataExpiracao\": \"2025-06-25\",\r\n  \"instrucoes\": \"Consumir alimentos ricos em fibras e evitar açúcares.\",\r\n  \"clienteId\": 1,\r\n  \"nutricionistaId\": 2\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/dietas/2"
					},
					"response": []
				},
				{
					"name": "Delete",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "localhost:3333/dietas/3"
					},
					"response": []
				}
			]
		},
		{
			"name": "nutricionista",
			"item": [
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:3333/nutricionistas"
					},
					"response": []
				},
				{
					"name": "Get One",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/nutricionistas/2"
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nome\": \"Matheus Cardoso\",\r\n  \"email\": \"matheus.cardoso@gmail.com\",\r\n  \"telefone\": \"(28) 91234-5678\",\r\n  \"horarioAtendimento\": \"Segunda a sexta, das 08h às 17h\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/nutricionistas"
					},
					"response": []
				},
				{
					"name": "Create [Error]",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nome\": \"\",                               \r\n  \"email\": \"\",                              \r\n  \"telefone\": \"12345\",                      \r\n  \"horarioAtendimento\": \"\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/nutricionistas"
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nome\": \"Matheus Cardoso\",\r\n  \"email\": \"matheus.cardoso@gmail.com\",\r\n  \"telefone\": \"(28) 91234-5678\",\r\n  \"horarioAtendimento\": \"Segunda a sexta, das 08h às 17h\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/nutricionistas/2"
					},
					"response": []
				},
				{
					"name": "Delete",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "localhost:3333/nutricionistas/3"
					},
					"response": []
				}
			]
		},
		{
			"name": "profissionaltrainer",
			"item": [
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:3333/personaltrainers"
					},
					"response": []
				},
				{
					"name": "Get One",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/personaltrainers"
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nome\": \"Matheus Cardoso\",\r\n  \"certificacao\": \"CREF123456\",\r\n  \"email\": \"matheus.personal@gmail.com\",\r\n  \"telefone\": \"(28) 98765-4321\",\r\n  \"horarioAtendimento\": \"Segunda a sexta, das 07h às 18h\",\r\n  \"especialidade\": \"Musculação e condicionamento físico\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/personaltrainers"
					},
					"response": []
				},
				{
					"name": "Create [Error]",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nome\": \"\",\r\n  \"certificacao\": \"\",\r\n  \"email\": \"\",\r\n  \"telefone\": \"99999999\",\r\n  \"horarioAtendimento\": \"\",\r\n  \"especialidade\": \"\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/personaltrainers/2"
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nome\": \"Matheus Cardoso\",\r\n  \"certificacao\": \"CREF123456\",\r\n  \"email\": \"matheus.personal@gmail.com\",\r\n  \"telefone\": \"(28) 98765-4321\",\r\n  \"horarioAtendimento\": \"Segunda a sexta, das 07h às 18h\",\r\n  \"especialidade\": \"Musculação e condicionamento físico\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/personaltrainers/2"
					},
					"response": []
				},
				{
					"name": "Delete",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "localhost:3333/personaltrainers/3"
					},
					"response": []
				}
			]
		},
		{
			"name": "treinos",
			"item": [
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": "localhost:3333/treinos"
					},
					"response": []
				},
				{
					"name": "Get One",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/treinos/3"
					},
					"response": []
				},
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nivel\": \"Intermediário\",\r\n  \"objetivo\": \"Ganhar massa muscular\",\r\n  \"dataCriacao\": \"2025-04-25\",\r\n  \"dataExpiracao\": \"2025-06-01\",\r\n  \"exercicios\": \"Supino, agachamento, levantamento terra\",\r\n  \"clienteId\": 1,\r\n  \"personalId\": 2\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/treinos"
					},
					"response": []
				},
				{
					"name": "Create [Error]",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nivel\": \"Invalido\",\r\n  \"objetivo\": \"\",\r\n  \"dataCriacao\": \"2025-04-25\",\r\n  \"dataExpiracao\": \"2023-01-01\",\r\n  \"exercicios\": \"\",\r\n  \"clienteId\": null,\r\n  \"personalId\": null\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/treinos"
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nivel\": \"Intermediário\",\r\n  \"objetivo\": \"Ganhar massa muscular\",\r\n  \"dataCriacao\": \"2025-04-25\",\r\n  \"dataExpiracao\": \"2025-06-01\",\r\n  \"exercicios\": \"Supino, agachamento, levantamento terra\",\r\n  \"clienteId\": 1,\r\n  \"personalTrainerId\": 2\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "localhost:3333/treinos/2"
					},
					"response": []
				},
				{
					"name": "Delete",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "localhost:3333/treinos/3"
					},
					"response": []
				}
			]
		}
	]
}
```

# go-fit\docs\assets\Class Diagram.jpg

This is a binary file of the type: Image

# go-fit\docs\assets\Cronograma.pod

This is a binary file of the type: Binary

# go-fit\frontend\index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# go-fit\frontend\package.json

```json
{
    "name": "go-fit-frontend",
    "version": "1.0.0",
    "description": "Frontend do sistema GO-FIT",
    "main": "src/main.jsx",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    },
    "author": "Gabriel Sarte",
    "license": "MIT",
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.14.1",
      "axios": "^1.4.0"
    },
    "devDependencies": {
      "vite": "^4.3.9",
      "@vitejs/plugin-react": "^4.0.0"
    }
  }
```

# go-fit\frontend\public\vite.svg

This is a file of the type: SVG Image

# go-fit\frontend\src\main.jsx

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '@pages/App';
import { AuthProvider } from '@contexts/AuthContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
  },
});

window.queryClient = queryClient;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
```

# go-fit\frontend\src\pages\App.jsx

```jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Footer from "@components/Footer";
import Header from "@components/Header";
import HomePage from '@pages/HomePage';
import ProductsPage from '@pages/ProductsPage';
import CreateProductPage from '@pages/CreateProductPage';

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onAddToCart={handleAddToCart} />}
            />
          </Routes>
        </main>
        <Footer />
        
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
```

# go-fit\frontend\src\pages\auth\LoginPage.jsx

```jsx
// src/pages/auth/LoginPage.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '@services/authService';

const LoginPage = () => {
    const nav = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [generalError, setGeneralError] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
        if (generalError) setGeneralError('');
    };

    const validateForm = () => {
        const newErrors = {};
        if (!/.+@.+\..+/.test(form.email)) newErrors.email = 'E-mail inválido';
        if (!form.password) newErrors.password = 'A senha é obrigatória';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setIsLoading(true);
        const { error } = await authService.login(form);
        setIsLoading(false);
        
        if (error) return setGeneralError(error.message);
        nav('/'); // redireciona para a página inicial quando logou
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="card">
                    <div className="card-header text-bg-light">
                        <h2 className="mb-0">Entrar</h2>
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleSubmit} noValidate>
                            {/* E-mail */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email}</div>
                                )}
                            </div>
                            
                            {/* Senha */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Senha
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}
                            </div>
                            
                            {generalError && (
                                <div className="alert alert-danger mb-3">{generalError}</div>
                            )}
                            
                            {/* Ações */}
                            <div className="d-flex">
                                <button
                                    type="submit"
                                    className="btn btn-success me-2"
                                    disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                            ></span>
                                            Entrando...
                                        </>
                                    ) : (
                                        'Entrar'
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => nav('/')}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                        <div className="mt-3">
                            <Link to="/register">Criar conta</Link> |{' '}
                            <Link to="/forgot-password">Esqueci a senha</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
```

# go-fit\frontend\vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

# go-fit\README.md

```md
# Go-Fit
```

