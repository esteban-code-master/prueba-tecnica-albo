import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./setting/translations/i8n";


export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix,
  localeDetection: false
});

export const config = {
  matcher: ["/", "/(es|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
