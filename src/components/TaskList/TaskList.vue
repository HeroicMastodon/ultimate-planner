<template>
	<div class="add-task-container vert-sec">
		<button @click="focusNewTask()">+ Add a task</button>
		<button>
			<i>options icon</i>
		</button>
	</div>
    <div v-if="showNewTask" class="new-task">
        <button @click="handleNewTask()">Add</button>
        <input ref="test" @keyup.enter="handleNewTask()" type="text" v-model="newTaskName" >
    </div>
	<div v-for="(task, index) in tasks" :key="index">
		<TaskComponent :task="task"></TaskComponent>
	</div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import TaskComponent from "./TaskComponent.vue";
import useTasks from '@/store/Tasks';

export default defineComponent({
	name: "taskList",
	components: {
		TaskComponent,
	},
    props: {},
	setup() {
        const { TASKLIST, addTask } = useTasks();
        const newTaskName = ref<string>();
        const showNewTask = ref(false);
        const error = ref<string>();
        
        async function handleNewTask() {
            if(!newTaskName.value) {
                error.value = ''
                return;
            }

            await addTask(newTaskName.value);
            newTaskName.value = '';
        }

		return {
			tasks: TASKLIST,
            addTask,
            newTaskName,
            showNewTask,
            handleNewTask,
		};
    },
    
    methods: {
        async focusNewTask() {
            this.showNewTask = !this.showNewTask;
            await this.$nextTick(() => {
                if (this.showNewTask) {
                    console.log(this.$refs.test);
                    (this.$refs.test as HTMLInputElement).focus();
                }
            })
        }
    },
});
</script>

<style lang="scss" scoped>
.add-task-container {
	padding: 0.5em;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>