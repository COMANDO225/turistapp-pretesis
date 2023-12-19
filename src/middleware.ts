import createMiddleware from "next-intl/middleware";
import { locales } from "./constants";
import { localePrefix } from "./lib/navigation.intl";

export default createMiddleware({
	defaultLocale: "es-PE",
	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	localePrefix,
	// A list of all locales that are supported
	locales,
});

export const config = {
	// Skip all paths that should not be internationalized. This example skips
	// certain folders and all pathnames with a dot (e.g. favicon.ico)
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
