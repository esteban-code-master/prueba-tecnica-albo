import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { PageTitleProps } from './pageTitleProps';

export const PageTitle: FC<PageTitleProps> = (props) => {
	const { title, subtitle, children } = props;

	return (
		<Box component="div" className="flex justify-between">
			<Box component="div" className="flex flex-col">
				<Typography className="text-3xl font-medium text-gray-800">
					{title}
				</Typography>
				<Typography className="mt-2 text-sm text-gray-500">{subtitle}</Typography>
			</Box>
			<Box>{children}</Box>
		</Box>
	);
};
