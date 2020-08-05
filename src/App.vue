<template>
  <div id="app">
    <task-list-container></task-list-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskListContainer from "@/components/TaskList/TaskListContainer.vue";

export default defineComponent({
  name: 'App',
  components: {
    TaskListContainer
  }
});
</script>

<style lang="scss">
#app {

}
</style>
