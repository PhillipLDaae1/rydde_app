<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }}
          <button @click="markTaskAsDone(task.id)">Mark as Done</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>

import { db } from '../firebase/firebase.js';
  import { collection, getDocs, updateDoc, addDoc, doc} from 'firebase/firestore';
  
  export default {
    data() {
      return {
        tasks: [],
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
        const userID = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  
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
      },
    },
  };
  </script>
  
  
