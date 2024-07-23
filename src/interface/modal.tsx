export interface Modal {
	open: boolean;
	action: '@type/edit' | '@type/add';
	id: string | null;
}
