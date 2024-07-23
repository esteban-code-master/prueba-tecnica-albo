import { useAppDispatch } from '@/store/hooks';
import { setModal } from '@/store/slice/modal';
import { GetShortName } from '@/utils/format/getShortName';
import { CalendarDateRangeIcon } from '@heroicons/react/16/solid';
import { Box, Tooltip, Typography } from '@mui/material';
import { FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DraggedItem } from '../taskList';
import { TaskMenu } from '../taskMenu';
import { TaskItemProps } from './taskItemProps';

export const TaskItem: FC<TaskItemProps> = (props) => {
	const dispatch = useAppDispatch();
	const {
		id,
		name,
		description,
		dateEnd,
		dateStart,
		email,
		index,
		listId,
		moveItem
	} = props;

	const [, ref] = useDrag({
		type: 'ITEM',
		item: { index, listId }
	});

	const [, drop] = useDrop({
		accept: 'ITEM',
		hover: (draggedItem: DraggedItem) => {
			if (draggedItem.listId === listId && draggedItem.index !== index) {
				moveItem(draggedItem.index, index);
				draggedItem.index = index;
			}
		}
	});

	const handlerEditTask = () => {
		dispatch(setModal({ open: true, action: '@type/edit', id }));
	};

	return (
		<Box
			component="div"
			className="bg-white shadow-sm p-2 rounded-md"
			ref={(node: any) => ref(drop(node)) as any}
			onClick={handlerEditTask}
		>
			<Box component="div" className="flex justify-between">
				<Typography className="font-semibold text-xs">{name}</Typography>
				<TaskMenu id={id} />
			</Box>

			<Typography className="whitespace-pre-wrap">{description}</Typography>

			<Box component="div" className="flex justify-between mt-3">
				<Box component="div" className="flex items-center gap-3">
					<CalendarDateRangeIcon className="size-3 text-black" />

					<Typography className="text-xs">{dateStart}</Typography>
				</Box>

				<Tooltip title={email}>
					<Box
						component="div"
						className="rounded-full bg-red-50 w-[30px] h-[30px] flex items-center justify-center"
					>
						<Typography className="text-[10px] font-bold">
							{GetShortName(email)}
						</Typography>
					</Box>
				</Tooltip>
			</Box>
		</Box>
	);
};
