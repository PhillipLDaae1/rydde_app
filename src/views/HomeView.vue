<script>
export default {
  beforeRouteEnter(to, from, next) {
    // Sjekker for bruker Cookie
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1")

    if (!cookieValue) {
      // Redirect til login side hvis ikke bruker funnet
      next({ name: 'LogInPage' })
    } else {
      // Bruk passende brukernavn basert på Cookie value
      let username = ''

      if (cookieValue === '1') {
        username = 'Phillip'
      } else if (cookieValue === '2') {
        username = 'Per-Oskar'
      } else {
        username = 'Default Name'
      }

      // Bruk brukernavnet som prop
      next(vm => {
        vm.username = username
      })
    }
  },
  
  data() {
    return {
      username: '',
      greeting: ''
    }
  },

  mounted() {
    this.decidePromt()
  },

  methods: {
    decidePromt() {
      const currentHour = new Date().getHours();

      let greeting;

      if (currentHour >= 5 && currentHour < 12) {
        this.greeting = "God morgen";
      } else if (currentHour >= 12 && currentHour < 18) {
        this.greeting = "God ettermiddag";
      } else {
        this.greeting = "God kveld";
      }

    }
  }
}
</script>

<template>
  <div class="greeting">
    <h1>{{ greeting }}, {{ username }}!</h1>
    <h2>Her var det visst tomt...</h2>
  </div>

  <div class="info_card">
    <h1>Dine poeng denne uken</h1>
  </div>
</template>

<style scoped>
@media (max-width: 600px) {
  * {
    font-size: 20px;
  }
  .greeting h1 {
    font-size: 20px;
  }

  .greeting h2 {
    font-size: 16px;
    margin: 0 0 1rem 0;
  }
}


</style>