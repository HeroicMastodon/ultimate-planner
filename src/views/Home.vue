<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TaskList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from '@/components/TaskList/TaskList.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    TaskList,
  },
});
</script>
