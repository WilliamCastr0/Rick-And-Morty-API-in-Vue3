<template>
  <div>
    <h1>Rick and Morty (My Code Challenge!)</h1>
    <ListCharacters />
  </div>
</template>

<script>
// @ is an alias to /src
import ListCharacters from '../components/ListCharacters.vue'

export default {
  name: 'Home',
  components: {
    ListCharacters,
    
  }
}
</script>
