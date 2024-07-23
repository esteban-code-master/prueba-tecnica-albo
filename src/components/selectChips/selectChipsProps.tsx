import { SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';

export interface SelectChipsProps {
	values: string[];
	handleChange: (value: SelectChangeEvent<string[]>) => void;
	renderValue: (value: string) => ReactNode;
	children: ReactNode;
}
