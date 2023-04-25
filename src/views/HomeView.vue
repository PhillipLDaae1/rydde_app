<script setup>
import {db} from "../firebase/firebase"
import { onMounted } from "vue";
import {
  collection,
  query,
  onSnapshot,

} from "firebase/firestore"

const tasks = collection(db, 'tasks')
const tasksQuery = query(tasks)

onMounted(() => {
  try {
    onSnapshot(tasksQuery, (querySnapshot) => {
      const tasksList = []
      querySnapshot.forEach((doc) => {
        const todo = {
          id: doc.id,
          description: doc.data().description,
          name: doc.data().name,
          points: doc.data().points
        }
        tasksList.push(todo)
      })
      console.log(tasksList)
    })
  } catch (error) {
    console.log('Loggin needed')
  }
})


console.log(tasksQuery)
</script>

<template>
  <main>
    <h1>Velkommen til hjem-skjermen</h1>
  </main>
</template>

