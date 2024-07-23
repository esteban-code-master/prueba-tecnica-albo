import { useDeleteTaskMutation } from '@/service/taskServiceApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAction } from '@/store/slice/actions';
import { EllipsisVerticalIcon, TrashIcon } from '@heroicons/react/16/solid';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import * as React from 'react';

export const TaskMenu: React.FC<{ id: string }> = ({ id }) => {
	const [deleteTask] = useDeleteTaskMutation();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const dispatch = useAppDispatch();
	const action = useAppSelector((state) => state.action);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setAnchorEl(null);
	};

	const handlerDeleteTask = async (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.stopPropagation();

		await deleteTask(id);

		dispatch(setAction({ action: '@delete', refresh: !action.refresh }));
	};

	return (
		<div>
			<IconButton aria-label="more" id="long-button" onClick={handleClick}>
				<EllipsisVerticalIcon className="text-black size-3" />
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					'aria-labelledby': 'long-button'
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<Button
					className="normal-case text-black"
					startIcon={<TrashIcon className="text-black size-4 mr-3 " />}
					onClick={handlerDeleteTask}
				>
					Eliminar
				</Button>
			</Menu>
		</div>
	);
};
