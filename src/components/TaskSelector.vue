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
      // Henter tasks
      async fetchTasks() {
        try {
          const querySnapshot = await getDocs(collection(db, 'tasks'));
          this.tasks = querySnapshot.docs.map((doc) => doc.data());
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      },
      // Merker oppgaver som gjort
      async markTaskAsDone(taskID) {
        const userID = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)user\s*\=\s*([^;]*).*$)|^.*$/, "$1"), 10);
    
        try {
          const doneTask = {
            taskID,
            userID,
            date: new Date(),
          };

          // Legg til oppgaven til "done" collection
          await addDoc(collection(db, 'done'), doneTask);
          console.log('Task marked as done successfully');

          // Oppdater totalPoints til brukeren
          const usersSnapshot = await getDocs(collection(db, 'users'));
          const userDoc = usersSnapshot.docs.find(doc => doc.data().id === userID);

          if (userDoc) {
            const userRef = doc(db, 'users', userDoc.id);
            const userPoints = userDoc.data().totalPoints || 0;
            const taskPoints = this.tasks.find(task => task.id === taskID)?.points || 0;
            const updatedPoints = userPoints + taskPoints;

            // Oppdater totalPoints i brukeren sitt dokument i "users"
            await updateDoc(userRef, {
              totalPoints: updatedPoints,
            });

            console.log('Total points updated successfully');
          }

          this.fetchTasks(); // Refresh task listen for å oppdatere
        } catch (error) {
          console.error('Error marking task as done:', error);
        }

        window.location.reload();
      },
    },
  };
</script>

<template>
  <div class="container">
    <h2>Marker oppgaver som gjort</h2>
    <select class="task_dropdown" v-model="selectedTask">
      <option v-for="task in tasks" :value="task.id" :key="task.id">{{ task.name }} - {{ task.points }} poeng</option>
    </select>
    <button class="mark_button" @click="markTaskAsDone(selectedTask)">Marker som gjort</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(46, 46, 46);
  color: #fff;
}

h2 {
  margin-top: 0;
}

.task_dropdown {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  background-color: #363636;
  color: #fff;
}

.mark_button {
  padding: 8px 16px;
  background-color: rgb(163, 97, 169);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.mark_button:hover {
  background-color: rgba(163, 97, 169, 0.8);
}
</style>
