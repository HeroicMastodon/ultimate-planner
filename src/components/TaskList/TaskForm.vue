<template>
    <div class="task-form" v-if="activeTask">
        <div class="task-form-header">
            <button @click="handleClose()">Close</button>
            <button>Delete</button>
        </div>
        <input v-model="activeTask.Name" type="text" name="name" placeholder="Task Name">
        <textarea v-model="activeTask.Details" placeholder="Add Details"></textarea>
        <!-- // TODO: Replace with AFSelect -->
        <select v-model="activeTask.ListName"></select>
        <!-- // TODO: Replace with custom date picker -->
        <input v-model="activeTask.DueDate" type="date">
        <!-- // TODO: Insert Repeat component -->
    </div>
    <div v-else>
        Error Loading Task
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// import AFSelect from '@/components/Shared/AFSelect.vue';
// import Task from '@/models/Task';
import UseTest from '@/store/test';

export default defineComponent({
    name: 'TaskForm',
    components: {
    },
    props: {    
        // task: {
        //     type: Object as PropType<Task>,
        //     required: true
        // }
    },
    setup() {
        const { activeTask, deactivateTask, saveTask } = UseTest();
        return {
            activeTask,
            deactivateTask,
            saveTask
        }
    },  
    methods: {
        async handleClose() {
            if (this.activeTask && this.activeTask.Id) {
                console.log('closing...', this.activeTask.Id)
                await this.saveTask(this.activeTask.Id); 
            }
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