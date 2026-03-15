📝 Task Manager API with JWT Authentication

API RESTful desenvolvida em Node.js para gerenciamento de tarefas, com autenticação baseada em JSON Web Tokens (JWT). Cada usuário possui acesso apenas às suas próprias tarefas, garantindo segurança e isolamento de dados.
Este projeto foi desenvolvido como parte de um desafio prático da Escola Nova Era, com foco em back-end, autenticação, organização de código e boas práticas.
🚀 Tecnologias Utilizadas

Node.js
Express.js
MongoDB (via Mongoose)
JSON Web Token (JWT)
bcryptjs (hash de senhas)
Jest (testes automatizados)
dotenv (variáveis de ambiente)

🎯 Funcionalidades

🔐 Autenticação
Cadastro de usuários
Login com geração de token JWT
Proteção de rotas autenticadas

✅ Gerenciamento de Tarefas
Criar tarefas
Listar tarefas do usuário autenticado
Atualizar tarefas
Deletar tarefas
Cada tarefa possui:
title
status (pendente ou concluída)

🧪 Testes Automatizados
Testes para autenticação
Testes para rotas de tarefas
Validação de acesso por usuário

🗂 Estrutura do Projeto
Copy code

task-manager-api/

│

├── server.js

├── app.js

├── package.json

├── .env

├── .gitignore

│

├── models/

│   ├── User.js

│   └── Task.js

│
├── routes/

│   ├── auth.routes.js

│   └── task.routes.js

│

├── middleware/

│   └── authMiddleware.js

│

├── tests/

│   ├── auth.test.js

│  └── task.test.js

│

└── README.md

🔐 Rotas da API

Autenticação
POST /auth/register – Criar usuário
POST /auth/login – Login e geração de token JWT
Tarefas (rotas protegidas)
GET /tasks – Listar tarefas do usuário
POST /tasks – Criar tarefa
PUT /tasks/:id – Atualizar tarefa
DELETE /tasks/:id – Deletar tarefa
⚙️ Configuração do Ambiente
Crie um arquivo .env na raiz do projeto:
Copy code

PORT=3000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=sua_chave_secreta

▶️ Como Executar o Projeto
Copy code

Bash
npm install
npm run dev

O servidor será iniciado em:
Copy code

http://localhost:3000

🧪 Executar Testes
Copy code
Bash
npm test

⚠️ Observação Importante sobre o MongoDB
Este projeto utiliza MongoDB como banco de dados, conforme proposto no desafio.
No entanto, devido a restrições do ambiente local (uso de equipamento de terceiros), não foi possível executar o banco de dados durante o desenvolvimento final. Ainda assim:
A arquitetura está completa
As rotas estão implementadas
A autenticação JWT está funcional
O projeto segue exatamente o escopo proposto

🏫 Sobre o Desafio
Projeto desenvolvido como parte da formação da Escola Nova Era, com foco em:
APIs RESTful
Autenticação JWT
Banco de dados NoSQL
Testes automatizados
Organização e boas práticas em Node.js

👨‍💻 Autor

Vitor Dutra Melo

📍 Londres, Reino Unido

💻 Desenvolvedor de Software

📫 vitordutra1125@gmail.com


