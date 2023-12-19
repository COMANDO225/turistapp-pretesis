import { cn } from "@/lib/utils";
import { Avatar, Radio, RadioProps } from "@nextui-org/react";
import { FC } from "react";

interface CustomRadioIdiomaProps extends RadioProps {
	children: RadioProps["children"];
	icon?: React.ReactNode;
	flag: string;
	pais?: string;
}

const CustomRadioIdioma: FC<CustomRadioIdiomaProps> = ({
	children,
	icon,
	pais,
	flag,
	...props
}) => {
	return (
		<Radio
			{...props}
			classNames={{
				base: cn(
					"w-full max-w-none inline-flex m-0 bg-transparent hover:bg-[#f0f2f5] items-center justify-between",
					"flex-row-reverse cursor-pointer rounded-lg gap-4 p-2 px-3 border-2 border-transparent",
					"data-[selected=true]:border-primary"
				),
				labelWrapper: "m-0",
			}}
		>
			<div className='flex items-center gap-3'>
				<Avatar
					alt='España'
					className='w-8 h-8'
					src={`https://flagcdn.com/${flag}.svg`}
				/>
				<div className=''>
					<h2 className='font-semibold'>{children}</h2>
					<p className='opacity-50 mt-[-1px]'>{pais}</p>
				</div>
			</div>
		</Radio>
	);
};

export default CustomRadioIdioma;
