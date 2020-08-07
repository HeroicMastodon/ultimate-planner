<template>
	<div class="add-task-container vert-sec">
		<button>+ Add a task</button>
		<button>
			<i>options icon</i>
		</button>
	</div>
		<div v-for="(task, index) in tasks" :key="index">
			<TaskComponent :task="task"></TaskComponent>
		</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TaskComponent from "./TaskComponent.vue";
import { TestTasks } from "@/models/Task";

export default defineComponent({
	name: "taskList",
	components: {
		TaskComponent,
	},
	props: {},
	setup() {
		const tasks = ref(TestTasks); // here we will setup
		return {
			tasks,
		};
	},
});
</script>

<style lang="scss" scoped>
.add-task-container {
    padding: .5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>