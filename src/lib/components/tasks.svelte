<script lang="ts">
	import type { Task } from '../../types/task';
import { tasks, removeTask, checkTask } from '../store/store';

let tasks_value: Task[] = [];

tasks.subscribe(value => {

    tasks_value = value;
});

</script>

<div >
    {#each tasks_value as task}
        <div class="flex justify-between items-center p-2 gap-4">
            <div class="flex items-center">
                <input type="checkbox" class="mr-2" on:click={() => checkTask(task)} />
                <span class="{task?.isDone ? 'line-through' : ''}">{task?.name}</span>
            </div>
            <button class="text-red-500" on:click={() => removeTask(task?.id)}>X</button>
        </div>
    {/each}
</div>