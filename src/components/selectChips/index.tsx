import {
	Box,
	FormControl,
	InputLabel,
	OutlinedInput,
	Select
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { SelectChipsProps } from './selectChipsProps';

export const SelectChips: FC<SelectChipsProps> = (props) => {
	const { renderValue, children, values, handleChange } = props;

	const t = useTranslations();

	return (
		<FormControl>
			<InputLabel id="demo-multiple-chip-label">
				{t('form-collaborator')}
			</InputLabel>
			<Select
				labelId="demo-multiple-chip-label"
				id="demo-multiple-chip"
				multiple
				value={values}
				onChange={handleChange}
				input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
				renderValue={(selected: string[]) => (
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
						{selected.map(renderValue)}
					</Box>
				)}
				MenuProps={{
					PaperProps: {
						style: {
							maxHeight: 200
						}
					}
				}}
			>
				{children}
			</Select>
		</FormControl>
	);
};
