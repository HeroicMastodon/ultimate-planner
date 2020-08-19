<template>
    <div @click="flipCompleted()" class="completed">
		<div style="display: flex;">Completed(89) 
            <div style="padding-left: 1em;">
                <div :class="`drop-icon ${open ? 'open' : ''}`">^</div>
            </div>
        </div>
		<div v-if="open">
            <TaskComponent v-for="(task, index) in tasks" :key="index" :task="task"></TaskComponent>
        </div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TestCompleted } from '@/models/Task';
import TaskComponent from '@/components/TaskList/TaskComponent.vue';

export default defineComponent({
    name: 'CompletedTasks',
    props: {

    },
    components: {
        TaskComponent
    },  
    setup() {
        const open = ref(false);
        const tasks = ref(TestCompleted);

        function flipCompleted() {
            open.value = ! open.value;
        }

        return {
            open,
            flipCompleted,
            tasks
        }
    }
})
</script>

<style lang="scss" scoped>
.drop-icon {

    transition: all .5s;
    &.open {
        transform: rotate(180deg);
    }
}
</style>