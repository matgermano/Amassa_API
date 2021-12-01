![alt ou título da imagem](https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)
![alt ou título da imagem](https://img.shields.io/badge/javascript-323330?style=for-the-badge&logo=javascript&logocolor=f7df1e)

# Amassa API
<div align="center">
<img src="https://super.abril.com.br/wp-content/uploads/2018/07/queijo2.gif" width="250">
</div>      

---

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
 
 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


 ![GitHub Org's stars](https://img.shields.io/github/stars/matgermano/Amassa_API?style=social)
 [![GitHub forks](https://img.shields.io/github/forks/matgermano/Amassa_API.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/matgermano/Amassa_API/network/)
 
 [![GitHub branches](https://badgen.net/github/branches/matgermano/Amassa_API)](https://github.com/matgermano/Amassa_API)

---
 ## As dependências utilizadas no projeto foram:
- ![alt ou título da imagem](https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765)
- ![alt ou título da imagem](https://camo.githubusercontent.com/0a4aff6e255d17730282bc6b00ed6c73a3f09bca95365a4f5d73462106f8a789/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d53657175656c697a6526636f6c6f723d323232323232266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d353242304537266c6162656c3d)
- ![alt ou título da imagem](https://camo.githubusercontent.com/932123bf240349f3785c02228b113b06299079e8740f480c767e8335fd6d752a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3037343035453f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465)
- ![alt ou título da imagem](https://img.shields.io/badge/cors-%20-yellowgreen)
- ![alt ou título da imagem](https://img.shields.io/badge/nodemon-green)
 
 ---
 
## :running: Iniciando o projeto

### Recomendamos que faça o download do Insomnia na sua maquina!

- [download insomnia](https://insomnia.rest/download)

### Clone este repositório em sua máquina
```
$ git clone https://github.com/matgermano/Amassa_API.git
```

### 📋 Pré-requisitos para instalação 
1. Instale NodeJS em seu computador. Baixe os arquivos do repositório Amassa aqui no GitHub. 

2. Crie um banco de dados no sistema SQL de sua preferência: MySQL, Postegree, SQL Server, SQLITE3. 

3. Crie uma tabela com o nome amassa no banco de sua preferência.

4. Instale via terminal utilizando os seguintes comandos: 
```
 npm init
 npm install -g
 npm install express 
 npm install mysql2 
 npm install sequelize sequelize-cli path 
 npm install cors
 npm install --save-dev nodemon

```
### no cmd, terminal ou powershell para rodar o amassa api:
``` 
"scripts": {
    "start": "nodemon src/index.js",
    "test": "echo "Error: no test specified" && exit 1"
  }
"scripts": {
    "start": "nodemon src/index.js"
      }
```

- abrindo o insomnia você verá algo do tipo:


| filter    | + v      |
| :-------- | :------- |

- clique no sinal de soma ( + )
- escolha -> new request
- você vera algo parecido com o exemplo abaixo:

| **name** ( _defaul to your request url if left empty_ )|        |
| :-----------------------------------------------       | :----- |
| my request                                             |  get   |
|                                                        | create |

- clicando em get você poderá escolher qualquer um entre os quais usamos nessa livraria
- ![get](https://img.shields.io/badge/get-purple.svg)
- ![post](https://img.shields.io/badge/post-green.svg)
- ![put](https://img.shields.io/badge/put-orange.svg)
- ![delete](https://img.shields.io/badge/delete-red.svg)
- vamos usar o get primeiro depois é só clicar em **create**


# usando o ![get](https://img.shields.io/badge/get-purple.svg)

#### agora você deve estar vendo algo do tipo

| get  | `https://api.myproduct.com/v1/users` | send |
| :--  | :---------------------------------   | :--- |
| body |                                      |      |

- clique em body e escolha o json
- para fazer a consulta dos autores que existem, cole em cima dessa url o link abaixo e clique no send
```http
http://localhost:3000/pratos_principais 
```
- o resultado deve ser algo do tipo
```json
[
  {
    "id": 1,
    "nome": "lasanha bolonhesa",
    "ingredientes": "Ragu de carne, molho de tomate, parmesão e muçarela gratinada.",
    "porcao":"Para dividir"
    "preco":"R$60,00"
    "createdat": "2021-11-29t00:58:06.380z",
    "updatedat": "2021-11-29t00:58:06.380z"
  },
]
```

- para fazer a consulta de um prato existente
```http
http://localhost:3000/pratos_principais/1 ou 2
```
- note que o numero 1 ou 2 é o id do nome

# usando o ![post](https://img.shields.io/badge/post-green.svg)
### agora você sabe quais pratos existem, vamos por mais no registro??
- para inserir um novo prato, a rota é o mesmo link
```http
http://localhost:3000/pratos_principais
```
- dentro do insomnia, abaixo do json vamos colar esse novo prato principal:
```json
{
"nome": "risoto tropical",
"ingredientes": "Salmão grelhado com risoto de limão siciliano."
}
```
- você deve ter visto ao lado algo assim:
```json
{
  "id": 2,
  "nome": "risotW tropical",
  "ingredientes": "Salmão grelhado com risoto de limão siciliano",
  "updatedat": "2021-11-29t06:54:26.630z",
  "createdat": "2021-11-29t06:54:26.630z"
}
```
### opa! acho que errei o nome do prato
### vamos atualizar!?
# usando o ![put](https://img.shields.io/badge/put-orange.svg)
- vamos pegar o id do autor que queremos atualizar?
```http
http://localhost:3000/pratos_principais/2
```
- agora acredito que está certo:
```json
{
"nome": "risoto tropical",
"ingredientes": "Salmão grelhado com risoto de limão siciliano"
}
```

### Mas e se quiser deletar uns pratos que já saíram do restaurante?

# usando o ![delete](https://img.shields.io/badge/delete-red.svg)
### não vamos deletar o risoto vamos precisar dele mais pra frente!
### mesma etapa mas o metodo é delete.

- rota para apagar o prato e clique no send
 ```http
 localhost:3000/pratos_principais/1 ou 2
```
- **cuidado, tenha certeza que você vai apagar o prato correto!**

# vamos ver quais nomes existem no registro??
### vamos usar o metodo ![get](https://img.shields.io/badge/get-purple.svg) e a rota é o link abaixo
```http
localhost:3000/nome
```
- deve ver algum resultado assim
```json
[
  {
    "id": 1,
    "nome": "lasanha bolonhesa",
    "createdat": "2021-11-29t00:45:29.254z",
    "updatedat": "2021-11-29t00:45:29.254z"
  },
  {
    "id": 2,
    "nome": "risoto tropical",
    "createdat": "2021-11-29t00:45:42.407z",
    "updatedat": "2021-11-29t00:45:42.407z"
  },
  {
    "id": 3,
    "nome": "nhoque da mama",
    "createdat": "2021-11-29t00:45:49.266z",
    "updatedat": "2021-11-29t00:45:49.266z"
  },
]
```
- grave os Ids dos nomes dos pratos, vamos precisar

# Usando o ![post](https://img.shields.io/badge/post-green.svg)
- Link para o post é o msm do anterior mas o metodo é ![post](https://img.shields.io/badge/post-green.svg)
```http
localhost:3000/ingredientes
```
- E vamos adicionar um ingrediente!
```json
{
 "ingrediente": "Nhoque com molho branco ou vermelho."
}
```
- Você deve ver algo do tipo
```http
{
  "id": 4,
  "ingrediente": "Nhoque com molho branco ou vermelho.",
  "updatedat": "2021-11-29t07:36:27.141z",
  "createdat": "2021-11-29t07:36:27.141z"
}
```

### E se for preciso atualizar algum campo? Para isso usaremos o método:
# ![put](https://img.shields.io/badge/put-orange.svg)

- rota para atualizar
```http
localhost:3000/ingredientes/4
```
- Agora sim!
```json
	{
		"ingredientes": "Calabresa, parmesão, gema de ovo e pimenta do reino."
	}
```

# Usando o ![delete](https://img.shields.io/badge/delete-red.svg)
### eu não sou muito fã de risoto
então vamos deletar ele!
```http
localhost:3000/pratos_principais/2
```
- ok, o risoto foi deletado

# Agora vamos ver os livros!!

# Usando o ![get](https://img.shields.io/badge/get-purple.svg)
- rota para pegar um prato existente
```json 
localhost:3000/sobremesas/1
```
- o resultado deve ser esse
```json
    "id": 1,
    "nome": "lasanha bolonhesa",
    "ingredientes": "Ragu de carne, molho de tomate, parmesão e muçarela gratinada.",
    "porcao":"Para dividir"
    "preco":"R$60,00"
    "createdat": "2021-11-29t00:58:06.380z",
    "updatedat": "2021-11-29t00:58:06.380z"
  },
}
```
### Bom! Agora que já sabemos quais os pratos que existem, eu quero saber, como que eu insiro mais livros?
 # usando o ![post](https://img.shields.io/badge/post-green.svg)
 - rota para inserir um novo prato
 ```http
 localhost:3000/pratos
 ```
 - prato a ser inserido: lembra que eu disse que usariamos o prato!? Lasanha é o id 1 para mim
 ```json
 {
    "id": 1,
    "nome": "lasanha bolonhesa",
    "ingredientes": "Ragu de carne, molho de tomate, parmesão e muçarela gratinada.",
    "porcao":"Para dividir"
    "preco":"R$60,00"
    "createdat": "2021-11-29t00:58:06.380z",
    "updatedat": "2021-11-29t00:58:06.380z"
}
 ```

 ### Vamos atualizar o preço dele então
 #usando o ![put](https://img.shields.io/badge/put-orange.svg)
 - rota para atualizar o prato
 ```http
 localhost:3000/prato_principal
 ```
 - Prato com preço atualizado
 ```json
 {
    "id": 1,
    "nome": "lasanha bolonhesa",
    "ingredientes": "Ragu de carne, molho de tomate, parmesão e muçarela gratinada.",
    "porcao":"Para dividir"
    "preco":"R$65,00"
    "createdat": "2021-11-29t00:58:06.380z",
    "updatedat": "2021-11-29t00:58:06.380z"
 }
 ```
 ### pronto! Agora se quiser, vamos deletar!
 # usando o ![delete](https://img.shields.io/badge/delete-red.svg)
 - rota que vamos usar para deletar o prato
 ```http
 localhost:3000/prato_principal/1
 ```
 #### Com isso o prato foi deletado!  
 

## 💻 Equipe de Desenvolvedores

💻 **Matheus Germano** - [Linkedin](https://www.linkedin.com/in/matheusgermanodesouza/)

💻 **Camila Rangel**  - [Linkedin](https://www.linkedin.com/in/cafrangel/)

💻 **Israel Marques** - [Linkedin](https://www.linkedin.com/in/israel-marques-375017158/)

💻 **Gabriel Bastos** - [Linkedin](https://www.linkedin.com/in/gabrielbastos1995/)

💻 **Rafael Soares** - [Linkedin](https://www.linkedin.com/in/rafaelsfsoares/)

