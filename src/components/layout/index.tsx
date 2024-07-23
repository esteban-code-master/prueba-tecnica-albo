'use client';

import {
	AppBar,
	Box,
	CssBaseline,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Typography
} from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode, useState } from 'react';
import { Navbar } from '../navbar';

const drawerWidth = 240;

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(true);
	const toggleDrawer = (open: boolean) => {
		setOpen(open);
	};

	return (
		<div className="flex">
			<CssBaseline />
			<AppBar
				position="fixed"
				className={`transition-all duration-300 ${
					open ? `ml-${drawerWidth}px w-[calc(100%-240px)]` : 'ml-0 w-full'
				}`}
			>
				<Navbar toggle={() => toggleDrawer(!open)} />
			</AppBar>

			<Drawer
				open={open}
				variant="persistent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box'
					}
				}}
			>
				<Toolbar className="">
					<Box component="div" className="flex items-center gap-4">
						<Image src={'/agenda.svg'} alt="" width={30} height={20} />
						<Typography>Albo Agenda</Typography>
					</Box>
				</Toolbar>
				<div
					className="w-64"
					role="presentation"
					onClick={() => toggleDrawer(false)}
					onKeyDown={() => toggleDrawer(false)}
				>
					<List>
						{['Home', 'About', 'Contact'].map((text) => (
							<ListItem key={text}>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
			<main className="flex-grow p-8 mt-16 w-full">{children}</main>
		</div>
	);
};
