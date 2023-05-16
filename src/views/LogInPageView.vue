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
      <h1>Vennligst velg bruker:</h1>
      <label>
        <input type="radio" v-model="selectedUser" value="1">
        Phillip
      </label>
      <label>
        <input type="radio" v-model="selectedUser" value="2">
        Per-Oskar
      </label>
      <button @click="login">Logg inn</button>
    </div>
  </template>
  
<style scoped>
  label {
    font-size: 24px;
  }

  button {
    font-size: 18px;
    border-radius: 0.5rem;
  }

</style>