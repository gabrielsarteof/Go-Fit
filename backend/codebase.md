# database.sqlite

This is a binary file of the type: Binary

# dump.json

```json
{
  "administradores": [
    {
      "id": 1,
      "nome": "Carlos Silva",
      "senha": "Admin@123",
      "email": "carlos.admin@gofit.com",
      "telefone": "(28) 98765-4321",
      "created_at": "2025-05-30 12:51:00.112 +00:00",
      "updated_at": "2025-05-30 12:51:00.112 +00:00"
    },
    {
      "id": 2,
      "nome": "Ana Oliveira",
      "senha": "Ana#4567",
      "email": "ana.admin@gofit.com",
      "telefone": "(28) 91234-5678",
      "created_at": "2025-05-30 12:51:00.134 +00:00",
      "updated_at": "2025-05-30 12:51:00.134 +00:00"
    },
    {
      "id": 3,
      "nome": "Roberto Santos",
      "senha": "Roberto$789",
      "email": "roberto.admin@gofit.com",
      "telefone": "(28) 99876-5432",
      "created_at": "2025-05-30 12:51:00.147 +00:00",
      "updated_at": "2025-05-30 12:51:00.147 +00:00"
    },
    {
      "id": 4,
      "nome": "Juliana Costa",
      "senha": "Costa!101",
      "email": "juliana.admin@gofit.com",
      "telefone": "(28) 95555-9999",
      "created_at": "2025-05-30 12:51:00.157 +00:00",
      "updated_at": "2025-05-30 12:51:00.157 +00:00"
    }
  ],
  "clientes": [
    {
      "id": 1,
      "nome": "João da Silva",
      "email": "joao.silva@email.com",
      "telefone": "(11) 99999-8888",
      "data_nascimento": "1990-05-15",
      "created_at": "2025-05-30 12:51:00.272 +00:00",
      "updated_at": "2025-05-30 12:51:00.272 +00:00"
    },
    {
      "id": 2,
      "nome": "Maria de Oliveira",
      "email": "maria.oliveira@email.com",
      "telefone": "(11) 98888-9999",
      "data_nascimento": "1985-10-20",
      "created_at": "2025-05-30 12:51:00.281 +00:00",
      "updated_at": "2025-05-30 12:51:00.281 +00:00"
    },
    {
      "id": 3,
      "nome": "Pedro dos Santos",
      "email": "pedro.santos@email.com",
      "telefone": "(11) 97777-6666",
      "data_nascimento": "1995-03-25",
      "created_at": "2025-05-30 12:51:00.291 +00:00",
      "updated_at": "2025-05-30 12:51:00.291 +00:00"
    },
    {
      "id": 4,
      "nome": "Ana da Costa",
      "email": "ana.costa@email.com",
      "telefone": "(11) 96666-7777",
      "data_nascimento": "1988-12-10",
      "created_at": "2025-05-30 12:51:00.299 +00:00",
      "updated_at": "2025-05-30 12:51:00.299 +00:00"
    }
  ],
  "planos": [
    {
      "id": 1,
      "nome": "Básico",
      "frequencia": "2x por semana",
      "valor": 39.9,
      "created_at": "2025-05-30 12:51:00.239 +00:00",
      "updated_at": "2025-05-30 12:51:00.239 +00:00"
    },
    {
      "id": 2,
      "nome": "Intermediário",
      "frequencia": "3x por semana",
      "valor": 59.9,
      "created_at": "2025-05-30 12:51:00.247 +00:00",
      "updated_at": "2025-05-30 12:51:00.247 +00:00"
    },
    {
      "id": 3,
      "nome": "Premium",
      "frequencia": "5x por semana",
      "valor": 79.9,
      "created_at": "2025-05-30 12:51:00.255 +00:00",
      "updated_at": "2025-05-30 12:51:00.255 +00:00"
    },
    {
      "id": 4,
      "nome": "VIP",
      "frequencia": "Ilimitado",
      "valor": 99.9,
      "created_at": "2025-05-30 12:51:00.263 +00:00",
      "updated_at": "2025-05-30 12:51:00.263 +00:00"
    }
  ],
  "assinaturas": [
    {
      "id": 1,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2024-06-30 12:51:00.307 +00:00",
      "created_at": "2024-05-30 12:51:00.307 +00:00",
      "updated_at": "2025-05-30 12:51:00.307 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 2,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2024-07-30 12:51:00.317 +00:00",
      "created_at": "2024-06-30 12:51:00.317 +00:00",
      "updated_at": "2025-05-30 12:51:00.317 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 3,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2024-08-30 12:51:00.325 +00:00",
      "created_at": "2024-07-30 12:51:00.325 +00:00",
      "updated_at": "2025-05-30 12:51:00.325 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 4,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2024-09-30 12:51:00.333 +00:00",
      "created_at": "2024-08-30 12:51:00.333 +00:00",
      "updated_at": "2025-05-30 12:51:00.333 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 5,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2024-10-30 12:51:00.340 +00:00",
      "created_at": "2024-09-30 12:51:00.340 +00:00",
      "updated_at": "2025-05-30 12:51:00.340 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 6,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2024-11-30 12:51:00.348 +00:00",
      "created_at": "2024-10-30 12:51:00.348 +00:00",
      "updated_at": "2025-05-30 12:51:00.348 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 7,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2024-12-30 12:51:00.357 +00:00",
      "created_at": "2024-11-30 12:51:00.357 +00:00",
      "updated_at": "2025-05-30 12:51:00.357 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 8,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2025-01-30 12:51:00.365 +00:00",
      "created_at": "2024-12-30 12:51:00.365 +00:00",
      "updated_at": "2025-05-30 12:51:00.365 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 9,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2025-03-02 12:51:00.373 +00:00",
      "created_at": "2025-01-30 12:51:00.373 +00:00",
      "updated_at": "2025-05-30 12:51:00.373 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 10,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2025-04-02 12:51:00.381 +00:00",
      "created_at": "2025-03-02 12:51:00.381 +00:00",
      "updated_at": "2025-05-30 12:51:00.381 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 11,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2025-04-30 12:51:00.389 +00:00",
      "created_at": "2025-03-30 12:51:00.389 +00:00",
      "updated_at": "2025-05-30 12:51:00.389 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 12,
      "desconto": 0,
      "valor": 39.9,
      "metodo_pagamento": "Cartão de Crédito",
      "expires_at": "2025-05-30 12:51:00.397 +00:00",
      "created_at": "2025-04-30 12:51:00.397 +00:00",
      "updated_at": "2025-05-30 12:51:00.397 +00:00",
      "cliente_id": 1,
      "plano_id": 1
    },
    {
      "id": 13,
      "desconto": 5,
      "valor": 56.9,
      "metodo_pagamento": "Débito Automático",
      "expires_at": "2025-06-30 12:51:00.405 +00:00",
      "created_at": "2025-05-30 12:51:00.405 +00:00",
      "updated_at": "2025-05-30 12:51:00.405 +00:00",
      "cliente_id": 2,
      "plano_id": 2
    },
    {
      "id": 14,
      "desconto": 10,
      "valor": 71.91,
      "metodo_pagamento": "Boleto Bancário",
      "expires_at": "2025-06-30 12:51:00.413 +00:00",
      "created_at": "2025-05-30 12:51:00.413 +00:00",
      "updated_at": "2025-05-30 12:51:00.413 +00:00",
      "cliente_id": 3,
      "plano_id": 3
    }
  ],
  "checkins": [
    {
      "id": 1,
      "entrada": "2025-04-01 11:00:00.000 +00:00",
      "saida": "2025-04-01 12:30:00.000 +00:00",
      "acesso_autorizado": 1,
      "razao_bloqueio": null,
      "assinatura_id": 13
    },
    {
      "id": 2,
      "entrada": "2025-04-01 20:00:00.000 +00:00",
      "saida": "2025-04-01 21:45:00.000 +00:00",
      "acesso_autorizado": 1,
      "razao_bloqueio": null,
      "assinatura_id": 13
    },
    {
      "id": 3,
      "entrada": "2025-04-02 13:00:00.000 +00:00",
      "saida": "2025-04-02 14:30:00.000 +00:00",
      "acesso_autorizado": 1,
      "razao_bloqueio": null,
      "assinatura_id": 14
    },
    {
      "id": 4,
      "entrada": "2025-04-02 22:00:00.000 +00:00",
      "saida": null,
      "acesso_autorizado": 0,
      "razao_bloqueio": "Assinatura vencida",
      "assinatura_id": 14
    }
  ],
  "nutricionistas": [
    {
      "id": 1,
      "nome": "Mariana Alves",
      "email": "mariana.nutri@gofit.com",
      "telefone": "(28) 98888-7777",
      "horario_atendimento": "Segunda a Sexta, 8h às 17h",
      "created_at": "2025-05-30 12:51:00.167 +00:00",
      "updated_at": "2025-05-30 12:51:00.167 +00:00"
    },
    {
      "id": 2,
      "nome": "Pedro Mendes",
      "email": "pedro.nutri@gofit.com",
      "telefone": "(28) 97777-8888",
      "horario_atendimento": "Segunda a Sexta, 9h às 18h",
      "created_at": "2025-05-30 12:51:00.178 +00:00",
      "updated_at": "2025-05-30 12:51:00.178 +00:00"
    },
    {
      "id": 3,
      "nome": "Camila Rocha",
      "email": "camila.nutri@gofit.com",
      "telefone": "(28) 96666-5555",
      "horario_atendimento": "Terça a Sábado, 8h às 17h",
      "created_at": "2025-05-30 12:51:00.187 +00:00",
      "updated_at": "2025-05-30 12:51:00.187 +00:00"
    },
    {
      "id": 4,
      "nome": "Lucas Ferreira",
      "email": "lucas.nutri@gofit.com",
      "telefone": "(28) 95555-6666",
      "horario_atendimento": "Segunda a Sexta, 10h às 19h",
      "created_at": "2025-05-30 12:51:00.195 +00:00",
      "updated_at": "2025-05-30 12:51:00.195 +00:00"
    }
  ],
  "dietas": [
    {
      "id": 1,
      "descricao": "Dieta para ganho de massa",
      "created_at": "2025-05-30 12:51:00.453 +00:00",
      "expires_at": "2025-06-15 00:00:00.000 +00:00",
      "instrucoes": "Consumir 6 refeições diárias com alto teor proteico",
      "updated_at": "2025-05-30 12:51:00.453 +00:00",
      "deleted_at": null,
      "cliente_id": 1,
      "nutricionista_id": 1
    },
    {
      "id": 2,
      "descricao": "Dieta para emagrecimento",
      "created_at": "2025-05-30 12:51:00.461 +00:00",
      "expires_at": "2025-06-20 00:00:00.000 +00:00",
      "instrucoes": "Reduzir carboidratos e aumentar consumo de vegetais",
      "updated_at": "2025-05-30 12:51:00.461 +00:00",
      "deleted_at": null,
      "cliente_id": 2,
      "nutricionista_id": 2
    },
    {
      "id": 3,
      "descricao": "Dieta para definição muscular",
      "created_at": "2025-05-30 12:51:00.469 +00:00",
      "expires_at": "2025-06-25 00:00:00.000 +00:00",
      "instrucoes": "Ciclar carboidratos e manter alto consumo proteico",
      "updated_at": "2025-05-30 12:51:00.469 +00:00",
      "deleted_at": null,
      "cliente_id": 3,
      "nutricionista_id": 3
    },
    {
      "id": 4,
      "descricao": "Dieta para aumento de energia",
      "created_at": "2025-05-30 12:51:00.477 +00:00",
      "expires_at": "2025-06-30 00:00:00.000 +00:00",
      "instrucoes": "Consumir carboidratos complexos e proteínas magras",
      "updated_at": "2025-05-30 12:51:00.477 +00:00",
      "deleted_at": null,
      "cliente_id": 4,
      "nutricionista_id": 4
    }
  ],
  "estados": [
    {
      "id": 1,
      "data": "2025-03-01",
      "peso": 75.5,
      "altura": 1.78,
      "taxa_gordura": 18.5,
      "circunferencia_cintura": 85,
      "circunferencia_braco": 32,
      "comentarios": "Boa condição física inicial",
      "created_at": "2025-05-30 12:51:00.485 +00:00",
      "updated_at": "2025-05-30 12:51:00.485 +00:00",
      "cliente_id": 2,
      "nutricionista_id": 2
    },
    {
      "id": 2,
      "data": "2023-07-07",
      "peso": 68.2,
      "altura": 1.65,
      "taxa_gordura": 22,
      "circunferencia_cintura": 78,
      "circunferencia_braco": 28.5,
      "comentarios": "Necessita reduzir percentual de gordura",
      "created_at": "2025-05-30 12:51:00.493 +00:00",
      "updated_at": "2025-05-30 12:51:00.493 +00:00",
      "cliente_id": 3,
      "nutricionista_id": 2
    },
    {
      "id": 3,
      "data": "2023-06-18",
      "peso": 80,
      "altura": 1.65,
      "taxa_gordura": 1,
      "circunferencia_cintura": 180,
      "circunferencia_braco": 40,
      "comentarios": "Primeira atualização de estado do cliente nesse mês.",
      "created_at": "2025-05-30 12:51:00.501 +00:00",
      "updated_at": "2025-05-30 12:51:00.501 +00:00",
      "cliente_id": 4,
      "nutricionista_id": 2
    },
    {
      "id": 4,
      "data": "2023-06-25",
      "peso": 81,
      "altura": 1.65,
      "taxa_gordura": 1.1,
      "circunferencia_cintura": 181,
      "circunferencia_braco": 40,
      "comentarios": "Segunda atualização de estado do cliente nesse mês.",
      "created_at": "2025-05-30 12:51:00.509 +00:00",
      "updated_at": "2025-05-30 12:51:00.509 +00:00",
      "cliente_id": 4,
      "nutricionista_id": 2
    },
    {
      "id": 5,
      "data": "2023-07-02",
      "peso": 80,
      "altura": 1.65,
      "taxa_gordura": 1,
      "circunferencia_cintura": 180,
      "circunferencia_braco": 40,
      "comentarios": "Terceira atualização de estado do cliente nesse mês.",
      "created_at": "2025-05-30 12:51:00.517 +00:00",
      "updated_at": "2025-05-30 12:51:00.517 +00:00",
      "cliente_id": 4,
      "nutricionista_id": 2
    },
    {
      "id": 6,
      "data": "2025-03-15",
      "peso": 68.2,
      "altura": 1.65,
      "taxa_gordura": 22,
      "circunferencia_cintura": 78,
      "circunferencia_braco": 28.5,
      "comentarios": "Necessita reduzir percentual de gordura",
      "created_at": "2025-05-30 12:51:00.525 +00:00",
      "updated_at": "2025-05-30 12:51:00.525 +00:00",
      "cliente_id": 2,
      "nutricionista_id": 2
    }
  ],
  "fidelidades": [],
  "personais": [
    {
      "id": 1,
      "nome": "Rafael Souza",
      "certificacao": "CREF 12345-G/SP",
      "email": "rafael.personal@gofit.com",
      "telefone": "(28) 94444-3333",
      "horario_atendimento": "Segunda a Sexta, 6h às 22h",
      "especialidade": "Musculação",
      "created_at": "2025-05-30 12:51:00.203 +00:00",
      "updated_at": "2025-05-30 12:51:00.203 +00:00"
    },
    {
      "id": 2,
      "nome": "Fernanda Lima",
      "certificacao": "CREF 54321-G/SP",
      "email": "fernanda.personal@gofit.com",
      "telefone": "(28) 93333-4444",
      "horario_atendimento": "Segunda a Sábado, 7h às 21h",
      "especialidade": "Funcional",
      "created_at": "2025-05-30 12:51:00.211 +00:00",
      "updated_at": "2025-05-30 12:51:00.211 +00:00"
    },
    {
      "id": 3,
      "nome": "Gustavo Martins",
      "certificacao": "CREF 67890-G/SP",
      "email": "gustavo.personal@gofit.com",
      "telefone": "(28) 92222-1111",
      "horario_atendimento": "Terça a Domingo, 8h às 20h",
      "especialidade": "CrossFit",
      "created_at": "2025-05-30 12:51:00.221 +00:00",
      "updated_at": "2025-05-30 12:51:00.221 +00:00"
    },
    {
      "id": 4,
      "nome": "Patrícia Campos",
      "certificacao": "CREF 09876-G/SP",
      "email": "patricia.personal@gofit.com",
      "telefone": "(28) 91111-2222",
      "horario_atendimento": "Segunda a Sexta, 6h às 15h",
      "especialidade": "Pilates",
      "created_at": "2025-05-30 12:51:00.230 +00:00",
      "updated_at": "2025-05-30 12:51:00.230 +00:00"
    }
  ],
  "treinos": [
    {
      "id": 1,
      "nivel": "Iniciante",
      "objetivo": "Ganho de massa muscular",
      "created_at": "2025-03-15 00:00:00.000 +00:00",
      "expires_at": "2025-06-15 00:00:00.000 +00:00",
      "exercicios": "[{\"nome\":\"Supino reto\",\"series\":3,\"repeticoes\":12,\"carga\":40},{\"nome\":\"Leg press\",\"series\":3,\"repeticoes\":15,\"carga\":100},{\"nome\":\"Puxada frontal\",\"series\":3,\"repeticoes\":12,\"carga\":50},{\"nome\":\"Agachamento\",\"series\":3,\"repeticoes\":12,\"carga\":30}]",
      "cliente_id": 1,
      "personal_trainer_id": 1
    },
    {
      "id": 2,
      "nivel": "Intermediário",
      "objetivo": "Emagrecimento",
      "created_at": "2025-03-20 00:00:00.000 +00:00",
      "expires_at": "2025-06-20 00:00:00.000 +00:00",
      "exercicios": "[{\"nome\":\"Esteira\",\"series\":1,\"repeticoes\":1,\"carga\":0,\"tempo\":\"30 minutos\"},{\"nome\":\"Bicicleta\",\"series\":1,\"repeticoes\":1,\"carga\":0,\"tempo\":\"20 minutos\"},{\"nome\":\"Burpees\",\"series\":4,\"repeticoes\":15,\"carga\":0},{\"nome\":\"Jumping jacks\",\"series\":4,\"repeticoes\":30,\"carga\":0}]",
      "cliente_id": 2,
      "personal_trainer_id": 2
    },
    {
      "id": 3,
      "nivel": "Avançado",
      "objetivo": "Definição muscular",
      "created_at": "2025-03-25 00:00:00.000 +00:00",
      "expires_at": "2025-06-25 00:00:00.000 +00:00",
      "exercicios": "[{\"nome\":\"Supino inclinado\",\"series\":4,\"repeticoes\":10,\"carga\":60},{\"nome\":\"Agachamento livre\",\"series\":4,\"repeticoes\":12,\"carga\":80},{\"nome\":\"Remada curvada\",\"series\":4,\"repeticoes\":10,\"carga\":70},{\"nome\":\"Elevação lateral\",\"series\":4,\"repeticoes\":12,\"carga\":10}]",
      "cliente_id": 3,
      "personal_trainer_id": 3
    },
    {
      "id": 4,
      "nivel": "Iniciante",
      "objetivo": "Fortalecimento geral",
      "created_at": "2025-03-30 00:00:00.000 +00:00",
      "expires_at": "2025-06-30 00:00:00.000 +00:00",
      "exercicios": "[{\"nome\":\"Prancha\",\"series\":3,\"repeticoes\":1,\"carga\":0,\"tempo\":\"30 segundos\"},{\"nome\":\"Flexões de joelho\",\"series\":3,\"repeticoes\":10,\"carga\":0},{\"nome\":\"Agachamento livre\",\"series\":3,\"repeticoes\":15,\"carga\":0},{\"nome\":\"Ponte\",\"series\":3,\"repeticoes\":15,\"carga\":0}]",
      "cliente_id": 4,
      "personal_trainer_id": 4
    }
  ]
}
```

