import { Task } from './task';

export interface TaskController {
	pending: Task[];
	inProgress: Task[];
	complete: Task[];
}
