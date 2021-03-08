# te-marvel-api

GET STARTED
This is a sample server Marvel API server.

## System Requirements
- [NodeJS](https://nodejs.org/en/)
- [Redis](https://redis.io/download) - Install in docker or locally 
- [Docker](https://www.docker.com/get-started) (Optional)

## Running Locally

```bash
$ git clone git@github.com:android71Francis/te-marvel-api.git
$ cd te-marvel-api
$ npm i 
$ npm run dev
```

## Build application

```bash
$ cd te-marvel-api
$ npm build
$ npm start
```

Need to have a `.env` file similar to this.
```
MARVEL_API_ENDPOINTS=
MARVEL_API_PUBLIC_KEY=
MARVEL_API_PRIVATE_KEY=
REDIS_HOST=
```

API Documatation
- GET /api/characters - Return collections of characters you found in Marvel
- GET /api/characters/:id - Return the details of character from Marvel by ID
Access API documentation - http://localhost:8080/api-docs

## Run Test

```bash
$ cd te-marvel-api
$ npm test (Run test watch)
$ npm test:ci (Run test coverage)
```

## Built Using

-   [ExpressJS](https://expressjs.com)
-   [Axios](https://github.com/axios/axios)
-   [Redis](https://redis.io)
-   [Typescript](https://www.typescriptlang.org)
-   [Swagger](https://swagger.io)
