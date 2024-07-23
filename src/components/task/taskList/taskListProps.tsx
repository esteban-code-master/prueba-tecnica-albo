import { TaskController } from '@/interface/taskController';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface TaskListProps {
	name: string;
	background?: string;
	icon?: ReactNode;
	taskController: TaskController;
	setTaskController: Dispatch<SetStateAction<TaskController>>;
	listId: keyof TaskController;
}
