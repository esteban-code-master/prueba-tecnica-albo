export interface Response<IData> {
	headers: Header;
	path: string;
	response: IData;
	timestamp: string;
}

export interface Header {
	status: number;
	message?: string;
}
