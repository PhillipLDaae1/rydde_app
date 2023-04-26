<script>
  import NavBar from './components/NavBar.vue'
  import HomeView from './views/HomeView.vue'
  import DatabaseInfo from './components/DatabaseInfo.vue'

  export default {
    components: {
      NavBar,
      HomeView,
      DatabaseInfo,
    }
  }
</script>

<template>
  <NavBar />
  <DatabaseInfo />
  <div>
    <RouterView />
  </div>
  
</template>

<style>

</style>

