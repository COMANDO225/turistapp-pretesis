"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

interface ShadowLineProps {}

const ShadowLine: FC<ShadowLineProps> = ({}) => {
	// crear un estado para saber si el menu esta activo o no, guardar los valores en el localstorage para que no se pierdan al recargar la pagina, recordar que es un componente de servidor de nextjs
	const [active, setActive] = useState(false);
	useEffect(() => {
		const active = localStorage.getItem("active");
		if (active) {
			setActive(JSON.parse(active));
		}

		const handleScroll = () => {
			if (window.scrollY > 38) {
				setActive(true);
			} else {
				setActive(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		localStorage.setItem("active", JSON.stringify(active));

		return () => {
			localStorage.removeItem("active");
		};
	}, [active]);

	return (
		<div
			aria-hidden
			className={cn(
				"w-full h-full",
				"absolute top-0 left-0 z-1",
				"bg-white data-[state-glass=blur]:bg-[rgba(254,255,255,0.57)]",
				" data-[state-glass=blur]:shadow-[0px_0px_6px_rgba(0,0,0,0.16)]",
				"data-[state-glass=blur]:backdrop-blur-[12px] data-[state-glass=blur]:backdrop-saturate-[1.55]"
			)}
			data-state-glass={active ? "blur" : "solid"}
		/>
	);
};

export default ShadowLine;
