<template>
  <div class="container">
    <h1>Rick And Morty (Challenge Code)</h1>
    <ListCharacters />
    <a class="gotopbtn" href="#"></a>
  </div>
</template>

<script>
import ListCharacters from './components/ListCharacters.vue'

export default {
  data () {
    return {
    }
  },

  components: {
    ListCharacters
  },

  methods: {
  },
  
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 1.5%;
  padding: 0;
  scrollbar-width: none;
  scrollbar-color: #d87213 #7f7a7a;
}

*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #7f7a7a;
}

*::-webkit-scrollbar-thumb {
  background-color: #d87213;
  border-radius: 10px;
  border: 3px none #7f7a7a;
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

.gotopbtn{
  background: url("https://img.icons8.com/ios-filled/80/000000/circled-up.png") no-repeat;
  position: fixed;
  width: 100px;
  height: 100px;
  top: 50%;
  right: -50px;

  text-decoration: none;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 22px;
  animation-name: example;
  animation-duration: 2s;
}

@keyframes example {
  0%   {right:-50px; top:47%;}
  25%  {right:-50px; top:53%;}
  50%  {right:-50px; top:47%;}
  75%  {right:-50px; top:53%;}
  100% {right:-50px; top:50%;}
}

</style>
