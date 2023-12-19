"use client";

import { cn } from "@/lib/utils";
import { useSearch } from "@/store/searchStore";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { FC } from "react";
import { motion } from "framer-motion";
import WhereMenu from "./triggers/where/WhereMenu";
import FechasMenu from "./triggers/fechas/FechasMenu";

interface SearchActiveProps {
	searchBarActive?: {
		dondeQuieresIr: string;
		desde: string;
		desdeLabel: string;
		hasta: string;
		hastaLabel: string;
		cuantos: string;
		cuantosLabel: string;
		buscar: string;
	};
}

const SearchActive: FC<SearchActiveProps> = ({ searchBarActive }) => {
	const searchActive = useSearch((state) => state.searchActive);
	return (
		searchActive && (
			<motion.div
				layoutId='search'
				className='relative z-[99] mt-2'
				transition={{ duration: 0.2 }}
			>
				<div
					className={cn(
						"grid grid-cols-[1fr_auto_1fr] items-center h-16 rounded-full bg-default border",
						"bg-default mb-3"
					)}
				>
					<WhereMenu donde={searchBarActive?.dondeQuieresIr} />
					<FechasMenu
						desdeHasta={{
							desde: searchBarActive?.desde,
							desdeLabel: searchBarActive?.desdeLabel,
							hasta: searchBarActive?.hasta,
							hastaLabel: searchBarActive?.hastaLabel,
						}}
					/>
					{/* cuantos son */}
					<Button
						as={"div"}
						className={cn(
							"bg-transparent w-full flex items-center gap-3 h-full rounded-[4rem] p-0 pr-2",
							"data-[hover=true]:bg-[rgba(0,0,0,0.05)]"
						)}
						disableAnimation
						disableRipple
					>
						<div className='w-full grid justify-start text-start px-5 pl-7 truncate'>
							<div className={cn("text-sm", "font-bold")}>
								<span>{searchBarActive?.cuantos}</span>
							</div>
							<p className='w-full text-gray-600 truncate text-sm'>
								{searchBarActive?.cuantosLabel}
							</p>
						</div>
						<button
							color='primary'
							className='bg-primary text-white items-center px-3 flex rounded-[1.75rem] h-12'
						>
							<span className='hidden mr-2.5'>Buscar</span>
							<SearchIcon
								strokeWidth={2.5}
								className='w-5 min-w-[22px] min-h-[22px] h-5'
							/>
						</button>
					</Button>
				</div>
			</motion.div>
		)
	);
};

export default SearchActive;
