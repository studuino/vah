<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

      <h3>Add user</h3>
<!--      <input type="text" v-model="userNameInput">  <button @click="addUser(userNameInput)" >Add User</button>-->

      <ApolloMutation
              :mutation="require('../graphql/AddUser.gql')"
              :variables="{ name: userNameInput }"
              @done="userNameInput = ''"
      >
          <template slot-scope="{ mutate }">
              <form v-on:submit.prevent="mutate()">
                  <label for="field-message">Message</label>
                  <input
                          id="field-message"
                          v-model="userNameInput"
                          placeholder="Type a message"
                          class="input"
                  />
              </form>
          </template>
      </ApolloMutation>
<h3>Users:</h3>
    <ApolloQuery :query="require('../graphql/QueryUser.gql')">
      <div slot-scope="{ result: { data } }">
        <template v-if="data">
            <div v-for="user in data.queryUser" :key="user.id">
                {{user.name}} - {{ user.id}}
                <button @click="deleteUser(user.id)" style="border-radius:50%; height: 25px; width: 25px">x</button>
            </div>
        </template>
      </div>
    </ApolloQuery>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag'
export default {
  name: 'Home',
  components: {},
  data(){
    return{
      userNameInput:''
    }
  },
  apollo: {
    queryUser: gql`query queryUser {
                  queryUser {
                    id
                    name
                  }
    }`,
  },
  methods:{
    deleteUser(userId){
      this.$apollo.mutate({
        // Query
        mutation: require('../graphql/DeleteUser.gql'),
        // Parameters
        variables: {
          userId: userId,
        },
        // Update the cache with the result
        // The query will be updated with the optimistic response
        // and then with the real result of the mutation
        update: (store, { data: { addTag } }) => {

          console.log('🎹', store)
          console.log('🎹', addTag)
          // Read the data from our cache for this query.
          // const data = store.readQuery({ query: TAGS_QUERY })
          // // Add our tag from the mutation to the end
          // data.tags.push(addTag)
          // // Write our data back to the cache.
          // store.writeQuery({ query: TAGS_QUERY, data })
        },
        // Optimistic UI
        // Will be treated as a 'fake' result as soon as the request is made
        // so that the UI can react quickly and the user be happy
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   addTag: {
        //     __typename: 'Tag',
        //     id: -1,
        //     label: userId,
        //   },
        // },
      })
        .then((data) => {
          // Result
          console.log(data)
        }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
        // this.newTag = newTag
      })
    }
  }
}
</script>
