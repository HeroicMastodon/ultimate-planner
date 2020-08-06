<template>
	<div class="list-title-container">
		<!--    //TODO: make custom select -->
		<h3 class="list-title">School</h3>
		<i>dropdown icon</i>
        <AFSelect></AFSelect>
	</div>
	<div class="task-list-container">
		<TaskList ></TaskList>
	</div>
	<CompletedTasks></CompletedTasks>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TaskList from '@/components/TaskList/TaskList.vue';
import CompletedTasks from '@/components/TaskList/CompletedTasks.vue';
import AFSelect from '@/components/Shared/AFSelect.vue';

export default defineComponent({
    name: "TaskListContainer",
    components: {
        TaskList,
        CompletedTasks,
        AFSelect
    },
	props: {
		items: [] as Array<any>,
	},
	setup() {
		return {
		};
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
