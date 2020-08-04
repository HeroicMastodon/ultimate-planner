<template>
  <div id="app">
    <TaskList></TaskList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from "@/components/TaskList/TaskList.vue";

export default defineComponent({
  name: 'App',
  components: {
    TaskList
  }
});
</script>

<style lang="scss">
#app {

}
</style>
