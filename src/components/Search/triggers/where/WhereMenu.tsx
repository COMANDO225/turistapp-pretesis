import { Input } from "@nextui-org/react";
import { FC, useEffect, useRef, useState } from "react";
import WhereContent from "./WhereContent";
import { cn } from "@/lib/utils";
import ListSitios from "./ListSitios";

interface WhereMenuProps {
	donde?: string;
}

const WhereMenu: FC<WhereMenuProps> = ({ donde }) => {
	const triggerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [open, setOpen] = useState(true);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		// Enfocar el input cuando se abre el menú
		if (open) {
			inputRef.current?.focus();
		}
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [open]);

	const handleClickOutside = (e: MouseEvent) => {
		if (
			!triggerRef.current?.contains(e.target as Node) &&
			!contentRef.current?.contains(e.target as Node)
		) {
			setOpen(false);
		}
	};

	return (
		<>
			<div
				className={cn(
					"relative h-full rounded-full hover:bg-[rgba(0,0,0,0.05)]",
					"data-[state=open]:bg-white data-[state=open]:shadow-nav-item data-[state=open]:z-10"
				)}
				ref={triggerRef}
				onClick={() => setOpen(true)}
				data-state={open ? "open" : "closed"}
				aria-expanded={open}
				aria-label={donde}
			>
				<Input
					label={donde}
					classNames={{
						base: "bg-transparent h-full",
						inputWrapper:
							"h-full rounded-full pl-5 !bg-transparent",
						label: "font-semibold group-data-[filled-within=true]:!font-bold truncate",
					}}
					ref={inputRef}
				/>
			</div>
			{open && (
				<div
					className='absolute w-full top-full'
					data-side='bottom'
					data-state='open'
					ref={contentRef}
				>
					<div className='bg-white shadow-card-nav w-full min-w-[8rem] rounded-[28px] max-h-[calc(100vh-162px)] overflow-hidden'>
						<div className='w-full grid grid-cols-[290px_1fr]'>
							<div className='w-full relative'>
								<ListSitios />
							</div>
							<div className='w-full relative'>
								<WhereContent />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default WhereMenu;
