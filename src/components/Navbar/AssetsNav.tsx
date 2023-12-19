"use client";

import { useSearch } from "@/store/searchStore";
import {
	Button,
	ModalBody,
	ModalContent,
	useDisclosure,
} from "@nextui-org/react";
import { Globe } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Modal } from "@nextui-org/react";
import { ModalPreference } from "../Modals";
import { modalLocalidadInterface } from "@/interface/navbar.messages.interface";

interface AssetsNavProps {
	locale?: string;
	botonPresumido?: string;
	modalLocalidad?: modalLocalidadInterface;
}

const AssetsNav: FC<AssetsNavProps> = ({
	locale,
	botonPresumido,
	modalLocalidad,
}) => {
	const searchActive = useSearch((state) => state.searchActive);
	const toggleSearchActive = useSearch((state) => state.setSearchActive);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [selectedTab, setSelectedTab] = useState("region");

	const handleClick = () => {
		onOpen();
	};

	const classnamesModal = {
		closeButton: "hidden",
		base: "shadow-[0_8px_28px_rgba(0,0,0,0.28)] max-w-[510px]",
	};

	// useEffect(() => {
	// 	if (isOpen) {
	// 		// disable scroll body
	// 		console.log("disable scroll body");
	// 		document.body.style.overflow = "hidden";
	// 	} else {
	// 		console.log("enable scroll body");
	// 		// eliminar el atributo "style" del body
	// 		document.body.removeAttribute("style");
	// 	}
	// }, [isOpen]);

	return (
		<>
			<div className='hidden lg:flex lg:items-center'>
				<Button className='rounded-full bg-transparent hover:bg-default font-bold'>
					{botonPresumido}
				</Button>
				<Button
					className='rounded-full bg-transparent hover:bg-default font-bold w-10 h-10 max-w-none min-w-0 p-0'
					onPress={handleClick}
				>
					<Globe size={20} />
				</Button>
			</div>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				classNames={classnamesModal}
				motionProps={{
					variants: {
						enter: {
							y: 0,
							opacity: 1,
							transition: { duration: 0.3, type: "spring" },
						},
						exit: {
							y: 200,
							opacity: 0,
							transition: { duration: 0.15 },
						},
					},
				}}
			>
				<ModalContent className='bg-white'>
					{(onClose) => (
						<>
							<ModalBody className='p-0 bg-white'>
								<ModalPreference
									onClose={onClose}
									modalLocalidad={modalLocalidad}
								/>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default AssetsNav;
