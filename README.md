# API CRUD CLIENTS

Uma API de CRUD de clientes simples, utilizando as verbosidades do protocolo HTTP e incluindo HATEOAS(Hypermedia) nos retornos dos GET dos clientes, baseado no modelo *Richardson Maturity Model*. 
A API contém uma autenticação JWT para poder utilizar as rotas.

### Techs
- NodeJS
- ExpressJS
- MongoDB
- JWT
- Swagger
- Babel

### Dependências 
Para rodar o projeto, é necessário instalar as dependências abaixo.
- NodeJS [Link](https://nodejs.org/en/)
* Para saber se você já tem o NodeJS instalado, você pode rodar o comando:
```
node -v
```
Você pode estar com uma versão antiga do NodeJS na sua máquina rode também o comando:
```
npm -v
```

Caso não retorne as versões aconselho desinstalar a versão antiga e instalar a LTS do NodeJS.


### Para rodar 
1. Abra a pasta do projeto no terminal.
2. Rode o comando `npm install`.
3. Rode o comando `npm run dev`.
4. O terminal irá retornar a URL que o servidor está rodando copie e cole em seu browser. (Pode ocorrer um erro se já tiver algo rodando na porta 8080)
5. Ao abrir a index, o link para a documentação do Swagger estará no retorno. 
6. Para finalizar, no terminal pressione `Ctrl+C`, o projeto será finalizado. 

### Extra
Na raiz do projeto contém o arquivo `postman_doc.json`, se desejar utilizar, porém recomendo o próprio Swagger.
Para a autenticação das rotas utilize: 
```
{
    "name": "admin",
    "password": "123"
}
```