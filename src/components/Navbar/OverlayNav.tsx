"use client";

import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearch } from "@/store/searchStore";

interface OverlayNavProps {}

const OverlayNav: FC<OverlayNavProps> = ({}) => {
	const searchActive = useSearch((state) => state.searchActive);
	const toggleSearchActive = useSearch((state) => state.setSearchActive);
	return (
		<AnimatePresence>
			{searchActive && (
				<motion.div
					className='fixed top-0 left-0 z-30 w-full h-full bg-[rgba(0,0,0,0.25)]'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onTap={() => toggleSearchActive(false)}
				/>
			)}
		</AnimatePresence>
	);
};

export default OverlayNav;
