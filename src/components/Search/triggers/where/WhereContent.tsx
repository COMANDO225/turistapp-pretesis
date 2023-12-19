"use client";

import { FC, useState, useEffect } from "react";
import WhereMap from "./WhereMap";

interface WhereContentProps {}

const WhereContent: FC<WhereContentProps> = ({}) => {
	const [data, setData] = useState({
		type: "FeatureCollection",
		features: [],
	});

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = async () => {
		try {
			setLoading(true);
			const res = await fetch(
				"https://gw.alipayobjects.com/os/basement_prod/d36ad90e-3902-4742-b8a2-d93f7e5dafa2.json"
			);
			const data = await res.json();
			console.log(data);
			setData(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log("fetch data failed", error);
		}
	};

	return (
		<div className='w-full h-full'>
			<div className='w-full h-full'>
				{loading ? (
					<div className=''>cargando</div>
				) : (
					<WhereMap data={data} isLoading={loading} />
				)}
			</div>
		</div>
	);
};

export default WhereContent;
