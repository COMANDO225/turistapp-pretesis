import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className='relative z-10 sm:max-w-[490px] mx-auto mt-10'>
			<div
				className={cn(
					"flex flex-col justify-center py-4 sm:py-6 sm:pb-10 sm:px-8",
					"rounded-medium",
					"border border-solid shadow",
					"sm:bg-background"
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
