'use client';
import { ProviderStorage } from '@/store/provider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FC, ReactNode } from 'react';

export const GlobalProviderClient: FC<{ children: ReactNode }> = ({
	children
}) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ProviderStorage>{children}</ProviderStorage>
		</LocalizationProvider>
	);
};
