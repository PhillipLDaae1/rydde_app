<template>
    <div class="container">
      <h2>Marker oppgaver som gjort</h2>
      <select class="task-dropdown" v-model="selectedTask">
        <option v-for="task in tasks" :value="task.id" :key="task.id">{{ task.name }} - {{ task.points }} poeng</option>
      </select>
      <button class="mark-button" @click="markTaskAsDone(selectedTask)">Marker som gjort</button>
    </div>
  </template>
  
  
  
  <script>
  import { db } from '../firebase/firebase.js';
  import { collection, getDocs, updateDoc, addDoc, doc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        tasks: [],
        selectedTask: null,
      };
    },
    mounted() {
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        try {
          const querySnapshot = await getDocs(collection(db, 'tasks'));
          this.tasks = querySnapshot.docs.map((doc) => doc.data());
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      },
      async markTaskAsDone(taskID) {
        const userID = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1"), 10);
  
        try {
          await addDoc(collection(db, 'done'), {
            taskID,
            userID,
            date: new Date(),
          });
          console.log('Task marked as done successfully');
          this.fetchTasks(); // Refresh the task list to update the view
        } catch (error) {
          console.error('Error marking task as done:', error);
        }

        window.location.reload(); 
      },
      async updateTotalPoints() {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const userDoc = usersSnapshot.docs.find(doc => doc.data().id === this.userID);
      if (userDoc) {
        this.totalPoints = userDoc.data().totalPoints;
      }
    },
    },
  };
  </script>


  <style scoped>

  * {
    background-color: rgb(36, 36, 36);
  }
  
  .container {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(46, 46, 46);
    color: #fff;
  }
  
  h2 {
    margin-top: 0;
  }
  
  .task-dropdown {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: none;
    background-color: #363636;
    color: #fff;
  }
  
  .mark-button {
    padding: 8px 16px;
    background-color: rgb(163, 97, 169);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .mark-button:hover {
    background-color: #45a049;
  }
  
  </style>
  