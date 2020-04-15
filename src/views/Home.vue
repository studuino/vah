<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <apollo-example />
  </div>
</template>

<script>
// @ is an alias to /src
import ApolloExample from '@/components/ApolloExample.vue'

export default {
  name: 'Home',
  components: {
    ApolloExample,
  },
}
</script>
