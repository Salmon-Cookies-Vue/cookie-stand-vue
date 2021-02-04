<template>
  <div>
    <h1>{{ msg }}</h1>
    <Home />
    <StoreData />    
  </div>
</template>


// should render either home or salesData based on routing


<script>
import Home from '../Home/Home.vue'
import StoreData from '../Data/Data.vue'



export default {
  name: 'Main',
  components: {
    Home,
    StoreData
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
