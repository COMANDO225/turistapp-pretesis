"use client";

import { Input, InputProps } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";
import { FC, useState } from "react";

interface inputPasswordProps extends InputProps {}

const InputPassword: FC<inputPasswordProps> = (props) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<Input
			type={isVisible ? "text" : "password"}
			endContent={
				<button
					tabIndex={-1}
					className='focus:outline-none'
					type='button'
					onClick={toggleVisibility}
				>
					{isVisible ? (
						<EyeOff opacity={0.5} className='pointer-events-none' />
					) : (
						<Eye opacity={0.5} className='pointer-events-none' />
					)}
				</button>
			}
			{...props}
		/>
	);
};

export default InputPassword;
