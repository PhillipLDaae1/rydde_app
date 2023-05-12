<template>
  <h1>Dine Oppgaver</h1>
  <div>
    <DoneTasksList />
    <TaskSelector />
  </div>
</template>

<script>
import TaskSelector from '../components/TaskSelector.vue';
import DoneTasksList from '../components/DoneTasksList.vue';

export default {
  components: {
    DoneTasksList,
    TaskSelector,
  },
};
</script>

<style scoped>

</style>
