import { Navbar } from "@/components/Navbar";
import { FC, ReactNode } from "react";

interface RootContainerProps {
	children: ReactNode;
	locale?: string;
}

const RootContainer: FC<RootContainerProps> = ({ children, locale }) => {
	return (
		<>
			<Navbar />
			<main className='pt-[--nav-h]'>{children}</main>
		</>
	);
};

export default RootContainer;
