<script>
import firebaseData from "../firebase/firebase.js";
import { db } from '../firebase/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      data: firebaseData,
      users: [],
      tasks: [],
    };
  },
  mounted() {
    this.fetchUsers();
    this.fetchTasks();
  },
  methods: {
    // Henter users data og putter inn i array
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        this.users = querySnapshot.docs.map((doc) => doc.data());
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    // Henter tasks data og putter inn i array
    async fetchTasks() {
      try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        this.tasks = querySnapshot.docs.map((doc) => doc.data());
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    getUserById(userID) {
      return this.users.find(user => user.id === userID);
    },
    getTaskById(taskID) {
      return this.tasks.find(task => task.id === taskID);
    },
    // Endrer formatet til et leselig format
    formatDate(timestamp) {
      const date = timestamp.toDate();
      return date.toLocaleString();
    },
  },
};
</script>

<template>
  <h1>Statistikk</h1>
  <div class="statistics_container">
    <div class="statistics_card">
      <h1 class="statistics_card_title">Brukere - totale poeng</h1>
      <ul>
        <li v-for="user in users" :key="user.id" class="statistics_list_item">
          {{ user.name }} - {{ user.totalPoints }} poeng
        </li>
      </ul>
    </div>

    <div class="statistics_card">
      <h1 class="statistics_card_title">Oppgaver</h1>
      <ul>
        <li v-for="task in tasks" :key="task.id" class="statistics_list_item">
          {{ task.name }} - {{ task.points }} poeng
        </li>
      </ul>
    </div>

    <div class="statistics_card">
      <h1 class="statistics_card_title">Ferdig</h1>
      <ul>
        <li v-for="doneTask in data.done" :key="doneTask.taskID" class="statistics_list_item">
          Bruker: {{ getUserById(doneTask.userID)?.name }} - Oppgave: {{ getTaskById(doneTask.taskID)?.name }} - Dato: {{ formatDate(doneTask.date) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.statistics_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.statistics_card {
  width: 90%;
  max-width: 500px;
  background-color: rgb(36, 36, 36);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.statistics_card_title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
}

.statistics_list_item {
  color: white;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .statistics_container {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .statistics_card {
    width: calc(33.33% - 2rem);
    margin: 1rem;
  }
}
</style>
