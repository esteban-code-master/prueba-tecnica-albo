import {
	ArrowLeftStartOnRectangleIcon,
	Bars3Icon
} from '@heroicons/react/16/solid';
import { Box, IconButton, Toolbar } from '@mui/material';
import { FC } from 'react';
import { SwitchLanguage } from '../switchLanguage';

export const Navbar: FC<{ toggle: () => void }> = ({ toggle }) => {
	return (
		<Box component="div" className="flex items-center justify-between px-4">
			<Toolbar>
				<IconButton onClick={toggle}>
					<Bars3Icon className='size-6 text-black"' />
				</IconButton>
			</Toolbar>
			<Box component="div" className="flex items-center gap-3">
				<SwitchLanguage />
				<ArrowLeftStartOnRectangleIcon className="size-6 text-black" />
			</Box>
		</Box>
	);
};
