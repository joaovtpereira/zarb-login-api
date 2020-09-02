# ZarbLogin-API

API rest feita em node.js

## Sequelize - Comunicação com o banco : https://sequelize.org/

### Configuração do ambiente
* [Instalar o docker](https://docs.docker.com/engine/install/)
* Criar um novo container para o postgres
	* `docker run --name login -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
* É necessário criar o banco de dados em sua máquina, para isso recomenda-se utilizar o [postbird](https://www.electronjs.org/apps/postbird)
  * Quando abrir o postbird, use a porta 5432 do host localhost, usuário `postgres` e informe a senha 'docker', (não preencha o campo "database") e clique em "connect"
* No campo "Select Database" no canto superior esquerdo selecione a opção "create database", preencha o campo com "login" e clique em "CREATE DATABASE"
* Clone o repositório brasilcertec-api e realize os seguintes comandos na raiz do projeto:
  - `yarn sequelize db:migrate` para rodar as migrations.
* Vá no postbird e clique no ícone de "refresh" no canto inferior esquerdo, as tabelas do banco devem aparecer listadas na esquerda.

## Available Scripts

No projeto, você pode rodar:

### `yarn`

Utilize o comando "yarn" para baixar todas as dependências do projeto.

### `yarn dev`

Utilize o comando "yarn dev" para rodar o servidor.
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.
