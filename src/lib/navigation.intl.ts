import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "../constants/index";
// "as-needed", "always", "never"
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({ locales, localePrefix });
