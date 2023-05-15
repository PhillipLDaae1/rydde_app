<script>
  import NavBar from './components/NavBar.vue'
  import HomeView from './views/HomeView.vue'
  import LogInPageView from './views/LogInPageView.vue'

  export default {
    components: {
      NavBar,
      HomeView,
      LogInPageView,
    },

  }
</script>

<template>
  <NavBar />
  <div>
    <RouterView />
  </div>
</template>

<style>
* {
  background-color: #121212;
  color: whitesmoke;
  font-family: 'Wix Madefor Display', sans-serif;
}

</style>

