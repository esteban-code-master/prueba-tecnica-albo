import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./setting/translations/i8n";


export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	console.log("cjangfes", locales)
	return {
		messages: {
			...(await import(`../translations/${locale}.json`)).default
		}
	};
});
