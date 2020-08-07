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
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    // background-color: #333333;
}

#app {
    // background-color: #333333;
}

.vert-sec {
    border-bottom: 1px gray solid;
}

.indent {
    padding-left: 2em;
}
</style>
