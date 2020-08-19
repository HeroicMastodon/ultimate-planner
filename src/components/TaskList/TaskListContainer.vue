<template>
	<template v-if="shouldShowTaskEdit">
        <TaskForm task="activeTask"></TaskForm>
    </template>
    <template v-else>
        <div class="title">Tasks</div>
        <div class="list-title-container vert-sec">
            <!--    //TODO: make custom select -->
            <h3 class="list-title">School</h3>
            <i>dropdown icon</i>
            <AFSelect></AFSelect>
        </div>
        <div class="task-list-container vert-sec">
            <TaskList></TaskList>
        </div>
        <CompletedTasks></CompletedTasks>
    </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TaskList from "@/components/TaskList/TaskList.vue";
import CompletedTasks from "@/components/TaskList/CompletedTasks.vue";
import AFSelect from "@/components/Shared/AFSelect.vue";
import UseTest from "@/store/test";
import TaskForm from "./TaskForm.vue";

export default defineComponent({
	name: "TaskListContainer",
	components: {
		TaskList,
		CompletedTasks,
        AFSelect,
        TaskForm
	},
	props: {
		items: [] as Array<any>,
	},
	setup() {
		const { SHOULD_SHOW_TASK_EDIT, activeTask } = UseTest();
		return { 
            shouldShowTaskEdit: SHOULD_SHOW_TASK_EDIT,
            activeTask
		};
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
}
</style>
