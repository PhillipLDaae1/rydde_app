<template>
  <div>
    <h2>Oppgaver fullført av bruker: {{ username }}</h2>
    <ul>
      <li v-for="task in doneTasks" :key="task.id">
        {{ task.taskName }} - {{ task.points }} poeng
      </li>
    </ul>
    <p>Totale poeng: {{ totalPoints }}</p>
  </div>
</template>

<script>
import { db } from '../firebase/firebase.js';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      userID: parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1"), 10),
      doneTasks: [],
      totalPoints: 0,
      username: ""
    };
  },
  mounted() {
    this.fetchDoneTasks();
    this.fetchTotalPoints();
    this.changeCookieToUsername();
  },
  methods: {
    async fetchDoneTasks() {
  const doneSnapshot = await getDocs(collection(db, 'done'));
  const doneData = doneSnapshot.docs
    .filter(doc => doc.data().userID === this.userID)
    .map(doc => ({
      id: doc.data().taskID,
      date: doc.data().date.toDate(),
    }));

  console.log('doneData:', doneData);

  const tasksSnapshot = await getDocs(collection(db, 'tasks'));
  const tasksData = tasksSnapshot.docs
    .filter(doc => doneData.some(item => item.id === doc.data().id))
    .map(doc => ({
      id: doc.id,
      taskName: doc.data().name,
      points: doc.data().points,
    }));

  console.log('tasksData:', tasksData);

  this.doneTasks = tasksData;
},


    async fetchTotalPoints() {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const userDoc = usersSnapshot.docs.find(doc => doc.data().id === this.userID);
      if (userDoc) {
        this.totalPoints = userDoc.data().totalPoints;
      }
    },

    async changeCookieToUsername() {
      if (this.userID === 1) {
        this.username = 'Phillip'
      } else if (this.userID === 2) {
        this.username = 'Per-Oskar'
      } else {
        this.username = 'Default Name'
      }
    }
  }
};
</script>
