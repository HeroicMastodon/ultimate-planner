<template>
  <div class="list-title-container">
<!--    TODO: make custom select -->
    <h3 class="list-title">
      School
    </h3>
    <i>dropdown icon</i>
  </div>
<!--  TODO: Make task list component and change this component to TaskListContainer-->
  <div class="task-list-container">
    <div class="add-task-container">
      + Add a taks <i>options icon</i>
    </div>
    <ul>
      <li>
        Scripture Study
        <button>Edit</button>
        <i>scheduled icon</i> Today <i>recurring icon</i>
      </li>
      <li>Johnson brothers timberline wood <button>Edit</button></li>
      <li>Shopping <button>Edit</button>
        <ul>
          <li>Pillow<button>Edit</button></li>
          <li>Clean car <button>Edit</button></li>
          <li>Whitening Strip <button>Edit</button></li>
          <li>Wood glue <button>Edit</button></li>
        </ul>
      </li>
      <li>
        steel wool
      </li>
      <li>Oil <button>Edit</button></li>
      <li>3mhisjobs.com <button>Edit</button></li>
      <li>Game <button>Edit</button></li>
      <li>a practical guide to evil <button>Edit</button></li>
    </ul>
  </div>
<!--  TODO: Make CompletedTasksComponent -->
  <div @click="flipCompleted()" class="completed">
    <template v-if="! completedOpen" >
      Completed(89) ^
    </template>
    <template v-else>
      Hi
    </template>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TaskList',
  props: {
  },
  setup() {
    const completedOpen = ref(false);

    function flipCompleted() {
      completedOpen.value = !completedOpen.value;
    }

    return {
      completedOpen,
      flipCompleted
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
}

ul {
  //list-style-type: none;
  //padding: 0;
}

li {
  //display: inline-block;
  //margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
