export interface SnackbarProps {
	message: string;
	duration?: number;
	type: 'success' | 'error' | 'info' | 'warning';
	refer(init: any): void
}