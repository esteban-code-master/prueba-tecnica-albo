import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModal } from '@/store/slice/modal';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { Box, IconButton, Modal as ModalMaterial } from '@mui/material';
import { FC, ReactNode } from 'react';

export const Modal: FC<{ children: ReactNode }> = (props) => {
	const dispatch = useAppDispatch();
	const modal = useAppSelector((state) => state.modal);

	return (
		<ModalMaterial open={modal.open} className="overflow-y-auto">
			<Box
				component="div"
				className="bg-white rounded-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4"
			>
				<IconButton
					className="absolute right-2 top-1"
					onClick={() => dispatch(setModal({ open: false }))}
				>
					<XMarkIcon className="text-black size-6" />
				</IconButton>
				{props.children}
			</Box>
		</ModalMaterial>
	);
};
