<script>
  import NavBar from './components/NavBar.vue'
  import HomeView from './views/HomeView.vue'
  import DatabaseInfo from './components/DatabaseInfo.vue'
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

</style>

