import dayjs, { Dayjs } from 'dayjs';

export const FORMAT_DATE = 'YYYY-MM-DD';

export const convertFormatDate = (
	date: Dayjs,
	format: string = FORMAT_DATE
) => {
	return dayjs(date).format(format);
};
