import { TaskList } from '@/components/task/taskList';
import { useTaskFilters } from '@/hooks/useTaskFilters';
import { Task } from '@/interface/task';
import { TaskController } from '@/interface/taskController';
import {
	ClipboardDocumentCheckIcon,
	ClipboardDocumentIcon,
	ClipboardIcon
} from '@heroicons/react/16/solid';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const TaskContainer: FC<{ tasks: Task[] | undefined }> = ({ tasks }) => {
	const t = useTranslations();
	const { pendingTasks, processingTasks, finishedTasks } = useTaskFilters(tasks);

	const [taskController, setTaskController] = useState<TaskController>({
		pending: [],
		inProgress: [],
		complete: []
	});

	useEffect(() => {
		setTaskController({
			pending: pendingTasks,
			inProgress: processingTasks,
			complete: finishedTasks
		});
	}, [pendingTasks, processingTasks, finishedTasks]);

	return (
		<DndProvider backend={HTML5Backend}>
			<Box component="div" className="flex gap-5 flex-1">
				<TaskList
					name={t('card-pending')}
					icon={<ClipboardIcon className="text-black size-4" />}
					background="#e7e7e7"
					taskController={taskController}
					listId="pending"
					setTaskController={setTaskController}
				/>

				<TaskList
					name={t('card-in-progress')}
					icon={<ClipboardDocumentIcon className="text-black size-4" />}
					background="#155bb538"
					taskController={taskController}
					listId="inProgress"
					setTaskController={setTaskController}
				/>

				<TaskList
					name={t('card-complete')}
					icon={<ClipboardDocumentCheckIcon className="text-black size-4" />}
					background="#00e0533b"
					taskController={taskController}
					listId="complete"
					setTaskController={setTaskController}
				/>
			</Box>
		</DndProvider>
	);
};
