<template>
  <nav class="">
    <div class="logo">
      <router-link class="name_to_home" to="/">
        <span class="logo_name">Rydde App</span>
      </router-link>
      <i @click="isMenuOpen = !isMenuOpen" class='bx bx-menu menu_icon' v-if="!isMenuOpen"></i>
    </div>

    <div class="sidebar" :class="{ open: isMenuOpen }">
      <div class="logo">
        <span class="logo_name">Rydde App</span>
        <i @click="isMenuOpen = !isMenuOpen" class='bx bx-menu menu_icon'></i>
      </div>

      <div class="sidebar_content">
        <ul class="lists">
          <li class="list">
            <router-link class="nav_link" to="/">
              <i class='bx bx-home sb_icon' ></i>
              <span>Hjem</span>
            </router-link>
          </li>
          <li class="list">
            <router-link class="nav_link" to="/tasks">
              <i class='bx bx-task sb_icon'></i>
              <span>Oppgaver</span>
            </router-link>
          </li>
          <li class="list">
            <router-link class="nav_link" to="/statistics">
              <i class='bx bx-diamond sb_icon' ></i>
              <span>Statistikk</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section v-show="isMenuOpen" class="overlay" v-if="isMenuOpen" @click="isMenuOpen = false"></section>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style scoped>

* {
  z-index: 10;
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
  transition: all 0.5s ease;
  z-index: 5;
}

nav .sidebar.open {
  right: 0;
}

.sidebar .sidebar_content {
  padding: 1rem 0.5rem;
  height: 100vh;
  background-color: white;
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
  background-color: whitesmoke;
  padding: 0.8rem 0.5rem;
  border-radius: 8px;
  width: calc(100% - 1rem);
  font-size: 22px;
  color: #707070;
  transition: 0.5s ease-out;
}

.sb_icon {
  font-size: 28px;
  margin: 0 1rem 0 0;
  color: #707070;
}

.nav_link:hover {
  background-color: rgb(178, 202, 255);
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
}
</style>
