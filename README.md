# Projeto Full-Stack Frontend Motors Shop

Este é um projeto denominado Motors Shop e trata-se de uma plataforma de e-commerce para a compra e venda de carros.
Aqui nesta documentação você encontrará as referências da parte frotend do projeto. 
Para ter acesso ao backend do projeto, entre no link abaixo: 
- (https://github.com/Kenzie-Academy-Brasil-Developers/project-full_stack-backend-raiannalima).

## Tecnologias utilizadas: 

- React (https://react.dev/);
- TypeScript (https://www.typescriptlang.org/);
- Zod (https://zod.dev/);
- Styled Components (https://styled-components.com/);
- Tailwind (https://tailwindcss.com/);

## Iniciando o projeto - Rodando a API:

- No terminal, digite o comando para instalar as dependências: 
```bash

npm install

```

- Em seguida, digite o comando para rodar o servidor: 
```bash

npm run dev

```

## Conhecendo o projeto - Rotas da API: 

### -> localhost:porta/: Rota da dashboard; 
### -> localhost:porta/login : Rota Para o usuário logar; 
### -> localhost:porta/user : Rota para o usuário se registrar; 
### -> localhost:porta/product : Rota do carro anunciado; 
### -> localhost:porta/profile-user : Rota do usuário comprador; 
### -> localhost:porta/profile-advertiser : Rota do usuário anunciante; 

## Conhecendo o projeto - Principais features:

### /: 

#### -> Ver todos os anúncios; 
#### -> Clicar em um anúncio para ver detalhes; 
#### -> Se estiver logado como comprador, terá a opção de editar perfil.

### /login: 

#### -> Efetuar o login. 

### /user: 

#### -> Efetuar o cadastro. 

### /profile-advertiser: (Este é o perfil de anunciante)

#### -> Criar anúncio;
#### -> Editar an´úncio; 
#### -> Deletar anúncio; 
#### -> Ver detalhes do anúncio; 
#### -> Editar perfil; 

### /product/:id: 

#### -> Ver anúncio, os dados do anunciante e os comentários;  
#### -> Clicar no botão para abrir o perfil do anunciante;
#### -> Fazer um comentário se estive logado; 

### /profile-user/:id: 

#### -> Ver todos os anúncios do anunciante; 






