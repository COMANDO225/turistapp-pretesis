"use client";

import { FC } from "react";
import Map from "react-map-gl";

interface MapGLProps {}

const MapGL: FC<MapGLProps> = ({}) => {
	return (
		<Map
			mapboxAccessToken={process.env.NEXT_PUBLIC_API_MAPBOX}
			initialViewState={{
				// coords de Perú
				latitude: -9.189967,
				longitude: -75.015152,
				zoom: 4,
			}}
			dragRotate={false}
			minZoom={4.24}
			maxZoom={12}
			attributionControl={false}
			style={{ width: "100%", height: "100%" }}
			styleDiffing
			mapStyle={"mapbox://styles/mapbox/streets-v12"}
		/>
	);
};

export default MapGL;
