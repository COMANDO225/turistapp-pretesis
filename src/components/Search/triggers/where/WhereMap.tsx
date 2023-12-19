"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MapGL from "./MapGL";

interface WhereMapProps {
	data: any;
	isLoading: boolean;
}

const WhereMap: FC<WhereMapProps> = ({ data, isLoading }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// si hay data y si no está cargando
		if (data && !isLoading) {
			// un segundo después de que se cargue la data
			setTimeout(() => {
				// mostrar el mapa
				setVisible(true);
			}, 200);
		}
	}, []);

	return visible ? (
		<motion.div
			className='w-full h-full overflow-hidden'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<MapGL />
		</motion.div>
	) : (
		<div>cargando</div>
	);
};

export default WhereMap;
