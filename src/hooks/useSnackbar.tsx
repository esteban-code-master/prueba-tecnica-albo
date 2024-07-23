import { SnackbarProps } from '@/components/snackbar/props/snackbar.props';
import { Snackbar } from '@/components/snackbar/snackbar';
import { ReactNode, useState } from 'react';

type hooksSnackBar = Omit<SnackbarProps, 'refer'>;

export const useSnackbar = (): [ReactNode, (props: hooksSnackBar) => void] => {
	const [renderSnackbar, setRenderSnackbar] = useState<ReactNode>();

	const executeSnackbar = (snackbarProps: hooksSnackBar) => {
		setRenderSnackbar(<Snackbar {...snackbarProps} refer={setRenderSnackbar} />);
	};

	return [renderSnackbar, executeSnackbar];
};
