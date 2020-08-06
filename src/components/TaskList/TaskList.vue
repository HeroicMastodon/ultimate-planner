<template>
    <div class="add-task-container">
			+ Add a taks
			<i>options icon</i>
		</div>
		<ul>
			<li v-for="(task, index) in tasks" :key="index">
                <TaskComponent :task="task" />
            </li>
		</ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TaskComponent from './TaskComponent.vue';
import {TestTasks} from '@/models/Task';

export default defineComponent({
    name: 'taskList',
    components: {
        TaskComponent
    },
    props: {    
    },
    setup() {
        const tasks = ref(TestTasks); // here we will setup
        return {
            tasks
        }
    }
})
</script>

<style lang="scss" scoped>

</style>