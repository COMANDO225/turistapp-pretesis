import { FC } from "react";
import FormLogin from "./FormLogin";
import { Link } from "@/lib/navigation.intl";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
	return (
		<div className='relative grid gap-5'>
			<FormLogin />
			<div className='grid gap-2 grid-cols-[1fr_auto_1fr] items-center'>
				<div className='w-full h-[1px] bg-gray-300'></div>
				<div className='text-[#bebebe]'>¿Aún no eres miembro?</div>
				<div className='w-full h-[1px] bg-gray-300'></div>
			</div>
			<div className=''>
				<div className='text-center max-w-[320px] mx-auto'>
					<Link
						href={{
							pathname: "/auth/register",
						}}
						className='text-primary font-bold hover:underline'
					>
						Únete a TuristApp
					</Link>{" "}
					Y descubre lo mejor del Perú
				</div>
			</div>
		</div>
	);
};

export default Login;
