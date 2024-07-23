'use client';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { FunctionComponent } from 'react';
import { ButtonSpinnerProps } from './button-spinner.props';

export const ButtonSpinner: FunctionComponent<ButtonSpinnerProps> = (props) => {
	const { animation, ...restProps } = props;

	return (
		<>
			<Button
				className="text-white"
				{...restProps}
				endIcon={
					animation ? (
						<CircularProgress
							sx={{
								color: 'white',
								marginLeft: '10px'
							}}
							size={20}
						/>
					) : null
				}
			>
				<div>{props.name}</div>
			</Button>
		</>
	);
};
