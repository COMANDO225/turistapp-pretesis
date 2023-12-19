"use client";

import { FC } from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useSearch } from "@/store/searchStore";

interface SearchProps {
	searchBarInactive?: {
		cualquierPartedePeru: string;
		cualquierFecha: string;
		agregarTuristas: string;
	};
}

const Search: FC<SearchProps> = ({ searchBarInactive }) => {
	const searchActive = useSearch((state) => state.searchActive);
	const toggleSearchActive = useSearch((state) => state.setSearchActive);
	return (
		<AnimatePresence>
			{!searchActive && (
				<motion.div
					className={cn(
						"h-12 border w-full bg-white",
						"rounded-full",
						"shadow-sm hover:shadow-md",
						"transition-shadow"
					)}
					layoutId='search'
					onTap={() => toggleSearchActive(true)}
					transition={{ duration: 0.12 }}
				>
					<div className='h-full flex flex-row items-center justify-between'>
						<button className='h-full text-sm px-6 font-bold truncate'>
							{searchBarInactive?.cualquierPartedePeru}
						</button>
						<button
							className={cn(
								"hidden sm:block h-full",
								"text-sm text-center font-bold"
							)}
						>
							<span className='border-x-[1px] px-6 truncate'>
								{searchBarInactive?.cualquierFecha}
							</span>
						</button>
						<button className='flex h-full items-center gap-3 text-sm pl-6 pr-2.5 text-gray-600'>
							<div className='hidden md:block truncate'>
								{searchBarInactive?.agregarTuristas}
							</div>
							<div className='bg-primary rounded-full text-white relative w-8 h-8 p-2'>
								<SearchIcon
									strokeWidth={2.5}
									width={"100%"}
									height={"100%"}
								/>
							</div>
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Search;
