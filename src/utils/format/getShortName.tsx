export const GetShortName = (email: string): string => {
	if (!email.includes('@')) {
		throw new Error('Invalid email address');
	}

	const [localPart] = email.split('@');

	const shortName = localPart
		.split('.')
		.map((word) => word.charAt(0).toUpperCase())
		.join('');

	return shortName;
};
