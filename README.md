# VAH - Full Stack Boilerplate (in development)
## VueJS + Apollo Client + Hasura (Postgres)
Full-stack template with examples to create Offline first reactive Web Applications with state of the art open source 'pluggable' technologies and world-wide adopted.

![Artboard](https://user-images.githubusercontent.com/4195550/79074476-f69f9100-7cec-11ea-99a7-855b4b711d66.jpg)

Follow [Development](DEVELOPMENT.md) for instructions.

## Perks

- [X] SSR
- [X] PWA
- [X] Reactive / DB subcriptions
- [X] Full text search
- [ ] Auth with Password and Social Media Buttons
- [ ] Basic offline mode
- [X] Docker compose: 
  - Local: Hasura Instance, PGAdmin instance
  - Production Deploy Script
- [ ] WYSIWYG editor with Drag&Drop and copy from clipboard images, with file compression on the browser.
- Code Exmaples
  - [ ] Fill database with fake data for testing

## Philosophy
- Every part can be separated into other technologies, different frontent and libraries. Graphql needs to be the aquitecture/design connector between parts. So it is possible to chage Vue for React and Postgres with another DB. Tho these technoligies are state of the art right now, with huge communities, support and documentation. 
- Best Development Experience as possible (DX)
- Posibility to deploy all at once or in difference microservices.
- Offline First approach for best user exeperience and accesibility. 
- Multiplatform ready: Web, Desktop (electron) and. Mobile (cordova)

Install
=======
Clone the Repository, 
Create aacounti in Graphql Engine for online reporst on graphql https://engine.apollographql.com/

Create a `.env` file with the following structure. Be sure that you never commit this file.
```
# Hasura API
VUE_APP_GRAPHQL_HTTP
VUE_APP_GRAPHQL_WS
#HASURA_GRAPHQL_AUTH_HOOK=true
#HASURA_GRAPHQL_AUTH_HOOK_MODE=true
```

Run 
```
npm run serve
```
Or with Vue UI:
```shell
docker-compose up
vue ui
```
open 
`
app http://localhost:8080
graphql address: http://localhost:4000/graphql
`

open SSR server
```
yarn run ssr:serve
```

Deploy
======
The deployment method take account of Server Side Rendering.



Vue Ecosystem
===================

**Vue plugins**:
- Vue Cli
  - Vuex
  - PWA
  - Vue Apollo (InMemoryCache and HttpLink)
  - ESLint + Prettier
  - SSR
- Vue-meta (Tab titles and SEO)


IDE's
======
## Webstorm users
Resolve Alias @ configuration: 
`
For Vue-cli 3.x, you have to specify node_modules/@vue/cli-service/webpack.config.js. as Preferences | Languages & Frameworks | JavaScript | Webpack
`


Need to read and understand
===========================
* MongoDB queries and best performance design: https://university.mongodb.com/
* Vue-Apollo Documentation: 
  - Local State Management
  - Offline Cache
  
Stack
=====
## Why Vue

## Why Apollo Client

## Why Apollo Server GraphQL

## Why MongoDB

