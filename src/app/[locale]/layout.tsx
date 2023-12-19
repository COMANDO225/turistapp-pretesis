import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RootContainer from "./RootContainer";
import { ProviderUI } from "@/providers/ProviderUI";
import OverlayNav from "@/components/Navbar/OverlayNav";
import { notFound } from "next/navigation";
import { locales } from "@/constants";
import { unstable_setRequestLocale } from "next-intl/server";

const font = Nunito({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TuristApp",
	description: "Generated by create next app",
};

interface Props {
	children: React.ReactNode;
	params: { locale: string };
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: Props) {
	if (!locales.includes(locale as any)) notFound();

	// Enable static rendering
	unstable_setRequestLocale(locale);
	return (
		<html lang={locale} suppressHydrationWarning>
			<body id='__almeyda' className={font.className}>
				{/* <NextIntlClientProvider locale={locale} messages={messages}> */}
				<ProviderUI>
					<RootContainer locale={locale}>{children}</RootContainer>
					<OverlayNav />
				</ProviderUI>
				{/* </NextIntlClientProvider> */}
			</body>
		</html>
	);
}