# Projeto Champions League

API REST para gerenciar jogadores e clubes da Champions League. Desenvolvida com Node.js, Express e TypeScript.

## Sobre

A aplicação oferece endpoints para consultar, criar, atualizar e deletar informações sobre jogadores da Champions League. Os dados incluem estatísticas detalhadas como pace, shooting, dribbling e defesa dos atletas.

## Tecnologias

- **Node.js** com TypeScript
- **Express.js** para o servidor
- **CORS** para controle de origem
- **TSUp** para build e distribuição

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Como rodar

**Desenvolvimento** (com hot reload):
```bash
npm run dev
```

**Watchmode** (observa mudanças):
```bash
npm run watch
```

**Build e produção**:
```bash
npm run dist
npm run start:dist
```

Crie o arquivo `.env` e defina a porta que o servidor deve iniciar.
```
PORT=3000
```
O servidor inicia em `http://localhost:3000` por padrão.

## Estrutura do projeto

```
src/
├── controllers/      # Lógica de requisição e resposta
├── data/             # Lista dos 36 clubes da fase de grupos e dos 20 jogadores
├── models/           # Tipagem de dados
├── repositories/     # Acesso aos dados
├── routes/           # Definição de rotas
├── services/         # Regras de negócio
├── utils/            # Utilitários (helpers HTTP)
├── app.ts            # Configuração da aplicação
└── server.ts         # Inicialização do servidor


```

## Arquitetura

O projeto segue a arquitetura em camadas:

- **Controller**: Recebe requisições, valida parâmetros, chama serviços
- **Service**: Contém a lógica de negócio e orquestra repositórios
- **Repository**: Acessa e manipula os dados (atualmente em memória)
- **Model**: Define tipos TypeScript para entidades

## Endpoints

### Players

**Listar todos os jogadores**
```
GET /api/players
```

**Buscar jogador por ID**
```
GET /api/players/:id
```

**Criar novo jogador**
```
POST /api/players
Content-Type: application/json

{
  "id": 1,
  "name": "Jogador",
  "club": "Time",
  "nationality": "País",
  "position": "Posição",
  "statistics": {
    "Overall": 90,
    "Pace": 85,
    "Shooting": 88,
    "Passing": 82,
    "Dribbling": 90,
    "Defending": 40,
    "Physical": 78
  }
}
```

**Atualizar estatísticas de um jogador**
```
PATCH /api/players/:id
Content-Type: application/json

{
  "Overall": 91,
  "Pace": 86,
  "Shooting": 89
}
```

**Deletar jogador**
```
DELETE /api/players/:id
```

### Clubs

**Listar todos os clubes**
```
GET /api/clubs
```

**Buscar clubes por id**
```
GET /api/clubs/:id
```

**Criar novo clube
```
POST /api/clubs
Content-Type: application/json

{
  "id":"37",
  "name":"Time Futebol Club"
}
```

**Atualizar o nome de um time**
```
PATCH /api/clubs/:id
Content-Type: application/json

{
  "name": "Time Alterado"
}
```

**Deletar time**
```
DELETE /api/clubs/:id
```

## Resposta padrão

Todas as respostas seguem o padrão:

```json
{
  "statusCode": 200,
  "body": {
    "message": "Sucesso",
    "data": {}
  }
}
```

## Status HTTP utilizados

- `200` - OK (requisição bem-sucedida)
- `201` - Created (recurso criado)
- `204` - No Content (sem conteúdo)
- `400` - Bad Request (requisição inválida)

## Desenvolvimento

Para adicionar novos endpoints:

1. Crie um novo serviço em `services/`
2. Implemente a lógica em `repositories/` se precisar de dados
3. Adicione o controller em `controllers/`
4. Registre a rota em `routes/routes.ts`
