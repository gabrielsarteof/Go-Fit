import Sequelize from 'sequelize';
import { databaseConfig } from "./database-config.js";
import { Administrador } from '../models/Administrador.js';
import { Assinatura } from '../models/Assinatura.js';
import { CheckIn } from '../models/CheckIn.js';
import { Cliente } from '../models/Cliente.js';
import { Dieta } from '../models/Dieta.js';
import { Estado } from '../models/Estado.js';
import { Fidelidade } from '../models/Fidelidade.js'
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
Fidelidade.init(sequelize);
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

    if (Fidelidade.associate) {
        Fidelidade.associate(models);
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
            horario_atendimento: "Segunda a Sexta, 8h às 17h"
        });

        const nutri2 = await Nutricionista.create({
            nome: "Pedro Mendes",
            email: "pedro.nutri@gofit.com",
            telefone: "(28) 97777-8888",
            horario_atendimento: "Segunda a Sexta, 9h às 18h"
        });

        const nutri3 = await Nutricionista.create({
            nome: "Camila Rocha",
            email: "camila.nutri@gofit.com",
            telefone: "(28) 96666-5555",
            horario_atendimento: "Terça a Sábado, 8h às 17h"
        });

        const nutri4 = await Nutricionista.create({
            nome: "Lucas Ferreira",
            email: "lucas.nutri@gofit.com",
            telefone: "(28) 95555-6666",
            horario_atendimento: "Segunda a Sexta, 10h às 19h"
        });


        const personal1 = await PersonalTrainer.create({
            nome: "Rafael Souza",
            certificacao: "CREF 12345-G/SP",
            email: "rafael.personal@gofit.com",
            telefone: "(28) 94444-3333",
            horario_atendimento: "Segunda a Sexta, 6h às 22h",
            especialidade: "Musculação"
        });

        const personal2 = await PersonalTrainer.create({
            nome: "Fernanda Lima",
            certificacao: "CREF 54321-G/SP",
            email: "fernanda.personal@gofit.com",
            telefone: "(28) 93333-4444",
            horario_atendimento: "Segunda a Sábado, 7h às 21h",
            especialidade: "Funcional"
        });

        const personal3 = await PersonalTrainer.create({
            nome: "Gustavo Martins",
            certificacao: "CREF 67890-G/SP",
            email: "gustavo.personal@gofit.com",
            telefone: "(28) 92222-1111",
            horario_atendimento: "Terça a Domingo, 8h às 20h",
            especialidade: "CrossFit"
        });

        const personal4 = await PersonalTrainer.create({
            nome: "Patrícia Campos",
            certificacao: "CREF 09876-G/SP",
            email: "patricia.personal@gofit.com",
            telefone: "(28) 91111-2222",
            horario_atendimento: "Segunda a Sexta, 6h às 15h",
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
            data_nascimento: "1990-05-15"
        });

        const cliente2 = await Cliente.create({
            nome: "Maria de Oliveira",
            email: "maria.oliveira@email.com",
            telefone: "(11) 98888-9999",
            data_nascimento: "1985-10-20"
        });

        const cliente3 = await Cliente.create({
            nome: "Pedro dos Santos",
            email: "pedro.santos@email.com",
            telefone: "(11) 97777-6666",
            data_nascimento: "1995-03-25"
        });

        const cliente4 = await Cliente.create({
            nome: "Ana da Costa",
            email: "ana.costa@email.com",
            telefone: "(11) 96666-7777",
            data_nascimento: "1988-12-10"
        });


        for (let i = 11; i >= 0; i--) {
            const createdAt = new Date();
            createdAt.setMonth(createdAt.getMonth() - (i + 1));

            const expires_at = new Date(createdAt);
            expires_at.setMonth(expires_at.getMonth() + 1);

            await Assinatura.create({
                desconto: 0,
                valor: 39.90,
                metodo_pagamento: "Cartão de Crédito",
                cliente_id: cliente1.id,
                plano_id: plano1.id,
                createdAt: createdAt,
                updatedAt: createdAt,
                expires_at: expires_at
            });
        }


        const assinatura2 = await Assinatura.create({
            desconto: 5,
            valor: 56.90,
            metodo_pagamento: "Débito Automático",
            cliente_id: cliente2.id,
            plano_id: plano2.id
        });

        const assinatura3 = await Assinatura.create({
            desconto: 10,
            valor: 71.91,
            metodo_pagamento: "Boleto Bancário",
            cliente_id: cliente3.id,
            plano_id: plano3.id
        });


        const checkIn1 = await CheckIn.create({
            entrada: "2025-04-01 08:00:00",
            saida: "2025-04-01 09:30:00",
            acesso_autorizado: true,
            razao_bloqueio: null,
            assinatura_id: assinatura2.id,
            administradorId: admin1.id
        });

        const checkIn2 = await CheckIn.create({
            entrada: "2025-04-01 17:00:00",
            saida: "2025-04-01 18:45:00",
            acesso_autorizado: true,
            razao_bloqueio: null,
            assinatura_id: assinatura2.id,
            administradorId: admin2.id
        });

        const checkIn3 = await CheckIn.create({
            entrada: "2025-04-02 10:00:00",
            saida: "2025-04-02 11:30:00",
            acesso_autorizado: true,
            razao_bloqueio: null,
            assinatura_id: assinatura3.id,
            administradorId: admin3.id
        });

        const checkIn4 = await CheckIn.create({
            entrada: "2025-04-02 19:00:00",
            saida: null,
            acesso_autorizado: false,
            razao_bloqueio: "Assinatura vencida",
            assinatura_id: assinatura3.id,
            administradorId: admin4.id
        });


        const dieta1 = await Dieta.create({
            descricao: "Dieta para ganho de massa",
            created_at: "2025-03-15",
            expires_at: "2025-06-15",
            instrucoes: "Consumir 6 refeições diárias com alto teor proteico",
            cliente_id: cliente1.id,
            nutricionista_id: nutri1.id
        });

        const dieta2 = await Dieta.create({
            descricao: "Dieta para emagrecimento",
            created_at: "2025-03-20",
            expires_at: "2025-06-20",
            instrucoes: "Reduzir carboidratos e aumentar consumo de vegetais",
            cliente_id: cliente2.id,
            nutricionista_id: nutri2.id
        });

        const dieta3 = await Dieta.create({
            descricao: "Dieta para definição muscular",
            created_at: "2025-03-25",
            expires_at: "2025-06-25",
            instrucoes: "Ciclar carboidratos e manter alto consumo proteico",
            cliente_id: cliente3.id,
            nutricionista_id: nutri3.id
        });

        const dieta4 = await Dieta.create({
            descricao: "Dieta para aumento de energia",
            created_at: "2025-03-30",
            expires_at: "2025-06-30",
            instrucoes: "Consumir carboidratos complexos e proteínas magras",
            cliente_id: cliente4.id,
            nutricionista_id: nutri4.id
        });

        const estado1 = await Estado.create({
            data: "2025-03-01",
            peso: 75.5,
            altura: 1.78,
            taxa_gordura: 18.5,
            circunferencia_cintura: 85.0,
            circunferencia_braco: 32.0,
            comentarios: "Boa condição física inicial",
            cliente_id: cliente2.id,
            nutricionista_id: nutri2.id
        });

        const estado2 = await Estado.create({
            data: "2023-07-07",
            peso: 68.2,
            altura: 1.65,
            taxa_gordura: 22.0,
            circunferencia_cintura: 78.0,
            circunferencia_braco: 28.5,
            comentarios: "Necessita reduzir percentual de gordura",
            cliente_id: cliente3.id,
            nutricionista_id: nutri2.id
        });

        const estado5 = await Estado.create({
            data: "2023-06-18",
            peso: 80.0,
            altura: 1.65,
            taxa_gordura: 1.0,
            circunferencia_cintura: 180,
            circunferencia_braco: 40,
            comentarios: "Primeira atualização de estado do cliente nesse mês.",
            cliente_id: cliente4.id,
            nutricionista_id: nutri2.id
        });

        const estado4 = await Estado.create({
            data: "2023-06-25",
            peso: 81.0,
            altura: 1.65,
            taxa_gordura: 1.1,
            circunferencia_cintura: 181,
            circunferencia_braco: 40,
            comentarios: "Segunda atualização de estado do cliente nesse mês.",
            cliente_id: cliente4.id,
            nutricionista_id: nutri2.id
        });

        const estado3 = await Estado.create({
            data: "2023-07-02",
            peso: 80.0,
            altura: 1.65,
            taxa_gordura: 1.0,
            circunferencia_cintura: 180,
            circunferencia_braco: 40,
            comentarios: "Terceira atualização de estado do cliente nesse mês.",
            cliente_id: cliente4.id,
            nutricionista_id: nutri2.id
        });

        const estado6 = await Estado.create({
            data: "2025-03-15",
            peso: 68.2,
            altura: 1.65,
            taxa_gordura: 22.0,
            circunferencia_cintura: 78.0,
            circunferencia_braco: 28.5,
            comentarios: "Necessita reduzir percentual de gordura",
            cliente_id: cliente2.id,
            nutricionista_id: nutri2.id
        });

        const treino1 = await Treino.create({
            nivel: "Iniciante",
            objetivo: "Ganho de massa muscular",
            created_at: "2025-03-15",
            expires_at: "2025-06-15",
            exercicios: JSON.stringify([
                { nome: "Supino reto", series: 3, repeticoes: 12, carga: 40 },
                { nome: "Leg press", series: 3, repeticoes: 15, carga: 100 },
                { nome: "Puxada frontal", series: 3, repeticoes: 12, carga: 50 },
                { nome: "Agachamento", series: 3, repeticoes: 12, carga: 30 }
            ]),
            cliente_id: cliente1.id,
            personal_trainer_id: personal1.id
        });

        const treino2 = await Treino.create({
            nivel: "Intermediário",
            objetivo: "Emagrecimento",
            created_at: "2025-03-20",
            expires_at: "2025-06-20",
            exercicios: JSON.stringify([
                { nome: "Esteira", series: 1, repeticoes: 1, carga: 0, tempo: "30 minutos" },
                { nome: "Bicicleta", series: 1, repeticoes: 1, carga: 0, tempo: "20 minutos" },
                { nome: "Burpees", series: 4, repeticoes: 15, carga: 0 },
                { nome: "Jumping jacks", series: 4, repeticoes: 30, carga: 0 }
            ]),
            cliente_id: cliente2.id,
            personal_trainer_id: personal2.id
        });

        const treino3 = await Treino.create({
            nivel: "Avançado",
            objetivo: "Definição muscular",
            created_at: "2025-03-25",
            expires_at: "2025-06-25",
            exercicios: JSON.stringify([
                { nome: "Supino inclinado", series: 4, repeticoes: 10, carga: 60 },
                { nome: "Agachamento livre", series: 4, repeticoes: 12, carga: 80 },
                { nome: "Remada curvada", series: 4, repeticoes: 10, carga: 70 },
                { nome: "Elevação lateral", series: 4, repeticoes: 12, carga: 10 }
            ]),
            cliente_id: cliente3.id,
            personal_trainer_id: personal3.id
        });

        const treino4 = await Treino.create({
            nivel: "Iniciante",
            objetivo: "Fortalecimento geral",
            created_at: "2025-03-30",
            expires_at: "2025-06-30",
            exercicios: JSON.stringify([
                { nome: "Prancha", series: 3, repeticoes: 1, carga: 0, tempo: "30 segundos" },
                { nome: "Flexões de joelho", series: 3, repeticoes: 10, carga: 0 },
                { nome: "Agachamento livre", series: 3, repeticoes: 15, carga: 0 },
                { nome: "Ponte", series: 3, repeticoes: 15, carga: 0 }
            ]),
            cliente_id: cliente4.id,
            personal_trainer_id: personal4.id
        });
    })();
}

export default sequelize;
