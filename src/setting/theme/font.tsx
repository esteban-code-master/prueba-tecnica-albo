import { Poppins } from 'next/font/google';

export const roboto = Poppins({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif']
});
