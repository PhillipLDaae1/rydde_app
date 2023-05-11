<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in data.users" :key="user.id">
          {{ user.name }} - {{ user.totalPoints }} points
        </li>
      </ul>
  
      <h1>Tasks</h1>
      <ul>
        <li v-for="task in data.tasks" :key="task.id">
          {{ task.name }} - {{ task.points }} points
        </li>
      </ul>
  
      <h1>Done</h1>
      <ul>
        <li v-for="doneTask in data.done" :key="doneTask.taskID">
          Task ID: {{ doneTask.taskID }} - User ID: {{ doneTask.userID }} - Date: {{ doneTask.date }}
        </li>
      </ul>
    </div>
    <div>
      <TaskSelector />
    </div>
  </template>
  
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
    }
  };
  </script>
  
  <style>
  </style>
  