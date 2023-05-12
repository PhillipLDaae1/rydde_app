<script>
import firebaseData from "../firebase/firebase.js";
import TaskSelector from '../components/TaskSelector.vue';

export default {
  data() {
    return {
      data: firebaseData,
    };
  },
  components: {
    TaskSelector,
  },
};
</script>

<template>
    <h1>Statistikk</h1>

    <div class="container">
    <h1>Brukere - totale poeng</h1>
    <ul class="user-list">
      <li v-for="user in data.users" :key="user.id">
        {{ user.name }} - {{ user.totalPoints }} poeng
      </li>
    </ul>

    <h1>Oppgaver</h1>
    <ul class="task-list">
      <li v-for="task in data.tasks" :key="task.id">
        {{ task.name }} - {{ task.points }} poeng
      </li>
    </ul>

    <h1>Ferdig</h1>
    <ul class="done-list">
      <li v-for="doneTask in data.done" :key="doneTask.taskID">
        Task ID: {{ doneTask.taskID }} - User ID: {{ doneTask.userID }} - Date: {{ doneTask.date }}
      </li>
    </ul>
  </div>
</template>

<style scoped>


.container {
  padding: 20px;
  background-color: rgb(46, 46, 46);
  color: #fff;
  width: 500px;
  
}

h1 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 5px;
}

.user-list li {
  color: #a3d39c;
}

.task-list li {
  color: #7fd9ca;
}

.done-list li {
  color: #f3a3a3;
}
</style>
