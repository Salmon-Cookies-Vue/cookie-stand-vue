<template>
  <div id="app">
    <Header msg='This is Salmon Cookies' />
    <img alt="Vue logo" src="./assets/logo.png">
    <Main msg="This is Salmon Cookies"/>
    <Footer />
  </div>
</template>

<script>
import Main from './components/Main/Main.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
