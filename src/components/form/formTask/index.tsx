'use client';

import { ButtonSpinner } from '@/components/button-spinner/button-spinner';
import { SelectChips } from '@/components/selectChips';
import { useForm } from '@/hooks/useForm';
import { Task } from '@/interface/task';
import { useGetCollaboratorByTaskQuery } from '@/service/getCollaboratorTask';
import { TaskStatus } from '@/utils/enum/taskEnum';
import {
	Box,
	Chip,
	MenuItem,
	SelectChangeEvent,
	TextField,
	Typography
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslations } from 'next-intl';
import { FC, FormEvent, useEffect } from 'react';
import { FormTaskProps } from './formTaskProps';

const INCREMENT_DAY = 1;

export const FormTask: FC<FormTaskProps> = ({ onSave, loading, task }) => {
	const { data: collaborates } = useGetCollaboratorByTaskQuery('1');
	const { values, onChanges, setValues } = useForm<Task>({
		title: '',
		description: '',
		dateStart: dayjs(),
		dateEnd: dayjs(),
		collaborate: [],
		status: TaskStatus.pending
	});

	useEffect(() => {
		if (task) {
			setValues({
				...task,
				dateStart: dayjs(task.dateStart),
				dateEnd: dayjs(task.dateEnd)
			});
		}
	}, [task]);

	const t = useTranslations();
	const handleChange = (event: SelectChangeEvent<typeof values.collaborate>) => {
		const value = event.target.value;

		setValues({
			...values,
			collaborate: typeof value === 'string' ? value.split(',') : value
		});
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		onSave(values);
		setValues({
			title: '',
			description: '',
			dateStart: dayjs(),
			dateEnd: dayjs(),
			collaborate: [],
			status: TaskStatus.pending
		});
	};

	return (
		<Box
			component="form"
			onSubmit={onSubmit}
			className="flex flex-col gap-5 w-[500px]"
		>
			<Typography>{t('form-add-task-title')}</Typography>

			<TextField
				label={t('form-title')}
				name="title"
				value={values.title}
				onChange={onChanges}
				required
			/>
			<TextField
				label={t('form-description')}
				name="description"
				value={values.description}
				onChange={onChanges}
				multiline={true}
				rows={5}
				required
			/>
			<SelectChips
				values={values.collaborate}
				handleChange={handleChange}
				renderValue={(value) => <Chip key={value} label={value} />}
			>
				{collaborates &&
					collaborates.map((collaborator) => (
						<MenuItem key={collaborator.email} value={collaborator.email}>
							{collaborator.name}
						</MenuItem>
					))}
			</SelectChips>

			<Box component="div" className="flex gap-5 items-center">
				<DatePicker
					label={t('form-date-start')}
					value={values.dateStart}
					onChange={(date) => {
						const dateStart = date as Dayjs;
						const dateEnd = date?.add(INCREMENT_DAY) as Dayjs;

						setValues({ ...values, dateStart, dateEnd });
					}}
				/>
				{t('to')}
				<DatePicker
					label={t('form-date-end')}
					value={values.dateEnd}
					minDate={values.dateStart?.add(INCREMENT_DAY, 'day') ?? undefined}
					onChange={(date) => {
						setValues({ ...values, dateEnd: date as Dayjs });
					}}
				/>
			</Box>

			<ButtonSpinner
				name={t('form-save')}
				type="submit"
				variant="contained"
				animation={loading}
			/>
		</Box>
	);
};
