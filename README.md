# Desafio Connvert - Backend
### Acesse :blush:
### http://connvert.ourmind.com.br/login

### Framework
* Node JS & Typescript

#### Desafio  
* Desenvolver uma aplicação de gerenciamento de dívidas.

####Outras partes que compõem a aplicação

- [Frontend](https://github.com/joaosantosdev/connvert-frontend)

### Rodar a aplicação com Docker
```
docker-compose up -d
Rodando em: http://localhost:9999/
```

### Rodar a aplicação sem Docker
##### Atenção
* Configurar .env url do mongo db - MONGO_URL_DB 
```
yarn install
yarn dev
Rodando em: http://localhost:9999/
```

### Recursos Disponíveis

### Usuário
- Post Register - /users/register
- Post Login - /users/login

### Cliente
- Get All -/clients
- Get By Id - /clients/:id
- Get Debts By Client - /clients/:id/debts

### Dívida
- Post Debt -/debts
- Put Debt -/debts/:id
- Delete Debt - /debts/:id
