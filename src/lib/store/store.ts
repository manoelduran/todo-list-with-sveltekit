import { writable } from 'svelte/store';
import type { Task } from '../../types/task';

export const tasks = writable<Task[]>([]);

export const createTask = (task: Task) => {
	if (task.name === '') return;
	tasks.update((existingTasks) => {
		return [...existingTasks, task];
	});
};
export const checkTask = (task: Task) => {
	if (task.name === '') return;
	tasks.update((existingTasks) => {
		const updatedTasks = existingTasks.map((existingTask) => {
			if (existingTask.id === task.id) {
				return { ...existingTask, isDone: !task.isDone };
			}
			return existingTask;
		});
		return updatedTasks;
	});
};
export const removeTask = (id: number) => {
	tasks.update((existingTasks) => {
		return existingTasks.filter((task) => task.id !== id);
	});
};
