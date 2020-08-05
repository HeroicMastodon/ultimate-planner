<template>
    <div class="add-task-container">
			+ Add a taks
			<i>options icon</i>
		</div>
		<ul>
			<li>
				Scripture Study
				<button>Edit</button>
				<i>scheduled icon</i> Today
				<i>recurring icon</i>
			</li>
			<li>
				Johnson brothers timberline wood
				<button>Edit</button>
			</li>
			<li>
				Shopping
				<button>Edit</button>
				<ul>
					<li>
						Pillow
						<button>Edit</button>
					</li>
					<li>
						Clean car
						<button>Edit</button>
					</li>
					<li>
						Whitening Strip
						<button>Edit</button>
					</li>
					<li>
						Wood glue
						<button>Edit</button>
					</li>
				</ul>
			</li>
			<li>steel wool</li>
			<li>
				Oil
				<button>Edit</button>
			</li>
			<li>
				3mhisjobs.com
				<button>Edit</button>
			</li>
			<li>
				Game
				<button>Edit</button>
			</li>
			<li>
				a practical guide to evil
				<button>Edit</button>
			</li>
		</ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'taskList',
    props: {

    },
    setup() {
        // here we will setup
        return {}
    }
})
</script>

<style lang="scss" scoped>

</style>