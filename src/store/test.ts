import Task from '@/models/Task';
import { ref } from 'vue';

const TASKLIST = ref<Array<Task>>([]);
const SHOULD_SHOW_TASK_EDIT = ref(false);
const activeTask = ref<Task>();
let ids = 1;
export default function UseTest() {
	const addTask = async (name: string) => {
		const task = await new Task(name);
		task.Id = ids.toString();
		ids++;
		TASKLIST.value.push(task);
	};

	const completeTask = async (id: string, parentId?: string) => {
		const response = '';

		TASKLIST.value.forEach(item => {
            if (item.Id == id) {
                item.Completed = true;
            }

			if (item.Id == parentId) {
				item.Children.forEach(child => {
					if (child.Id == id) {
						child.Completed = true;
					}
				});
			}
		});
    };

    const saveTask = async (id: string) => {
        const task = TASKLIST.value.find((item) => {
          return item.Id == id;  
        })
        console.log(`Edit task: ${task}`, task);
    }
    
    const setActiveTask = (id: string) => {
        TASKLIST.value.forEach(task => {
            if (task.Id == id) activeTask.value = task;
        });
        SHOULD_SHOW_TASK_EDIT.value = true;
        console.log(activeTask.value)
    }

    const deactivateTask = () => {
        SHOULD_SHOW_TASK_EDIT.value = false;
        activeTask.value = undefined;
    }

	return {
		TASKLIST,
        addTask,
        completeTask,
        activeTask,
        SHOULD_SHOW_TASK_EDIT,
        setActiveTask,
        deactivateTask,
        saveTask
	};
}
