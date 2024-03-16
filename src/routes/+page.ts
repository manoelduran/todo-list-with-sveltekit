import type { PageLoad } from './$types';
import type { Task } from '../types/task';
export const load: PageLoad = () => {
	return {
		tasks: [] as Task[]
	};
};
