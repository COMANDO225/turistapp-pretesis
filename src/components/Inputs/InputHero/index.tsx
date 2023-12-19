"use client";

import { FC, HTMLProps, InputHTMLAttributes, useRef } from "react";
import css from "./css/inputHero.module.scss";
import { cn } from "@/lib/utils";
import { volverSku } from "@/lib/volverSku";

interface InputHeroProps extends InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	error?: string | boolean;
	label: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	props?: HTMLProps<HTMLInputElement>;
	clxerror?: string;
}

const InputHero: FC<InputHeroProps> = ({
	error,
	label,
	type,
	id,
	clxerror,
	...props
}) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<div className={css.wrapper}>
			<div className={css.container} data-error={error ? true : false}>
				<input
					type={type}
					id={volverSku(id || label)}
					className={css.input}
					placeholder='Email'
					{...props}
					ref={ref}
				/>
				<label className={css.label} htmlFor={volverSku(id || label)}>
					{id || label}
				</label>
				<div
					aria-hidden='true'
					className={css.bg}
					data-error={error ? true : false}
				/>
			</div>
			{error && (
				<span
					className={cn(
						"text-[rgb(239,68,68)] text-xs font-medium dark:font-normal text-start ml-0",
						clxerror
					)}
				>
					{error}
				</span>
			)}
		</div>
	);
};

export default InputHero;
