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
      username: ''
    }
  },
}
</script>

<template>
  <div>
    <h1>Velkommen, {{ username }}!</h1>
    <p>Her var det visst litt tomt...</p>
  </div>
</template>