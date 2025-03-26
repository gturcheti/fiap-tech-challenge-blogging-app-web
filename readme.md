# Blogging App - Frontend

## 📌 O Problema

Após o sucesso do desenvolvimento da aplicação de blogging dinâmico utilizando a plataforma OutSystems e a implementação do back-end em Node.js, chegou a hora de criarmos uma interface gráfica robusta, intuitiva e eficiente para esta aplicação. Este desafio focará em desenvolver o front-end, proporcionando uma experiência de usuário excelente tanto para professores(as) quanto para estudantes.

## 🎯 Objetivo

Desenvolver uma interface gráfica para a aplicação de blogging utilizando **React** e **Next.js**. A aplicação deve ser responsiva, acessível e fácil de usar, permitindo aos docentes e alunos(as) interagir com os diversos endpoints REST já implementados no back-end.

---

## 🛠 Requisitos Funcionais

### 1 Dashboard (Tela de gestão e visualização unificada)
### 1.1 Bloco de Criação de Postagens
- 📌 Formulário para que docentes possam criar postagens.
- 📌 Campos para título e conteúdo.
- 📌 Botão para enviar o post ao banco. 
### 1.2 Listagem das Postagens
- 📌 Exibir uma lista de todos os posts disponíveis.
- 📌 Cada item da lista deve mostrar o título e uma breve descrição do post.
- 📌 Incluir um campo de busca para filtrar posts por palavras-chave.
### 1.2.1 Visualização da postagem completa
- 📌 Exibir o conteúdo completo de um post selecionado. 
### 1.2.2 Edição da Postagem
- 📌 Formulário para que os(as) professores(as) possam editar postagens existentes.
- 📌 Carregar os dados atuais do post para edição.
- 📌 Botão para salvar as alterações.
### 1.2.3 Exclusão de postagem
- 📌 Botão para excluir postagem específica.

### 2. Autenticação e Autorização
- 📌 Implementar **JWT (JSON Web Token)** para autenticação segura.
- 📌 Garantir que apenas usuários autenticados possam acessar as páginas de criação, edição e administração de postagens.
- 📌 Armazenamento seguro do token no **HTTPOnly Cookie** ou **Local Storage**.

---

## 🔧 Requisitos Técnicos

### 1. Desenvolvimento em React e Next.js
- ⚙️ Utilizar **Next.js** para a estrutura da aplicação.
- ⚙️ Utilização de **hooks** e **componentes funcionais**.

### 2. Estilização e Responsividade
- 🎨 Utilizar **Styled Components**.
- 📱 Garantir que a aplicação seja **responsiva**, funcionando bem em dispositivos móveis e desktops.

### 3. Integração com Back-End
- 🔄 Realizar chamadas aos **endpoints REST** para obter, criar, editar e excluir posts.
- 🔄 Gerenciar o estado da aplicação com **Context API**.
- 🔒 Implementar autenticação segura com **JWT** e proteção de rotas no front-end.

---
## 🖥️ Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando as seguintes tecnologias:

- **Next.js** - Framework React para aplicações web.
- **React.js** - Biblioteca para construção de interfaces de usuário.
- **TypeScript** - Superset do JavaScript para tipagem estática.
- **Styled Components** - Biblioteca para estilização de componentes.
- **JWT (JSON Web Token)** - Autenticação segura.
- **Docker** - Contêinerização da aplicação.
- **PostgreSQL** - Banco de dados relacional.

---  

## 📂 Arquitetura do Projeto

```
── app
│   ├── add-post
│   ├── cadastro
│   ├── dashboard
│   └── login
├── public
├── src
│   ├── components
│   │   ├── button
│   │   ├── footer
│   │   ├── header
│   │   └── input
│   ├── hooks
│   ├── schema
│   ├── services
│   ├── styles
│   └── types
```

---

## 🚀 Como Executar o Projeto

### 📌 Pré-requisitos
Antes de iniciar, você precisa ter instalado em sua máquina:
- **Node.js** (versão recomendada: 16 ou superior)
- **Gerenciador de pacotes** (npm, yarn, pnpm ou bun)
- **Docker e Docker Compose**

### 📥 Clonar os repositórios
Clone os seguintes repositórios:

**Repositório da aplicação web:**
```sh
 git clone https://github.com/gturcheti/fiap-tech-challenge-blogging-app-web.git
```

**Repositório da API:**
```sh
git clone https://github.com/hericlesthomas/fiap-tech-challenge-blogging-api-react.git
```

### 📦 Instalar as dependências
Dentro de cada repositório clonado, instale as dependências:
```sh
npm install  # ou yarn install, pnpm install, bun install
```

### 🔧 Configuração do Back-End

1. No arquivo `main.ts`, configure a CORS corretamente:
```ts
app.enableCors({
    origin: 'http://localhost:3001/', // Porta do front-end
    credentials: true,
});
```
2. Defina a porta correta para o servidor:
```ts
await app.listen(process.env.PORT || 3000);
```

3. Preencha o arquivo `.env` do back-end com as credenciais necessárias:
```env
NODE_ENV=development
PORT=3000
DATABASE=postgres
DATABASE_PASSWORD=pass
DATABASE_PORT=5432
JWT_SECRET=minhajwtsecretauth
```

### 🐳 Executando com Docker
Para subir os serviços do front-end e back-end utilizando Docker, execute:
```sh
docker-compose up --build
```

### 🔧 Configuração do Front-End

1. Preencha o arquivo `.env` no front-end com a URL da API:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

2. Inicie o servidor de desenvolvimento:
```sh
npm run dev  # ou yarn dev, pnpm dev, bun dev
```

Acesse [`http://localhost:3000`](http://localhost:3000) no navegador para ver o resultado.

---

## 🔐 Autenticação JWT
A aplicação utiliza **JSON Web Token (JWT)** para autenticação e autorização de usuários.
- O usuário recebe um **token JWT** ao fazer login.
- O token é armazenado em **HTTPOnly Cookie** para segurança ou em **Local Storage**.
- As requisições autenticadas incluem o token no **cabeçalho Authorization**.
- O back-end valida o token antes de permitir acesso a rotas protegidas.

Exemplo de requisição autenticada:
```ts
const response = await fetch('/api/protected-route', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
```

---

## 📚 Mais Informações
Para saber mais sobre **Next.js**, confira os seguintes recursos:
- 📖 [Documentação do Next.js](https://nextjs.org/docs)
- 📚 [Aprenda Next.js](https://nextjs.org/learn)

---

## 👨‍💻 Projeto desenvolvido por:
- **Hericles Thomas** - [GitHub](https://github.com/hericlesthomas)
- **Gabriel Turcheti** - [GitHub](https://github.com/gturcheti)
- **Luana Silva** - [GitHub](https://github.com/dearluana)