# eslint.config.js

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

# export-sqlite-to-json.js

```js
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

```

# package.json

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
    "dotenv": "^16.5.0",
    "express": "^4.18.2",
    "pg": "^8.8.0",
    "sequelize": "^6.28.0",
    "sqlite3": "^5.1.7"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}

```

# src\_middleware\error-handler.js

```js
function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // erro personalizado
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err });
        default:
            if (err.name == "SequelizeValidationError") {
                //return res.status(400).json({ message: err.errors[0].message });  // enviando apenas a primeira mensagem
                return res.status(400).json({ message: err.errors.map(field => field.message).join(" ") });
            } else if (err.name == "SequelizeForeignKeyConstraintError") {
                return res.status(400).json({ message: "Pelo menos um dos conceitos associados a esta inserção ou alteração não existe!" });
            } else if (err.name == "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: "Não podem existir dois registros com a mesma chave!" });
            } else {
                return res.status(500).json({ message: err.message });
            }
    }
}

export default errorHandler;
```

# src\config\database-config.js

```js
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

```

# src\config\database-connection.js

```js
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

// databaseInserts();

// function databaseInserts() {
//     (async () => {

//         await sequelize.sync({ force: true });


//         const admin1 = await Administrador.create({
//             nome: "Carlos Silva",
//             senha: "Admin@123",
//             email: "carlos.admin@gofit.com",
//             telefone: "(28) 98765-4321"
//         });

