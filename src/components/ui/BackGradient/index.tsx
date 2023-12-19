import { cn } from "@/lib/utils";
import css from "./css/backgradient.module.scss";
import { FC } from "react";

interface BackGradientProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	state?: "sending" | "success" | "error" | "default" | "inactive";
}

const BackGradient: FC<BackGradientProps> = ({
	className,
	state = "inactive",
}) => {
	return (
		<div
			className={cn(
				css.backg,
				"before:content-[''] before:w-full before:h-full before:blur-[36px] before:absolute before:left-0 before:top-0",
				className
			)}
			data-state={state}
		/>
	);
};

export default BackGradient;
