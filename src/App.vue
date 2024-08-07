<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts">
import Footer from './components/footer/Footer.vue';
import NavBar from './components/navbar/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
