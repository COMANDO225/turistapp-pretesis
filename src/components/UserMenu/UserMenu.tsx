"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useDisclosure } from "@nextui-org/react";
import Modal from "../Modals/Modal";
import { Link } from "@/lib/navigation.intl";

interface UserMenuProps {
	botonPresumido?: string;
	userMenu?: {
		userMenuNoAutenticado?: {
			registrarte?: string;
			iniciarSesion?: string;
			ayuda?: string;
		};
		userMenuAutenticado?: {
			perfil?: string;
			reservas?: string;
			cerrarSesion?: string;
		};
	};
}

const UserMenu: FC<UserMenuProps> = ({ botonPresumido, userMenu }) => {
	const [open, setOpen] = useState(false);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<DropdownMenu open={open} onOpenChange={(open) => setOpen(open)}>
				<DropdownMenuTrigger asChild>
					<button
						aria-expanded='false'
						aria-label='Menú de usuario'
						data-state={open ? "open" : "closed"}
						className={cn(
							"hidden sm:block",
							"h-10 w-fit border border-[#ddd] bg-white",
							"rounded-full transition-shadow",
							"shadow-sm hover:shadow-md p-1 pl-3",
							"focus:outline-none",
							"data-[state=open]:shadow-lg"
						)}
					>
						<div className='flex h-full items-center gap-1.5 select-none'>
							<span className='text-[13px] font-bold'>Login</span>
							<div className='relative h-[30px] w-[30px] rounded-full overflow-hidden'>
								<Image
									fill
									src={
										"https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1675441683/facebook/user/default_pic_zswxlq.png"
									}
									alt={"User"}
									draggable={false}
									sizes='30px'
								/>
							</div>
						</div>
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className='w-[238px] p-0 py-2.5 rounded-lg hover:border-[#ddd]'
					align='end'
					forceMount
				>
					<DropdownMenuGroup>
						<DropdownMenuItem asChild>
							<Link
								href={{
									pathname: "/auth/register",
								}}
								className='text-sm py-2.5 px-4 font-bold w-full rounded-none cursor-pointer'
								// onClick={onOpen}
							>
								{userMenu?.userMenuNoAutenticado?.registrarte}
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link
								href='/auth'
								className='text-sm py-2.5 px-4 w-full rounded-none cursor-pointer'
							>
								{userMenu?.userMenuNoAutenticado?.iniciarSesion}
							</Link>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator className='my-1.5' />
					<DropdownMenuItem asChild>
						<button className='text-sm py-2.5 px-4 w-full rounded-none cursor-pointer'>
							{botonPresumido}
						</button>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<button className='text-sm py-2.5 px-4 w-full rounded-none cursor-pointer'>
							{userMenu?.userMenuNoAutenticado?.ayuda}
						</button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			{/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} /> */}
		</>
	);
};

export default UserMenu;
