<template>
  <div>
    <h1>Velkommen, {{ username }}!</h1>
    <p>This is the home page.</p>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // Check for user cookie
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1")

    if (!cookieValue) {
      // Redirect to login page if no user cookie found
      next({ name: 'LogInPage' })
    } else {
      // Pass the appropriate username based on the cookie value
      let username = ''

      if (cookieValue === '1') {
        username = 'Phillip'
      } else if (cookieValue === '2') {
        username = 'Per-Oskar'
      } else {
        username = 'Default Name'
      }

      // Pass the username as a prop
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
