<script>
  export default {
    data() {
      return {
        selectedUser: "",
      };
    },
    methods: {
      login() {
        // Lagre valget bruker i cookies
        document.cookie = `user=${this.selectedUser}; path=/`;
        // Redirect til appen
        this.$router.push("/");
      },
    },
  };
  </script>
  
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
  
  
  