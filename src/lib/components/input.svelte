<script>
	    import Button from '$lib/components/button.svelte';
		import {  createTask } from '../store/store';
	let task = '';
	const handleCreateTask = () => {
		createTask({id: Math.random(), isDone: false, name: task});
		task = ''
	}
</script>

<div class="flex gap-5">
	<input bind:value={task} placeholder="What you need to do?" class="p-2 rounded-lg border border-emerald-500"/>
	<Button props={{onClick: handleCreateTask}}>Create</Button>
</div>