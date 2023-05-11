<template>
    <div>
      <h2>Vennligst velg bruker:</h2>
      <label>
        <input type="radio" v-model="selectedUser" value="1">
        Phillip
      </label>
      <label>
        <input type="radio" v-model="selectedUser" value="2">
        Per-Oskar
      </label>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedUser: "",
      };
    },
    methods: {
      login() {
        // Save the selected user in cookies
        document.cookie = `user=${this.selectedUser}; path=/`;
        // Redirect to the app
        this.$router.push("/");
      },
    },
  };
  </script>
  