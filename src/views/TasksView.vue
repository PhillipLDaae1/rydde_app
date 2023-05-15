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

<template>
  <h1>Dine Oppgaver</h1>
  <div>
    <TaskSelector />
    <DoneTasksList />
  </div>
</template>

<style scoped>

</style>