//         const admin2 = await Administrador.create({
//             nome: "Ana Oliveira",
//             senha: "Ana#4567",
//             email: "ana.admin@gofit.com",
//             telefone: "(28) 91234-5678"
//         });

//         const admin3 = await Administrador.create({
//             nome: "Roberto Santos",
//             senha: "Roberto$789",
//             email: "roberto.admin@gofit.com",
//             telefone: "(28) 99876-5432"
//         });

//         const admin4 = await Administrador.create({
//             nome: "Juliana Costa",
//             senha: "Costa!101",
//             email: "juliana.admin@gofit.com",
//             telefone: "(28) 95555-9999"
//         });


//         const nutri1 = await Nutricionista.create({
//             nome: "Mariana Alves",
//             email: "mariana.nutri@gofit.com",
//             telefone: "(28) 98888-7777",
//             horario_atendimento: "Segunda a Sexta, 8h às 17h"
//         });

//         const nutri2 = await Nutricionista.create({
//             nome: "Pedro Mendes",
//             email: "pedro.nutri@gofit.com",
//             telefone: "(28) 97777-8888",
//             horario_atendimento: "Segunda a Sexta, 9h às 18h"
//         });

//         const nutri3 = await Nutricionista.create({
//             nome: "Camila Rocha",
//             email: "camila.nutri@gofit.com",
//             telefone: "(28) 96666-5555",
//             horario_atendimento: "Terça a Sábado, 8h às 17h"
//         });

//         const nutri4 = await Nutricionista.create({
//             nome: "Lucas Ferreira",
//             email: "lucas.nutri@gofit.com",
//             telefone: "(28) 95555-6666",
//             horario_atendimento: "Segunda a Sexta, 10h às 19h"
//         });


//         const personal1 = await PersonalTrainer.create({
//             nome: "Rafael Souza",
//             certificacao: "CREF 12345-G/SP",
//             email: "rafael.personal@gofit.com",
//             telefone: "(28) 94444-3333",
//             horario_atendimento: "Segunda a Sexta, 6h às 22h",
//             especialidade: "Musculação"
//         });

