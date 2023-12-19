import {
	Modal as ModalNextUI,
	ModalBody,
	ModalContent,
	ModalVariantProps,
	ModalHeader,
	Button,
} from "@nextui-org/react";
import { X } from "lucide-react";
import { FC } from "react";

interface ModalProps extends ModalVariantProps {
	isOpen: boolean;
	title?: React.ReactNode;
	onOpenChange: (open: boolean) => void;
	children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
	title,
	isOpen,
	onOpenChange,
	children,
	...rest
}) => {
	const classnamesModal = {
		closeButton: "hidden",
		base: "shadow-[0_8px_28px_rgba(0,0,0,0.28)]sm:!max-h-[calc(100%_-_10.5rem)]",
	};

	return (
		<ModalNextUI
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			classNames={classnamesModal}
			size="lg"
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
			{...rest}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="p-0 bg-white block rounded-large">
							<div>
								<div
									ref={null}
									className="overflow-auto roun h-full max-h-[calc(100%_-_2.5rem)]"
								>
									<ModalHeader className="flex justify-between items-center px-3 sm:px-4 lg:px-5 sticky top-0">
										{title ?? <div>Titulo</div>}
										<div className="h-full flex justify-center items-start">
											<Button
												className="p-0 min-w-0 w-8 h-8 bg-transparent hover:bg-[#f0f2f5] rounded-full"
												onPress={onClose}
											>
												<X size={18} />
											</Button>
										</div>
									</ModalHeader>
									{children ?? <div>Contenido</div>}
								</div>
							</div>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</ModalNextUI>
	);
};

export default Modal;
