<template>
    <div>{{task.Name}} <button>Edit</button> 
        <div v-if="task.DueDate">
            {{task.DueDate}}
        </div>
    </div>
    <ul v-if="task.HasChildren">
        <li v-for="(child, index) in task.Children" :key="index">
            <TaskComponent :task="child"></TaskComponent>
        </li>
    </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Task from '@/models/Task';

export default defineComponent({
    name: 'TaskComponent',
    props: {
        task: {
            type: Object as PropType<Task>,
            required: true
        }
    },
    setup() {
        return {

        }
    }
})
</script>