//         const personal2 = await PersonalTrainer.create({
//             nome: "Fernanda Lima",
//             certificacao: "CREF 54321-G/SP",
//             email: "fernanda.personal@gofit.com",
//             telefone: "(28) 93333-4444",
//             horario_atendimento: "Segunda a Sábado, 7h às 21h",
//             especialidade: "Funcional"
//         });

//         const personal3 = await PersonalTrainer.create({
//             nome: "Gustavo Martins",
//             certificacao: "CREF 67890-G/SP",
//             email: "gustavo.personal@gofit.com",
//             telefone: "(28) 92222-1111",
//             horario_atendimento: "Terça a Domingo, 8h às 20h",
//             especialidade: "CrossFit"
//         });

//         const personal4 = await PersonalTrainer.create({
//             nome: "Patrícia Campos",
//             certificacao: "CREF 09876-G/SP",
//             email: "patricia.personal@gofit.com",
//             telefone: "(28) 91111-2222",
//             horario_atendimento: "Segunda a Sexta, 6h às 15h",
//             especialidade: "Pilates"
//         });


//         const plano1 = await Plano.create({
//             nome: "Básico",
//             frequencia: "2x por semana",
//             valor: 39.90
//         });

//         const plano2 = await Plano.create({
//             nome: "Intermediário",
//             frequencia: "3x por semana",
//             valor: 59.90
//         });

//         const plano3 = await Plano.create({
//             nome: "Premium",
//             frequencia: "5x por semana",
//             valor: 79.90
//         });

//         const plano4 = await Plano.create({
//             nome: "VIP",
//             frequencia: "Ilimitado",
//             valor: 99.90
//         });


//         const cliente1 = await Cliente.create({
//             nome: "João da Silva",
//             email: "joao.silva@email.com",
//             telefone: "(11) 99999-8888",
//             data_nascimento: "1990-05-15"
//         });

//         const cliente2 = await Cliente.create({
//             nome: "Maria de Oliveira",
//             email: "maria.oliveira@email.com",
//             telefone: "(11) 98888-9999",
//             data_nascimento: "1985-10-20"
//         });

//         const cliente3 = await Cliente.create({
//             nome: "Pedro dos Santos",
//             email: "pedro.santos@email.com",
//             telefone: "(11) 97777-6666",
//             data_nascimento: "1995-03-25"
//         });

//         const cliente4 = await Cliente.create({
//             nome: "Ana da Costa",
//             email: "ana.costa@email.com",
//             telefone: "(11) 96666-7777",
//             data_nascimento: "1988-12-10"
//         });


//         for (let i = 11; i >= 0; i--) {
//             const createdAt = new Date();
//             createdAt.setMonth(createdAt.getMonth() - (i + 1));

//             const expires_at = new Date(createdAt);
//             expires_at.setMonth(expires_at.getMonth() + 1);

//             await Assinatura.create({
//                 desconto: 0,
//                 valor: 39.90,
//                 metodo_pagamento: "Cartão de Crédito",
//                 cliente_id: cliente1.id,
//                 plano_id: plano1.id,
//                 createdAt: createdAt,
//                 updatedAt: createdAt,
//                 expires_at: expires_at
//             });
//         }


//         const assinatura2 = await Assinatura.create({
//             desconto: 5,
//             valor: 56.90,
//             metodo_pagamento: "Débito Automático",
//             cliente_id: cliente2.id,
//             plano_id: plano2.id
//         });

//         const assinatura3 = await Assinatura.create({
//             desconto: 10,
//             valor: 71.91,
//             metodo_pagamento: "Boleto Bancário",
//             cliente_id: cliente3.id,
//             plano_id: plano3.id
//         });


//         const checkIn1 = await CheckIn.create({
//             entrada: "2025-04-01 08:00:00",
//             saida: "2025-04-01 09:30:00",
//             acesso_autorizado: true,
//             razao_bloqueio: null,
//             assinatura_id: assinatura2.id,
//             administradorId: admin1.id
//         });

//         const checkIn2 = await CheckIn.create({
//             entrada: "2025-04-01 17:00:00",
//             saida: "2025-04-01 18:45:00",
//             acesso_autorizado: true,
//             razao_bloqueio: null,
//             assinatura_id: assinatura2.id,
//             administradorId: admin2.id
//         });

//         const checkIn3 = await CheckIn.create({
//             entrada: "2025-04-02 10:00:00",
//             saida: "2025-04-02 11:30:00",
//             acesso_autorizado: true,
//             razao_bloqueio: null,
//             assinatura_id: assinatura3.id,
//             administradorId: admin3.id
//         });

//         const checkIn4 = await CheckIn.create({
//             entrada: "2025-04-02 19:00:00",
//             saida: null,
//             acesso_autorizado: false,
//             razao_bloqueio: "Assinatura vencida",
//             assinatura_id: assinatura3.id,
//             administradorId: admin4.id
//         });


//         const dieta1 = await Dieta.create({
//             descricao: "Dieta para ganho de massa",
//             created_at: "2025-03-15",
//             expires_at: "2025-06-15",
//             instrucoes: "Consumir 6 refeições diárias com alto teor proteico",
//             cliente_id: cliente1.id,
//             nutricionista_id: nutri1.id
//         });

//         const dieta2 = await Dieta.create({
//             descricao: "Dieta para emagrecimento",
//             created_at: "2025-03-20",
//             expires_at: "2025-06-20",
//             instrucoes: "Reduzir carboidratos e aumentar consumo de vegetais",
//             cliente_id: cliente2.id,
//             nutricionista_id: nutri2.id
//         });

//         const dieta3 = await Dieta.create({
//             descricao: "Dieta para definição muscular",
//             created_at: "2025-03-25",
//             expires_at: "2025-06-25",
//             instrucoes: "Ciclar carboidratos e manter alto consumo proteico",
//             cliente_id: cliente3.id,
//             nutricionista_id: nutri3.id
//         });

//         const dieta4 = await Dieta.create({
//             descricao: "Dieta para aumento de energia",
//             created_at: "2025-03-30",
//             expires_at: "2025-06-30",
//             instrucoes: "Consumir carboidratos complexos e proteínas magras",
//             cliente_id: cliente4.id,
//             nutricionista_id: nutri4.id
//         });

//         const estado1 = await Estado.create({
//             data: "2025-03-01",
//             peso: 75.5,
//             altura: 1.78,
//             taxa_gordura: 18.5,
//             circunferencia_cintura: 85.0,
//             circunferencia_braco: 32.0,
//             comentarios: "Boa condição física inicial",
//             cliente_id: cliente2.id,
//             nutricionista_id: nutri2.id
//         });

//         const estado2 = await Estado.create({
//             data: "2023-07-07",
//             peso: 68.2,
//             altura: 1.65,
//             taxa_gordura: 22.0,
//             circunferencia_cintura: 78.0,
//             circunferencia_braco: 28.5,
//             comentarios: "Necessita reduzir percentual de gordura",
//             cliente_id: cliente3.id,
//             nutricionista_id: nutri2.id
//         });

//         const estado5 = await Estado.create({
//             data: "2023-06-18",
//             peso: 80.0,
//             altura: 1.65,
//             taxa_gordura: 1.0,
//             circunferencia_cintura: 180,
//             circunferencia_braco: 40,
//             comentarios: "Primeira atualização de estado do cliente nesse mês.",
//             cliente_id: cliente4.id,
//             nutricionista_id: nutri2.id
//         });

//         const estado4 = await Estado.create({
//             data: "2023-06-25",
//             peso: 81.0,
//             altura: 1.65,
//             taxa_gordura: 1.1,
//             circunferencia_cintura: 181,
//             circunferencia_braco: 40,
//             comentarios: "Segunda atualização de estado do cliente nesse mês.",
//             cliente_id: cliente4.id,
//             nutricionista_id: nutri2.id
//         });

