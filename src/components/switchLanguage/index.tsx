'use client';
import { usePathname, useRouter } from '@/setting/translations/i8n';
import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography
} from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export const SwitchLanguage = () => {
	const locale = useLocale();
	const t = useTranslations();
	const router = useRouter();
	const pathname = usePathname();

	const [language, setLanguage] = useState<string>(locale);

	const changesLanguage = (e: SelectChangeEvent) => {
		const selectLanguage = e.target.value as 'en' | 'es';

		console.log('pathname', pathname);
		console.log('selectLanguage', selectLanguage);

		router.replace(pathname, { locale: selectLanguage });
		setLanguage(selectLanguage);
	};

	return (
		<Select
			size="small"
			value={language}
			className="w-[150px]"
			onChange={changesLanguage}
		>
			<MenuItem value={'es'}>
				<Box component="div" className="flex items-center">
					<Box>
						<Image
							className="me-4"
							src="/flag-mexico.webp"
							alt=""
							width={20}
							height={20}
						/>
					</Box>
					<Typography component="span">{t('es')}</Typography>
				</Box>
			</MenuItem>
			<MenuItem value={'en'}>
				<Box component="div" className="flex items-center">
					<Box>
						<Image
							className="me-4"
							src="/flag-usa.png"
							alt=""
							width={20}
							height={20}
						/>
					</Box>
					<Typography component="span">{t('en')}</Typography>
				</Box>
			</MenuItem>
		</Select>
	);
};
