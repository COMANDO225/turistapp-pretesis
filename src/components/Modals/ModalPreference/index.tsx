"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tab, Tabs } from "@nextui-org/react";
import { FC, useEffect, useRef, useState } from "react";
import IdiomaRegionPanel from "./IdiomaRegionPanel";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { cn } from "@/lib/utils";
import { modalLocalidadInterface } from "@/interface/navbar.messages.interface";
import { useRouter, usePathname } from "@/lib/navigation.intl";

interface ModalPreferenceProps {
	onClose: () => void;
	modalLocalidad?: modalLocalidadInterface;
}

const ModalPreference: FC<ModalPreferenceProps> = ({
	onClose,
	modalLocalidad,
}) => {
	const router = useRouter();
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const modalScrollRef = useRef<HTMLDivElement>(null);

	// handle scroll
	useEffect(() => {
		const handleScroll = () => {
			if (modalScrollRef.current) {
				const scrollPosition = modalScrollRef.current.scrollTop;

				if (scrollPosition > 40) {
					setIsScrolled(true);
					// console.log("scroll");
				} else {
					setIsScrolled(false);
					// console.log("no scroll");
				}
			}
		};

		let scrollRef = modalScrollRef.current;

		if (scrollRef) {
			scrollRef.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (scrollRef) {
				scrollRef.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	const changeLanguageAndClose = async (language: string) => {
		router.replace(pathname, { locale: language, scroll: false });
		onClose();
	};

	return (
		<>
			<div
				ref={modalScrollRef}
				className='overflow-auto h-[490px] bg-white'
			>
				<Tabs
					size='lg'
					fullWidth
					variant='light'
					className='!sticky top-0 z-[20]'
					classNames={{
						base: "gap-0",
						tabList: cn(
							"bg-white !rounded-none py-3 px-2 sm:px-3.5 border-opacity-0",
							isScrolled &&
								"bg-[rgba(255,255,255,0.35)] backdrop-blur-[8px] backdrop-contrast-125 back border-b-[1px] border-opacity-100"
						),
						tab: cn(
							"data-[hover-unselected=true]:bg-[rgba(0,0,0,0.05)]",
							"data-[hover-unselected=true]:opacity-100",
							isScrolled &&
								"data-[hover-unselected=true]:bg-[rgba(0,0,0,0.1)]"
						),
						tabContent: "group-data-[selected=true]:font-bold",
						panel: "p-0",
					}}
					disabledKeys={["moneda", "configuracion"]}
				>
					<Tab key='region' title={modalLocalidad?.idiomaRegion?.tab}>
						<ModalContent>
							<IdiomaRegionPanel
								changeLanguageAndClose={changeLanguageAndClose}
								idiomaRegion={modalLocalidad?.idiomaRegion}
							/>
						</ModalContent>
					</Tab>
					<Tab key='moneda' title={modalLocalidad?.moneda?.tab} />
					<Tab
						key='configuracion'
						title={modalLocalidad?.configuracion?.tab}
					/>
				</Tabs>
			</div>
		</>
	);
};

interface ModalContentProps {
	children: React.ReactNode;
}

const ModalContent: FC<ModalContentProps> = ({ children }) => {
	return (
		<div className='w-full h-max p-3 sm:p-4 md:px-5 !pb-0'>
			{children}
			<div className='text-center py-2 md:py-3'>
				<span className='text-center text-xs opacity-50'>
					by Almeyda
				</span>
			</div>
		</div>
	);
};

export default ModalPreference;