//         const estado3 = await Estado.create({
//             data: "2023-07-02",
//             peso: 80.0,
//             altura: 1.65,
//             taxa_gordura: 1.0,
//             circunferencia_cintura: 180,
//             circunferencia_braco: 40,
//             comentarios: "Terceira atualização de estado do cliente nesse mês.",
//             cliente_id: cliente4.id,
//             nutricionista_id: nutri2.id
//         });

//         const estado6 = await Estado.create({
//             data: "2025-03-15",
//             peso: 68.2,
//             altura: 1.65,
//             taxa_gordura: 22.0,
//             circunferencia_cintura: 78.0,
//             circunferencia_braco: 28.5,
//             comentarios: "Necessita reduzir percentual de gordura",
//             cliente_id: cliente2.id,
//             nutricionista_id: nutri2.id
//         });

//         const treino1 = await Treino.create({
//             nivel: "Iniciante",
//             objetivo: "Ganho de massa muscular",
//             created_at: "2025-03-15",
//             expires_at: "2025-06-15",
//             exercicios: JSON.stringify([
//                 { nome: "Supino reto", series: 3, repeticoes: 12, carga: 40 },
//                 { nome: "Leg press", series: 3, repeticoes: 15, carga: 100 },
//                 { nome: "Puxada frontal", series: 3, repeticoes: 12, carga: 50 },
//                 { nome: "Agachamento", series: 3, repeticoes: 12, carga: 30 }
//             ]),
//             cliente_id: cliente1.id,
//             personal_trainer_id: personal1.id
//         });

//         const treino2 = await Treino.create({
//             nivel: "Intermediário",
//             objetivo: "Emagrecimento",
//             created_at: "2025-03-20",
//             expires_at: "2025-06-20",
//             exercicios: JSON.stringify([
//                 { nome: "Esteira", series: 1, repeticoes: 1, carga: 0, tempo: "30 minutos" },
//                 { nome: "Bicicleta", series: 1, repeticoes: 1, carga: 0, tempo: "20 minutos" },
//                 { nome: "Burpees", series: 4, repeticoes: 15, carga: 0 },
//                 { nome: "Jumping jacks", series: 4, repeticoes: 30, carga: 0 }
//             ]),
//             cliente_id: cliente2.id,
//             personal_trainer_id: personal2.id
//         });

//         const treino3 = await Treino.create({
//             nivel: "Avançado",
//             objetivo: "Definição muscular",
//             created_at: "2025-03-25",
//             expires_at: "2025-06-25",
//             exercicios: JSON.stringify([
//                 { nome: "Supino inclinado", series: 4, repeticoes: 10, carga: 60 },
//                 { nome: "Agachamento livre", series: 4, repeticoes: 12, carga: 80 },
//                 { nome: "Remada curvada", series: 4, repeticoes: 10, carga: 70 },
//                 { nome: "Elevação lateral", series: 4, repeticoes: 12, carga: 10 }
//             ]),
//             cliente_id: cliente3.id,
//             personal_trainer_id: personal3.id
//         });

//         const treino4 = await Treino.create({
//             nivel: "Iniciante",
//             objetivo: "Fortalecimento geral",
//             created_at: "2025-03-30",
//             expires_at: "2025-06-30",
//             exercicios: JSON.stringify([
//                 { nome: "Prancha", series: 3, repeticoes: 1, carga: 0, tempo: "30 segundos" },
//                 { nome: "Flexões de joelho", series: 3, repeticoes: 10, carga: 0 },
//                 { nome: "Agachamento livre", series: 3, repeticoes: 15, carga: 0 },
//                 { nome: "Ponte", series: 3, repeticoes: 15, carga: 0 }
//             ]),
//             cliente_id: cliente4.id,
//             personal_trainer_id: personal4.id
//         });
//     })();
// }

export default sequelize;

```

# src\controllers\AdministradorController.js

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

# src\controllers\AssinaturaController.js

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

  static async relatorioAtivas(_req, res) {
    try {
      const data = await AssinaturaService.relatorioAtivas();

      if (!data || data.length === 0) {
        return res.status(200).json({ message: "Nenhuma assinatura ativa encontrada." });
      }

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async relatorioVencimentoProximo(req, res) {
    try {
      const dias = parseInt(req.query.dias ?? '10', 10);
      const data = await AssinaturaService.relatorioVencimentoProximo(dias);

      if (!data || data.length === 0) {
        return res.status(200).json({ message: `Nenhuma assinatura com vencimento nos próximos ${dias} dias.` });
      }

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { AssinaturaController };

```

# src\controllers\CheckInController.js

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

# src\controllers\ClienteController.js

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

# src\controllers\DietaController.js

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

# src\controllers\EstadoController.js

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

  static async evolucaoCliente(_req, res) {
    try {
      const data = await EstadoService.evolucaoCliente();

      if (!data || data.length === 0) {
        return res.status(200).json({ message: `Nenhum registro de estado encontrado.` });
      }

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async estadosMaisRecentes(_req, res) {
    try {
      const data = await EstadoService.estadosMaisRecentes();

      if (!data || data.length === 0) {
        return res.status(200).json({ message: `Erro ao buscar estados recentes.` });
      }

      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}



export { EstadoController };

```

# src\controllers\NutricionistaController.js

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

# src\controllers\PersonalTrainerController.js

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

# src\controllers\PlanoController.js

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

# src\controllers\TreinoController.js

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

# src\models\Administrador.js

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

# src\models\Assinatura.js

```js
//Gabriel Sarte
import { Model, DataTypes } from 'sequelize';

class Assinatura extends Model {
  static init(sequelize) {
    super.init({
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
      metodo_pagamento: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Método de Pagamento deve ser preenchido!" },
          len: { args: [2, 50], msg: "Método de Pagamento deve ter entre 3 e 50 caracteres!" }
        }
      },
      expires_at: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: { msg: "Data de Expiração deve ser preenchida!" },
          isDate: { msg: "Data de Expiração deve ser uma data válida!" }
        }
      },
    },  {
      sequelize,
      modelName: 'assinatura',
      tableName: 'assinaturas',
      hooks: {
        beforeValidate: (assinatura) => {
          if (!assinatura.expires_at) {
            const data = new Date();
            data.setMonth(data.getMonth() + 1);
            assinatura.expires_at = data;
          }
        }
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'cliente_id',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Cliente deve ter um valor válido!' } }
      }
    });

    this.belongsTo(models.plano, {
      as: 'plano',
      foreignKey: {
        name: 'plano_id',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Plano deve ter um valor válido!' } }
      }
    });
  }

}

export { Assinatura };

```

# src\models\CheckIn.js

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
      acesso_autorizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          isBoolean(value) {
            if (typeof value !== 'boolean') {
              throw new Error('O campo "acesso_autorizado" deve ser verdadeiro ou falso');
            }
          }
        }
      },
      razao_bloqueio: {
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
        name: 'assinatura_id',
        allowNull: false,
        validate: {
          notNull: { msg: 'O campo assinatura_id deve ser preenchido com um valor válido!' }
        }
      }
    });
  }
}

export { CheckIn };

```

