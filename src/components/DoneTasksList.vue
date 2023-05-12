<template>
  <div>
    <h2>Oppgaver fullført av bruker {{ userID }}</h2>
    <ul>
      <li v-for="task in doneTasks" :key="task.id">
        {{ task.name }} - {{ task.points }} points
      </li>
    </ul>
    <p>Total Points: {{ totalPoints }}</p>
  </div>
</template>

<script>
import { db } from '../firebase/firebase.js'
import { collection, getDocs, doc, updateDoc, addDoc } from 'firebase/firestore';


export default {
  props: {
    userID: {
      required: true
    }
  },
  setup(props) {
    const doneTasks = ref([])
    const totalPoints = ref(0)

    const fetchDoneTasks = async () => {
      const querySnapshot = await db
        .collection('done')
        .where('userID', '==', props.userID)
        .get()

      doneTasks.value = querySnapshot.docs.map((doc) => doc.data())
    }

    const fetchTotalPoints = async () => {
      const doc = await db.collection('users').doc(props.userID).get()

      if (doc.exists()) {
        totalPoints.value = doc.data().totalPoints
      }
    }

    onMounted(() => {
      fetchDoneTasks()
      fetchTotalPoints()
    })

    return {
      doneTasks: computed(() => doneTasks.value),
      totalPoints: computed(() => totalPoints.value)
    }
  }
}
</script>
