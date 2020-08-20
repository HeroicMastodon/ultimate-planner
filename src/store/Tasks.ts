import Task from '@/models/Task';
import { ref } from 'vue';

const TASKLIST = ref<Array<Task>>([]);
const SHOULD_SHOW_TASK_EDIT = ref(false);
let activeTask = ref<Task>();
let ids = 1;
export default function useTasks() {
	const addTask = async (name: string) => {
		const task = await new Task(name);
		task.Id = ids.toString();
		ids++;
		TASKLIST.value.push(task);
	};

	const setTaskCompletion = async (task: Task, complete = true) => {
		const response = '';
        task.Completed = complete;
        
        if (task.HasChildren) {
            task.Children.forEach((item) => {
                setTaskCompletion(item, complete);
            })
        }
    };

    const saveTask = async (id: string) => {
        const task = TASKLIST.value.find((item) => {
          return item.Id == id;  
        })
        console.log(`Edit task: ${task}`, task);
    }
    
    const setActiveTask = (task: Task) => {
        activeTask = ref(task);
        SHOULD_SHOW_TASK_EDIT.value = true;
        console.log(activeTask.value)
    }

    const deactivateTask = () => {
        SHOULD_SHOW_TASK_EDIT.value = false;
        activeTask.value = undefined;
    }

    const addSubTask = (parentTask: Task, name: string) => {
        const task = new Task(name);
        task.Id = ids.toString();
        ids++;
        // TASKLIST.value.push(task)
        parentTask.Children.push(task);
    }


	return {
		TASKLIST,
        addTask,
        setTaskCompletion,
        activeTask,
        SHOULD_SHOW_TASK_EDIT,
        setActiveTask,
        deactivateTask,
        saveTask,
        addSubTask
	};
}
