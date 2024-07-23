import { TaskController } from '@/interface/taskController';
import { useUpdateTaskMutation } from '@/service/taskServiceApi';
import { TaskStatus } from '@/utils/enum/taskEnum';
import { convertFormatDate } from '@/utils/format/convertFormatDate';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { TaskItem } from '../taskItem';
import { TaskListProps } from './taskListProps';

export interface DraggedItem {
	index: number;
	listId: keyof TaskController;
}

export const TaskList: FC<TaskListProps> = (props) => {
	const [updatedTask] = useUpdateTaskMutation();

	const {
		name,
		icon,
		background = '#ffffff',
		taskController,
		setTaskController,
		listId
	} = props;

	const [, ref] = useDrop({
		accept: 'ITEM',
		drop: async (draggedItem: DraggedItem) => {
			if (draggedItem.listId !== listId) {
				const getTaskSelect = [...taskController[draggedItem.listId]];
				const destinationList = [...taskController[listId]];
				const [taskDelete] = getTaskSelect.splice(draggedItem.index, 1);

				setTaskController((prevItems) => {
					const updatedItems = { ...prevItems };
					updatedItems[draggedItem.listId] = [...getTaskSelect];
					updatedItems[listId] = [...destinationList, taskDelete];
					return updatedItems;
				});

				await updatedTask({
					id: taskDelete.id as string,
					task: { status: TaskStatus[listId] }
				});
			}
		}
	});

	const moveItem = (fromIndex: number, toIndex: number) => {
		console.log(fromIndex, toIndex);

		setTaskController((prevItems) => {
			const newList = [...prevItems[listId]];
			const [movedItem] = newList.splice(fromIndex, 1);
			newList.splice(toIndex, 0, movedItem);

			const updatedItems = { ...prevItems };
			updatedItems[listId] = newList;

			return updatedItems;
		});
	};

	return (
		<Box component="div" className="me-3 p-4 rounded-md w-3/12" ref={ref as any}>
			<Box
				component="div"
				className={`flex items-center px-4 rounded-md me-10`}
				style={{ background }}
			>
				<Box component={'div'} className="mr-4">
					{icon}
				</Box>
				<Typography> {name}</Typography>
			</Box>

			<Box component="div" className="flex flex-col mt-4 gap-4">
				{taskController[listId].map((task, index) => (
					<TaskItem
						id={task.id as string}
						key={index}
						name={task.title}
						description={task.description}
						dateEnd={convertFormatDate(task.dateEnd)}
						dateStart={convertFormatDate(task.dateStart)}
						email={task.collaborate[0]}
						index={index}
						listId={listId}
						moveItem={moveItem}
					/>
				))}
			</Box>
		</Box>
	);
};
