import { Task } from '@/interface/task';

export interface FormTaskProps {
	onSave(data: Task): void;
	loading: boolean;
	task: Task | undefined;
}
