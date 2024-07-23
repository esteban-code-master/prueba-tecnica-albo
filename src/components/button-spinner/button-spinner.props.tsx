import { ButtonProps } from '@mui/material';

export interface ButtonSpinnerProps extends ButtonProps {
	name: string;
	animation?: boolean;
	[key: string]: any;
}
