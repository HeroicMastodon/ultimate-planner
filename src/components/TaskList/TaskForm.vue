<template>
    <div class="task-form" v-if="activeTask">
        <div class="task-form-header">
            <button @click="handleClose()">Close</button>
            <button @click="handleDelete()">Delete</button>
        </div>
        <input v-model="activeTask.Name" type="text" name="name" placeholder="Task Name">
        <textarea v-model="activeTask.Details" placeholder="Add Details"></textarea>
        <!-- // TODO: Replace with AFSelect -->
        <select v-model="activeTask.ListName"></select>
        <!-- // TODO: Replace with custom date picker -->
        <input v-model="activeTask.DueDate" type="date">
        <!-- // TODO: Insert Repeat component -->
        <template v-if="activeTask.HasChildren">
            <TaskComponent :task="task" v-for="task in activeTask.Children" :key="task.Id"></TaskComponent>
        </template>
        <input @keyup.enter="addSubTask(activeTask, newTaskName)" v-if="isAddingSubtask" v-model="newTaskName"/>
        <button @click="() => isAddingSubtask = true">Add Subtask</button>
    </div>
    <div v-else>
        Error Loading Task
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
// import AFSelect from '@/components/Shared/AFSelect.vue';
// import Task from '@/models/Task';
import TaskComponent from './TaskComponent.vue';
import useTasks from '@/store/Tasks';

export default defineComponent({
    name: 'TaskForm',
    components: {
        TaskComponent
    },
    props: {    
        // task: {
        //     type: Object as PropType<Task>,
        //     required: true
        // }
    },
    setup() {
        const { activeTask, deactivateTask, saveTask, addSubTask, deleteTask } = useTasks();
        const isAddingSubtask = ref(false);
        const newTaskName = ref('');

        return {
            activeTask,
            deactivateTask,
            saveTask,
            isAddingSubtask,
            newTaskName,
            addSubTask,
            deleteTask
        }
    },  
    methods: {
        async handleClose() {
            if (this.activeTask && this.activeTask.Id) {
                console.log('closing...', this.activeTask.Id)
                await this.saveTask(this.activeTask.Id); 
            }
            this.deactivateTask();
        },
        async handleDelete() {
            if (this.activeTask) await this.deleteTask(this.activeTask);
            this.deactivateTask();
        }
    },
})
</script>

<style lang="scss" scoped>
.task-form {
    display: flex;
    flex-direction: column;

    .task-form-header {
        display: flex;
        justify-content: space-between;
    }
}
</style>