<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleSidebar() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeSidebar() {
      this.isMenuOpen = false;
    },
    clearCookies() {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }

      window.location.reload();
    },
  },
};
</script>

<template>
  <nav>
    <div class="logo">
      <router-link class="name_to_home" to="/" @click="closeSidebar">
        <span class="logo_name">Rydde App</span>
      </router-link>
      <i @click="toggleSidebar" class="bx bx-menu menu_icon" v-if="!isMenuOpen"></i>
    </div>

    <div class="sidebar" :class="{ open: isMenuOpen }">
      <div class="logo">
        <span class="logo_name">Rydde App</span>
        <i @click="toggleSidebar" class="bx bx-menu menu_icon"></i>
      </div>

      <div class="sidebar_content">
        <ul class="lists">
          <li class="list">
            <router-link class="nav_link" to="/" @click="closeSidebar">
              <i class="bx bx-home sb_icon"></i>
              <span class="nav_link_name">Hjem</span>
            </router-link>
          </li>
          <li class="list">
            <router-link class="nav_link" to="/tasks" @click="closeSidebar">
              <i class="bx bx-task sb_icon"></i>
              <span class="nav_link_name">Oppgaver</span>
            </router-link>
          </li>
          <li class="list">
            <router-link class="nav_link" to="/statistics" @click="closeSidebar">
              <i class="bx bx-diamond sb_icon"></i>
              <span class="nav_link_name">Statistikk</span>
            </router-link>
          </li>
        </ul>
        <ul>
          <li class="list">
            <button @click="clearCookies()">
              <span class="nav_link_name">Log ut</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section v-show="isMenuOpen" class="overlay" v-if="isMenuOpen" @click="closeSidebar"></section>
</template>

<style scoped>

* {
  z-index: 10;
  background-color: rgb(34, 34, 34);
}
.name_to_home {
  text-decoration: none;
  color: black;
}

.sidebar {
  z-index: 3;
}

.logo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 0 1rem;
}

.bx {
  font-size: 36px;
  cursor: pointer;
  background-color: rgb(46, 46, 46);
}

.logo_name {
  font-size: 24px;
}

nav .sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  height: 70px;
  width: 260px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 5;
  background-color: rgb(36, 36, 36);
}

nav .sidebar.open {
  right: 0;
}

.sidebar .sidebar_content {
  padding: 1rem 0.5rem;
  height: 100vh;
  background-color: rgb(34, 34, 34);
}

.sidebar_content ul {
  padding: 0;
}

.sidebar_content .list {
  list-style: none;
  margin: 1rem 0 1.5rem 0;
}

.list .nav_link {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: rgb(46, 46, 46);
  padding: 0.8rem 0.5rem;
  border-radius: 8px;
  width: calc(100% - 1rem);
  font-size: 22px;
  color: #707070;
  transition: 0.5s ease-out;
}

.nav_link :hover {
  background-color: rgb(163, 97, 169);
}

.sb_icon {
  font-size: 28px;
  margin: 0 1rem 0 0;
  color: #707070;
}

.nav_link:hover {
  background-color: rgb(163, 97, 169);
}

.overlay {
  position: fixed;
  top: 0;
  right: 260px;
  opacity: 1;
  pointer-events: auto;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
}

.no_icon {
  display: none;
  visibility: hidden;
}

.menu_icon {
  transition: 0.5s ease;
  background-color: rgb(36, 36, 36);
}

.nav_link_name {
  background-color: rgb(46, 46, 46);
}
</style>
