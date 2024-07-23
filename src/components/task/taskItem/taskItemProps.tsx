import { TaskController } from '@/interface/taskController';

export interface TaskItemProps {
	id: string;
	name: string;
	description?: string;
	dateStart: string;
	dateEnd: string;
	email: string;
	index: number;
	listId: keyof TaskController;
	moveItem: any;
}
