<template>
	<div class="task-container">
		<div class="check-circle">
			<div class="check-left"></div>
			<div class="check-right"></div>
		</div>
		<div class="task">
			<div class="task-name-container">
				<div class="task-name" v-text="task.Name" contenteditable></div>
				<button class="edit-btn">Edit</button>
			</div>
			<div v-if="task.DueDate">{{task.DueDate}}</div>
		</div>
	</div>
	<template v-if="task.HasChildren">
		<div class="indent" v-for="(child, index) in task.Children" :key="index">
			<TaskComponent :task="child"></TaskComponent>
		</div>
	</template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Task from "@/models/Task";

export default defineComponent({
	name: "TaskComponent",
	props: {
		task: {
			type: Object as PropType<Task>,
			required: true,
		},
	},
	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
.task-container {
	display: flex;
	align-items: center;
	width: 100%;
    &:hover {
        // border: solid 1px gray;
        box-shadow: 0 1px 2px gray;
    }

	--boxval: 1em;

	.check-circle {
		width: var(--boxval);
		height: var(--boxval);
		border-radius: 100%;
		border: solid gray 2px;
		margin: 0.5em;

        .check-left, .check-right {
            width: .75em;
            height: .1em;
            background-color: blue;
            transform: rotate(45deg) translate(0em, .55em);
            display: none;

        }

        .check-right {
            width: 1.5em;
            transform: rotate(-45deg);
        }

        &:hover {
            border:none;
            cursor: pointer;
            .check-left, .check-right {
                display: inherit;

                .check-left, .check-right {
                    display: inherit;
                }
            }
        }
	}

	.task {
		padding: 0.5em 0.5em 0.5em 0;
		width: calc(100% - var(--boxval));
        border-bottom: 1px gray solid;

        .task-name-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
	}
}
</style>