# src\models\Cliente.js

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
      data_nascimento: {
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

# src\models\Dieta.js

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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: { msg: 'Data de criação inválida' }
        }
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: { msg: 'Data de expiração inválida' },
          isAftercreated_at(value) {
            if (this.created_at && value <= this.created_at) {
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
        name: 'cliente_id',
        allowNull: false,
        validate: {
          notNull: { msg: 'Cliente é obrigatório' }
        }
      }
    });

    this.belongsTo(models.nutricionista, {
      as: 'nutricionista',
      foreignKey: {
        name: 'nutricionista_id',
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

# src\models\Estado.js

```js
import { Model, DataTypes } from 'sequelize';

class Estado extends Model {
  static init(sequelize) {
    super.init({
      data: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data do Estado deve seguir o formato AAAA-MM-DD." }
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
      taxa_gordura: { 
        type: DataTypes.FLOAT, 
        validate: {
          isFloat: { msg: "Taxa de gordura deve ser um valor numérico decimal." }
        }
      },
      circunferencia_cintura: { 
        type: DataTypes.FLOAT, 
        validate: {
          isFloat: { msg: "A circunferência da cintura deve estar em centímetros, em um valor numérico decimal." }
        }
      },
      circunferencia_braco: { 
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
        name: 'cliente_id',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Cliente deve ter um valor válido!' } }
      }
    });
    this.belongsTo(models.nutricionista, {
      as: 'nutricionista',
      foreignKey: {
        name: 'nutricionista_id',
        allowNull: false,
        validate: { notNull: { msg: 'O campo Nutricionista deve ter um valor válido!' } }
      }
    });
  }
}

export { Estado };

```

# src\models\Fidelidade.js

```js
import { Model, DataTypes } from 'sequelize';

class Fidelidade extends Model {
  static init(sequelize) {
    super.init({
      data_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: { args: true, msg: 'Data de início deve ser válida.' }
        }
      },
      data_fim: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: { args: true, msg: 'Data de fim deve ser válida.' },
          isAfterInicio(value) {
            if (this.data_inicio && value <= this.data_inicio) {
              throw new Error('Data de fim deve ser após a data de início.');
            }
          }
        }
      },
      beneficio_aplicado: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: { args: [0], msg: 'Benefício aplicado deve ser um valor positivo.' }
        }
      }
    }, {
      sequelize,
      modelName: 'Fidelidade',
      tableName: 'fidelidades',
      timestamps: true
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'cliente_id',
        allowNull: false
      }
    });
  }
}

export { Fidelidade };

```

# src\models\Nutricionista.js

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
      horario_atendimento: {
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

# src\models\PersonalTrainer.js

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
      horario_atendimento: {
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

# src\models\Plano.js

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

# src\models\Treino.js

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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
        validate: {
          isDate: { msg: 'Data de criação inválida' } 
        }
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: 'Data de expiração é obrigatória' }, 
          isDate: { msg: 'Data de expiração deve ser válida' }, 
          isAfter: { 
            args: new Date().toISOString(),
            msg: 'Data de expiração deve ser futura'
          },
          isAftercreated_at(value) { 
            if (this.created_at && value <= this.created_at) {
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
          if (!treino.created_at) {
            treino.created_at = new Date();
          }
        }
      }
    });
  }

  static associate(models) {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        name: 'cliente_id',
        allowNull: false,
        validate: { 
          notNull: { msg: 'Cliente é obrigatório' } 
        }
      }
    });

    this.belongsTo(models.personalTrainer, {
      as: 'personal',
      foreignKey: {
        name: 'personal_trainer_id',
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

# src\routes.js

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
routes.get('/assinaturas/relatorios/ativas', AssinaturaController.relatorioAtivas);
routes.get('/assinaturas/relatorios/vencimento-proximo', AssinaturaController.relatorioVencimentoProximo);

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
routes.get('/estados/relatorios/progresso/:id', EstadoController.evolucaoCliente);
routes.get('/estados/relatorios/recentes', EstadoController.estadosMaisRecentes);

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

# src\server.js

```js
import express from "express";
import routes from './routes.js';
import errorHandler from '../src/_middleware/error-handler.js';
import sequelize from './config/database-connection.js';

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(routes);
app.use(errorHandler);

(async () => {
  try {
    await sequelize.sync({ force: true }); // Cria ou recria as tabelas no banco
    console.log('Banco sincronizado com sucesso.');

    app.listen(3333, () => {
      console.log('Servidor rodando na porta 3333');
    });
  } catch (error) {
    console.error('Erro ao sincronizar banco:', error);
  }
})();

```

# src\services\AdministradorService.js

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

# src\services\AssinaturaService.js

```js
//Gabriel Sarte
import { Assinatura } from "../models/Assinatura.js";
import { Cliente } from "../models/Cliente.js";
import { Plano } from "../models/Plano.js";
import { Op } from "sequelize";
import { Fidelidade } from "../models/Fidelidade.js";
import { CheckIn } from "../models/CheckIn.js";
import sequelize from '../config/database-connection.js';
import { QueryTypes } from 'sequelize';


class AssinaturaService {

  static async findAll() {
    return await Assinatura.findAll();
  }

  static async findByPk(req) {
    const { id } = req.params;
    return await Assinatura.findByPk(id);
  }


  static async verificarRegrasDeNegocio({ cliente_id }) {
  // Regra 1: não pode haver mais de uma assinatura ativa para um mesmi cliente
  const assinaturaAtiva = await Assinatura.findOne({
    where: {
      cliente_id,
      expires_at: { [Op.gt]: new Date() }
    }
  });
  if (assinaturaAtiva) {
    return {
      valido: false,
      mensagem: "Já existe uma assinatura ativa para este cliente"
    };
  }
  // Regra 2: Conceder 50% de desconto para clientes que tenham 12 meses consecutivos de fidelidade
  const ultimoCiclo = await Fidelidade.findOne({
    where: { cliente_id },
    order: [['data_fim', 'DESC']]
  });
  const now = new Date();
  const inicioWindow = ultimoCiclo
    ? new Date(ultimoCiclo.data_fim)
    : new Date(now.getFullYear(), now.getMonth() - 11, 1);

  // Busca todas as assinaturas do cliente dentro da janela de 12 meses
  const assinaturas = await Assinatura.findAll({
    where: {
      cliente_id,
      createdAt: { [Op.gte]: inicioWindow }
    }
  });

  // Mapeia os meses efetivamente pagos
  const mesesPresentes = new Set(
    assinaturas.map(a => {
      const d = a.createdAt;
      return `${d.getFullYear()}-${d.getMonth()}`;
    })
  );
  // Inclui o mês corrente para somar o 12º mês
  mesesPresentes.add(`${now.getFullYear()}-${now.getMonth()}`);

  // Gera a lista de 12 meses consecutivos esperados 
  const mesesNecessarios = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (11 - i), 1);
    return `${d.getFullYear()}-${d.getMonth()}`;
  });

  // Verifica se todos os meses estão presentes
  const tem12Consecutivos = mesesNecessarios.every(m => mesesPresentes.has(m));

  if (tem12Consecutivos) {
    // concede 50% e informa o período de fidelidade
    return {
      valido: true,
      desconto: 50,
      aplicarCicloFidelidade: true,
      periodoFidelidade: {
        inicio: new Date(now.getFullYear(), now.getMonth() - 11, 1),
        fim:   new Date(now.getFullYear(), now.getMonth(), 1)
      }
    };
  }

  // caso contrário, sem desconto extra
  return {
    valido: true,
    desconto: 0,
    aplicarCicloFidelidade: false,
    periodoFidelidade: null
  };
}



  static async create(req) {
    const { metodo_pagamento, cliente_id, plano_id, valor, desconto = 0 } = req.body;

    const regras = await this.verificarRegrasDeNegocio({ cliente_id });
    if (!regras.valido) {
      throw new Error(regras.mensagem);
    }

    const descontoFinal = desconto + (regras.desconto || 0);
    const valorFinal = valor * (1 - descontoFinal / 100);

    const novaAssinatura = await Assinatura.create({
      desconto: descontoFinal,
      metodo_pagamento,
      cliente_id,
      plano_id,
      valor: valorFinal
    });
    console.log(regras.aplicarCicloFidelidade, regras.periodoFidelidade)
    if (regras.aplicarCicloFidelidade && regras.periodoFidelidade) {
      await Fidelidade.create({
        cliente_id,
        data_inicio: regras.periodoFidelidade.inicio,
        data_fim: regras.periodoFidelidade.fim,
        beneficio_aplicado: regras.desconto
      });
    }

    return novaAssinatura;
  }

  static async update(req) {
    const { id } = req.params;
    const { createdAt, expires_at, desconto, metodo_pagamento, cliente_id, plano_id, valor } = req.body;

    const assinatura = await Assinatura.findOne({ where: { id } });
    if (!assinatura) throw new Error('Assinatura não encontrada!');

    const clienteExiste = await Cliente.findByPk(cliente_id);
    if (!clienteExiste) throw new Error("Cliente referenciado não encontrado!");

    const planoExiste = await Plano.findByPk(plano_id);
    if (!planoExiste) throw new Error("Plano referenciado não encontrado!");

    Object.assign(assinatura, {
      createdAt,
      expires_at,
      desconto,
      metodo_pagamento,
      cliente_id,
      plano_id,
      valor
    });

    return await assinatura.save();
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Assinatura.findByPk(id);
    if (!obj) throw new Error("Assinatura não encontrada.");
    if (obj.expires_at < new Date()) throw new Error("Não foi possivel deletar essa assinatura, pois ela esta expirada");
    await CheckIn.destroy({ where: { assinatura_id: id } });
    return await obj.destroy();
  }

  /* RF-38 | Assinaturas ativas (vencimento no futuro) */
  static async relatorioAtivas() {
    const hoje = new Date();

    const sql = `
      SELECT  c.nome       AS cliente,
              p.nome       AS plano,
              p.frequencia AS assinatura,
              a.expires_at  AS vencimento
      FROM    assinaturas a
        JOIN  clientes    c ON c.id = a.cliente_id
        JOIN  planos      p ON p.id = a.plano_id
      WHERE   a.expires_at >= :hoje
      ORDER BY a.expires_at;
    `;

    return sequelize.query(sql, {
      replacements : { hoje },
      type         : QueryTypes.SELECT,
    });
  }

  /* RF-39 | Assinaturas a vencer nos próximos 10 dias */
  static async relatorioVencimentoProximo(dias = 10) {
    if (isNaN(dias) || dias <= 0) {
      throw new Error('Parâmetro "dias" deve ser inteiro positivo.');
    }

    const hoje   = new Date();
    const limite = new Date();
    limite.setDate(limite.getDate() + dias);

    const sql = `
      SELECT  c.nome       AS cliente,
              p.nome       AS plano,
              p.frequencia AS assinatura,
              a.expires_at  AS vencimento
      FROM    assinaturas a
        JOIN  clientes    c ON c.id = a.cliente_id
        JOIN  planos      p ON p.id = a.plano_id
      WHERE   a.expires_at BETWEEN :hoje AND :limite
      ORDER BY a.expires_at;
    `;

    return sequelize.query(sql, {
      replacements : { hoje, limite },
      type         : QueryTypes.SELECT,
    });
  }
}

export { AssinaturaService };

```

# src\services\CheckInService.js

```js
//Arthur
import { CheckIn } from '../models/CheckIn.js';
import { Cliente } from '../models/Cliente.js';
import sequelize from '../config/database-connection.js';
import { QueryTypes } from 'sequelize';

class CheckInService {
  static async findAll() {
    const objs = await CheckIn.findAll({
      include: { all: true, nested: true },
    });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await CheckIn.findByPk(id, {
      include: { all: true, nested: true },
    });
    return obj;
  }

  static async create(req) {
    const { entrada, saida, acesso_autorizado, razao_bloqueio, cliente_id } = req.body;

    if (!entrada || !cliente_id) {
      throw 'Horário de entrada e cliente_id são obrigatórios.';
    }

    if (await this.verificarRegrasDeNegocio(req)) {
      const t = await sequelize.transaction();
      try {
        const obj = await CheckIn.create(
          {
            entrada,
            saida: saida || null,
            acesso_autorizado: acesso_autorizado !== undefined ? acesso_autorizado : true,
            razao_bloqueio: razao_bloqueio || null,
            cliente_id,
          },
          { transaction: t }
        );

        await t.commit();
        return await CheckIn.findByPk(obj.id, { include: { all: true, nested: true } });
      } catch (error) {
        await t.rollback();
        throw "Erro ao criar checkin!";
      }
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { entrada, saida, acesso_autorizado, razao_bloqueio, cliente_id } = req.body;

    const obj = await CheckIn.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'CheckIn não encontrado!';

    const t = await sequelize.transaction();
    try {
      Object.assign(obj, {
        entrada: entrada || obj.entrada,
        saida: saida !== undefined ? saida : obj.saida,
        acesso_autorizado: acesso_autorizado !== undefined ? acesso_autorizado : obj.acesso_autorizado,
        razao_bloqueio: razao_bloqueio !== undefined ? razao_bloqueio : obj.razao_bloqueio,
        cliente_id: cliente_id || obj.cliente_id,
      });

      await obj.save({ transaction: t });
      await t.commit();
      return await CheckIn.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Erro ao atualizar checkin!";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await CheckIn.findByPk(id);
    if (obj == null) throw 'CheckIn não encontrado!';
    
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover este checkin!";
    }
  }

  // RN1: Cliente não pode fazer mais de um check-in por dia
  // RN2: Limite de 7 diárias semanais
  static async verificarRegrasDeNegocio(req) {
    const { entrada, cliente_id } = req.body;

    const dataEntrada = new Date(entrada);
    const umaSemanaAtras = new Date(dataEntrada);
    umaSemanaAtras.setDate(dataEntrada.getDate() - 7);

    // Regra de Negócio 1: Verificação de check-in diário
    const checkInsDiarios = await sequelize.query(
      `SELECT entrada
       FROM CheckIns
       WHERE cliente_id = :cliente_id
       AND DATE(entrada) = DATE(:dataEntrada)`,
      {
        replacements: { cliente_id, dataEntrada },
        type: QueryTypes.SELECT,
      }
    );

    if (checkInsDiarios.length > 0) {
      throw "Cliente já fez check-in hoje!";
    }

    // Regra de Negócio 2: Limite de diárias semanais (7 diárias por semana)
    const [countSemanal] = await sequelize.query(
      `SELECT COUNT(*) as total
       FROM CheckIns
       WHERE cliente_id = :cliente_id
       AND entrada >= :umaSemanaAtras
       AND entrada <= :dataEntrada`,
      {
        replacements: { cliente_id, umaSemanaAtras, dataEntrada },
        type: QueryTypes.SELECT,
      }
    );

    if (countSemanal.total >= 7) {
      throw "Limite de 7 diárias semanais atingido!";
    }

    return true;
  }

  static async findByCliente(req) {
    const { cliente_id } = req.params;
    const objs = await CheckIn.findAll({
      where: { cliente_id },
      order: [['entrada', 'DESC']],
      include: { all: true, nested: true },
    });
    return objs;
  }

  static async findAutorizados(req) {
    const { autorizado } = req.query;
    const objs = await CheckIn.findAll({
      where: { acesso_autorizado: autorizado === 'true' },
      include: { all: true, nested: true },
    });
    return objs;
  }

  static async getClientesNaAcademia() {
    const objs = await CheckIn.findAll({
      where: { saida: null },
      include: { all: true, nested: true },
    });
    return objs;
  }
}

export { CheckInService };
```

# src\services\ClienteService.js

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
    const { nome, email, telefone, data_nascimento, dataCadastro } = req.body;

    const emailExistente = await Cliente.findOne({ where: { email } });
    if (emailExistente) {
      throw new Error("Já existe um cliente com este email");
    }

    const telefoneExistente = await Cliente.findOne({ where: { telefone } });
    if (telefoneExistente) {
      throw new Error("Já existe um cliente com este telefone");
    }

    try {
      return await Cliente.create({ nome, email, telefone, data_nascimento, dataCadastro });
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        throw new Error(error.errors.map(e => e.message).join(', '));
      }
      throw error; 
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, email, telefone, data_nascimento, dataCadastro } = req.body;


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
        data_nascimento: data_nascimento !== undefined ? data_nascimento : obj.data_nascimento,
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

# src\services\DietaService.js

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
    const { descricao, created_at, expires_at, instrucoes, cliente_id, nutricionista_id } = req.body;
    
    if (!descricao || !instrucoes || !expires_at || !cliente_id || !nutricionista_id) {
      throw new Error('Descrição, instruções, data de expiração, cliente e nutricionista são obrigatórios.');
    }
    
    try {
      const obj = await Dieta.create({ 
        descricao, 
        created_at: created_at || new Date(),
        expires_at,
        instrucoes,
        cliente_id,
        nutricionista_id
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar dieta: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { descricao, expires_at, instrucoes, cliente_id, nutricionista_id } = req.body;
    
    try {
      const obj = await Dieta.findByPk(id);
      if (!obj) {
        throw new Error(`Dieta com ID ${id} não encontrada.`);
      }
      
      Object.assign(obj, {
        descricao: descricao !== undefined ? descricao : obj.descricao,
        expires_at: expires_at !== undefined ? expires_at : obj.expires_at,
        instrucoes: instrucoes !== undefined ? instrucoes : obj.instrucoes,
        cliente_id: cliente_id !== undefined ? cliente_id : obj.cliente_id,
        nutricionista_id: nutricionista_id !== undefined ? nutricionista_id : obj.nutricionista_id
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
    const { cliente_id } = req.params;
    try {
      const objs = await Dieta.findAll({
        where: { cliente_id },
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
    const { nutricionista_id } = req.params;
    try {
      const objs = await Dieta.findAll({
        where: { nutricionista_id },
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

# src\services\EstadoService.js

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
        const { data, peso, altura, taxa_gordura, circunferencia_cintura, circunferencia_braco, comentarios, cliente, nutricionista } = req.body;

        if (cliente == null) throw 'Cliente invalido!';

        if (nutricionista == null) throw 'Nutricionista invalido!';

        if (await this.verificarRegrasDeNegocio(req)) {
            const obj = await Estado.create({ data, peso, altura, taxa_gordura, circunferencia_cintura, circunferencia_braco, comentarios, cliente_id: cliente.id, nutricionista_id: nutricionista.id });
            return await Estado.findByPk(obj.id, { include: { all: true, nested: true } });
        }
    }

    static async update(req) {
        const { id } = req.params;
        const { data, peso, altura, taxa_gordura, circunferencia_cintura, circunferencia_braco, comentarios, cliente_id, nutricionista_id } = req.body;
        let obj = await Estado.findOne({ where: { id } });

        Object.assign(obj, { data, peso, altura, taxa_gordura, circunferencia_cintura, circunferencia_braco, comentarios, cliente_id, nutricionista_id });
        return await obj.save();
    }

    static async delete(req) {
        const { id } = req.params;
        let obj = await Estado.findByPk(id);
        return await obj.destroy();
    }

    //Implementando as Regras de Negócio da Atualização de Estado
    //RN 1: Não pode ter sido criada uma atualização de estado na mesma semana.
    //RN 2: Limite de 3 atualizações de estado a cada 30 dias
    static async verificarRegrasDeNegocio(req) {
        const { cliente } = req.body;

        const hoje = new Date(req.body.data);

        // RN1: Verificar se já existe uma atualização na mesma semana
        const ultimaSemana = new Date(hoje);
        ultimaSemana.setDate(hoje.getDate() - 7);

        const atualizacaoSemana = await Estado.findOne({
            where: {
                cliente,
                data: {
                    [Op.between]: [ultimaSemana, hoje],
                },
            },
        });

        if (atualizacaoSemana) {
            throw new Error('Já existe uma atualização de estado nesta semana.');
        }

        // RN2: Verificar se existem mais de 3 atualizações nos últimos 30 dias
        const trintaDiasAtras = new Date(hoje);
        trintaDiasAtras.setDate(hoje.getDate() - 30);

        const atualizacoesUltimos30Dias = await Estado.count({
            where: {
                cliente,
                data: {
                    [Op.between]: [trintaDiasAtras, hoje],
                },
            },
        });

        if (atualizacoesUltimos30Dias >= 3) {
            throw new Error('Limite de 3 atualizações de estado nos últimos 30 dias atingido.');
        }
    }

    static async evolucaoCliente(req) {
        const { cliente_id } = req.params;
        const objs = await sequelize.query("SELECT * FROM estado WHERE cliente_id = :cliente_id ORDER BY data ASC", { replacements: { cliente_id: cliente_id }, type: QueryTypes.SELECT });
        return objs;
    }

    static async estadosMaisRecentes(req) {
        const objs = await sequelize.query("SELECT DISTINCT ON (cliente_id) * FROM estado ORDER BY cliente_id, data DESC", { type: QueryTypes.SELECT });
        return objs;
    }

}

export { EstadoService };
```

# src\services\NutricionistaService.js

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
    const { nome, email, telefone, horario_atendimento } = req.body;
    
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

    return await Nutricionista.create({ nome, email, telefone, horario_atendimento });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, email, telefone, horario_atendimento } = req.body;
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
    
    Object.assign(obj, { nome, email, telefone, horario_atendimento });
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

# src\services\PersonalTrainerService.js

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
    const { nome, certificacao, email, telefone, horario_atendimento, especialidade } = req.body;
    
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

    return await PersonalTrainer.create({ nome, certificacao, email, telefone, horario_atendimento, especialidade });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, certificacao, email, telefone, horario_atendimento, especialidade } = req.body;
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
    
    Object.assign(obj, { nome, certificacao, email, telefone, horario_atendimento, especialidade });
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

# src\services\PlanoService.js

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

# src\services\TreinoService.js

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
    const { nivel, objetivo, expires_at, exercicios, cliente_id, personal_trainer_id } = req.body;
    
    try {
      const obj = await Treino.create({ 
        nivel,
        objetivo,
        expires_at,
        exercicios,
        cliente_id,
        personal_trainer_id
      });
      return obj;
    } catch (err) {
      throw new Error(`Erro ao criar treino: ${err.message}`);
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { nivel, objetivo, expires_at, exercicios, cliente_id, personal_trainer_id } = req.body;
    
    try {
      const obj = await Treino.findByPk(id);
      if (!obj) {
        throw new Error(`Treino com ID ${id} não encontrado.`);
      }
      
      Object.assign(obj, {
        nivel: nivel !== undefined ? nivel : obj.nivel,
        objetivo: objetivo !== undefined ? objetivo : obj.objetivo,
        expires_at: expires_at !== undefined ? expires_at : obj.expires_at,
        exercicios: exercicios !== undefined ? exercicios : obj.exercicios,
        cliente_id: cliente_id !== undefined ? cliente_id : obj.cliente_id,
        personal_trainer_id: personal_trainer_id !== undefined ? personal_trainer_id : obj.personal_trainer_id
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
    const { cliente_id } = req.params;
    try {
      const objs = await Treino.findAll({
        where: { cliente_id },
        include: [
          { association: 'personal', attributes: ['id', 'nome'] }
        ],
        order: [['created_at', 'DESC']]
      });
      return objs;
    } catch (err) {
      throw new Error(`Erro ao buscar treinos por cliente: ${err.message}`);
    }
  }

  static async findByPersonal(req) {
    const { personal_trainer_id } = req.params;
    try {
      const objs = await Treino.findAll({
        where: { personal_trainer_id },
        include: [
          { association: 'cliente', attributes: ['id', 'nome'] }
        ],
        order: [['created_at', 'DESC']]
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
          expires_at: { [Op.gte]: new Date() }
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

# test-connection.js

```js
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config(); 

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('ERRO: variável DATABASE_URL não está definida!');
  process.exit(1);
}

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

async function test() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco bem sucedida!');
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
}

test();

```

