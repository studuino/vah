# VAM - FullStack Vue Apollo Mongo
Full-stack template Vuejs + Apollo + GraphQl + mongoDB + Docker + AUTH 

## Perks

- [ ] Docker compose
- [ ] SSR
- [ ] Full text search
- [ ] Reactive / DB subcriptions
- [ ] Auth with Password and Social Media Buttons
- [ ] PWA
- [ ] Basic offline mode


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
