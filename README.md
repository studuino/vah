# VAAM - FullStack Vue + Apollo Client+ Apollo Graphql + Mongo
Full-stack template with examples to create Offline first reactive Web Applications with state of the art open source technologies, pluggable and world-wide adopted.

## Perks

- [X] SSR
- [ ] Reactive / DB subcriptions
- [ ] Full text search
- [ ] Auth with Password and Social Media Buttons
- [ ] PWA
- [ ] Basic offline mode
- [ ] Docker compose

## Philosophy
- Every part can be separated into other technologies, different frontent and libraries. Graphql allways be the aquitecture/design connector between parts. So it is possible to chage Vue for React and MongoDb from another DB. Tho these technoligies are state of the art right now, with huge communities, support and documentation. 
- Best Development Experience as possible (DX)
- Posibility to deploy all at once or in difference microservices.
- Offline First approach for best user exeperience and accesibility. 
- Multiplatform ready: Web, Desktop (electron) and. Mobile (cordova)

Install
=======
Clone the Repository, 
Create aacounti in Graphql Engine for online reporst on graphql https://engine.apollographql.com/


Run 
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
The deployment method take account of Server Side Rendering




Vue + Apollo Client
===================

**Vue plugins**:
- Vue Cli
- Vuex
- PWA
- Vue Apollo (InMemoryCache and HttpLink)
- Prettier
- SSR


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

