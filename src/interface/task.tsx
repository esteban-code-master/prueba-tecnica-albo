import { TaskStatus } from '@/utils/enum/taskEnum';
import { Dayjs } from 'dayjs';

export interface Task {
	id?: string | undefined;
	title: string;
	description: string;
	dateStart: Dayjs;
	dateEnd: Dayjs;
	collaborate: string[];
	status?: TaskStatus;
}
