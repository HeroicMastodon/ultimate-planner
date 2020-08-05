<template>
    <div @click="flipCompleted()" class="completed">
		<template v-if="! open">Completed(89) ^</template>
		<template v-else>Hell</template>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'CompletedTasks',
    props: {

    },
    setup() {
        const open = ref(false);

        function flipCompleted() {
            open.value = ! open.value;
        }

        return {
            open,
            flipCompleted
        }
    }
})
</script>

<style lang="scss" scoped>

</style>