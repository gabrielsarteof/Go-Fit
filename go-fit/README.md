# Go-Fit

A verificação das regras de negócio e do funcionamento das funções de inserção, alteração e remoção do Estado, precisam que hajam:
1º: Um nutricionista válido com o id = 2,
2º: Um cliente válido sem estados recentes com o id = 2,
3º: Um cliente válido com 1 atualização de estado nos últimos 7 dias com o id = 3,
4º: Um cliente válido com 3 atualizações de estado nos últimos 30 dias com o id = 4,
5º: Uma atualização de estado com o id = 1.

Inserção de um estado dentro da margem de 7 dias, para testagem do 3º item:
    {
    "data": "2023-07-7",
    "peso": 80.0,
    "altura": 1.65, 
    "taxaGordura": 1.0,
    "circunferenciaCintura": 180,
    "circunferenciaBraco": 40,
    "comentarios": "Cliente já fez atualização de estado nessa semana.",
    "clienteId": 3,
    "nutricionistaId": 2
    }

Inserção de 3 estados dentro da margem de 30 dias, para testagem do 4º item:
    {
    "data": "2023-07-2",
    "peso": 80.0,
    "altura": 1.65, 
    "taxaGordura": 1.0,
    "circunferenciaCintura": 180,
    "circunferenciaBraco": 40,
    "comentarios": "Cliente já fez 3 atualizações de estado nesse mês.",
    "clienteId": 4,
    "nutricionistaId": 2
    },
    {
    "data": "2023-06-25",
    "peso": 81.0,
    "altura": 1.65, 
    "taxaGordura": 1.1,
    "circunferenciaCintura": 181,
    "circunferenciaBraco": 40,
    "comentarios": "Cliente já fez 3 atualizações de estado nesse mês.",
    "clienteId": 4,
    "nutricionistaId": 2
    },
    {
    "data": "2023-06-18",
    "peso": 80.0,
    "altura": 1.65, 
    "taxaGordura": 1.0,
    "circunferenciaCintura": 180,
    "circunferenciaBraco": 40,
    "comentarios": "Cliente já fez 3 atualizações de estado nesse mês.",
    "clienteId": 4,
    "nutricionistaId": 2
    }