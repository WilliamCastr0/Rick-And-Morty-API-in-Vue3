<template>
  <div class="container">
    <h1>Rick And Morty (Challenge Code)</h1>
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from './components/ListCharacters.vue'

export default {
  components: {
    ListCharacters
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 1.5%;
  padding: 0;
}

body {
  background-color: #24282F;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.containter {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>
