<!--<script>
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase'; // Assuming you have the Firestore instance exported as 'db'

export default {
  data() {
    return {
      doneTasks: [],
    };
  },

  async created() {
    const doneTasksRef = collection(db, 'done');
    const doneTasksSnapshot = await getDocs(doneTasksRef);
    this.doneTasks = doneTasksSnapshot.docs.map((doc) => doc.data());
  },
};
</script>

<template>
  <div>
    <h2>Tasks that are done:</h2>
    <ul>
      <li v-for="task in doneTasks" :key="task.taskID">
        Task ID: {{ task.taskID }} | User ID: {{ task.userID }} | Date: {{ task.date }}
      </li>
    </ul>
  </div>
</template>
-->

<script>
import { db } from '../firebase/firebase.js';
import { collection, getDocs, updateDoc, addDoc, doc} from 'firebase/firestore';

// Assuming you have the user ID and task ID
const userID = 'user123'
const taskID = 'task456'

// Update the user document with the task ID
const userDocRef = doc(db, 'users', userID)
updateDoc(userDocRef, {
  tasks: arrayUnion(taskID)
})


</script>