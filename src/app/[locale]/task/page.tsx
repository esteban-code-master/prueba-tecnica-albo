'use client';

import { FormTask } from '@/components/form/formTask';
import { Modal } from '@/components/modal';
import { PageTitle } from '@/components/pageTitle';
import { TaskContainer } from '@/containers/taskContainer';
import { useSnackbar } from '@/hooks/useSnackbar';
import { Task } from '@/interface/task';
import {
	useAddTaskMutation,
	useFindAllTaskQuery,
	useFindByIdTaskQuery,
	useUpdateTaskMutation
} from '@/service/taskServiceApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModal } from '@/store/slice/modal';
import { PlusIcon } from '@heroicons/react/16/solid';
import { Box, Button } from '@mui/material';
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

const PageTask: NextPage = () => {
	const [addTask, { isLoading }] = useAddTaskMutation();
	const [updateTask] = useUpdateTaskMutation();
	const [renderSnackbar, executeSnackbar] = useSnackbar();
	const { data, refetch } = useFindAllTaskQuery();
	const modal = useAppSelector((state) => state.modal);
	const action = useAppSelector((state) => state.action);
	const dispatch = useAppDispatch();
	const t = useTranslations();

	const { data: task } = useFindByIdTaskQuery(modal.id!, { skip: !modal.id });

	const handlerSaveTask = async (task: Task) => {
		try {
			if (!task.id) {
				await saveNewTask(task);

				return;
			}

			await saveModifyTask(task);
		} catch {
			executeSnackbar({
				message: t('message-success'),
				type: 'error'
			});
		}
	};

	const saveNewTask = async (task: Task) => {
		await addTask(task);

		refetch();
		dispatch(setModal({ open: false }));
		executeSnackbar({
			message: t('message-success'),
			type: 'success'
		});
	};

	const saveModifyTask = async (task: Task) => {
		const taskId = task.id;
		delete task.id;
		delete task.status;

		await updateTask({ id: taskId as string, task });
		refetch();
		dispatch(setModal({ open: false }));
		executeSnackbar({
			message: t('message-error'),
			type: 'success'
		});
	};

	useEffect(() => {
		if (action.action === '@delete') {
			refetch();
			executeSnackbar({
				message: t('message-delete'),
				type: 'success'
			});
		}
	}, [action.refresh]);

	return (
		<Box component="div" className="w-full">
			<PageTitle title={t('title')} subtitle={t('subtitle')}>
				<Button
					variant="contained"
					startIcon={<PlusIcon className="text-white size-4 me-4" />}
					className="normal-case"
					onClick={() => dispatch(setModal({ open: true }))}
				>
					{t('create-task')}
				</Button>
			</PageTitle>

			<Box component="div" className="mt-10 w-full">
				<TaskContainer tasks={data} />
			</Box>

			<Modal>
				<FormTask onSave={handlerSaveTask} loading={isLoading} task={task} />
			</Modal>

			{renderSnackbar}
		</Box>
	);
};

export default PageTask;
