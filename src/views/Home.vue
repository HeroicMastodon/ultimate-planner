<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <task-list-container />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskListContainer from '@/components/TaskList/TaskListContainer.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    TaskListContainer,
  },
});
</script>
