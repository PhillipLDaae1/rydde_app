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
    const user = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    if (!user) {
      // Redirect to login page if no user cookie found
      next({ name: 'LogInPage' })
    } else {
      // Pass the username as a prop if user cookie is found
      next(vm => {
        vm.username = user
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
