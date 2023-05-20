
# API Node Pedido Eletrônico

Api de CRUD de produtos, clientes e pedidos


## Tech Stack

**Client:** React, CSSModules, Next

**Server:** Node, Fastify, Prisma


## Instalação

Instalação usando npm na pasta do projeto

  - Necessário Node ^18.03
  - Alterar o .env com os dados do banco de homologação/produção.
  - Alterar o arquivo prisma.schema com o datasource desejado.

```bash
  npm install my-project
```
```bash
  npx prisma migrate dev
```

## Formato de conexão
  ```
  postgres://johndoe:<password>@ep-mute-rain-952417.us-east-2.aws.neon.tech/neondb
             ^                                   ^                         ^
             |- <role>                           |- <hostname>             |- <database>
  ```

  Arquivo ``.env``:
  ```javascript
  # Pooler URL
  DATABASE_URL=postgres://johndoe:<password>@ep-mute-rain-952417.pooler.us-east-2.aws.neon.tech/neondb

  DIRECT_URL=postgres://johndoe:<password>@ep-mute-rain-952417.us-east-2.aws.neon.tech/neondb
  SHADOW_DATABASE_URL=postgres://johndoe:<password>@ep-mute-rain-952417.us-east-2.aws.neon.tech/shadow-database
  ```

  Arquivo ``prisma.schema``:
  ```javascript
  // prisma/schema.prisma
  datasource db {
  provider = "postgresql"
  url  	= env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
  // If you want to use Prisma Migrate, you will need to manually create a shadow database
  // https://neon.tech/docs/guides/prisma-migrate#configure-a-shadow-database-for-prisma-migrate
  // make sure to append ?connect_timeout=10 to the connection string
  // shadowDatabaseUrl = env(“SHADOW_DATABASE_URL”)
  ```
    
## API Reference

- Using HTTPie

#### Listar todos os itens

```http
  GET /products
```


#### Retornar um unico produto

```http
  GET /products/${id}
```
Header params
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** |

#### Criar novo item

```http
  POST /products
```
Body params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required** |
| `price` | `number` | **Required** |



