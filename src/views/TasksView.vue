<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in data.users" :key="user.id">
          {{ user.name }}
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
  </template>
  
  <script>
  import firebaseData from "../firebase/firebase.js";
  
  export default {
    data() {
      return {
        data: firebaseData,
      };
    },
  };
  </script>
  
  <style>
  </style>
  