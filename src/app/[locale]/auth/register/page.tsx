import { Link } from "@/lib/navigation.intl";
import { FC } from "react";
import FormRegister from "./FormRegister";

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = ({}) => {
	return (
		<div className='relative grid gap-5'>
			<FormRegister />
			<div className='grid gap-2 grid-cols-[1fr_auto_1fr] items-center'>
				<div className='w-full h-[1px] bg-gray-300'></div>
				<div className='text-[#bebebe]'>¿Ya tienes una cuenta?</div>
				<div className='w-full h-[1px] bg-gray-300'></div>
			</div>
			<div className=''>
				<div className='text-center max-w-[320px] mx-auto'>
					<Link
						href={{
							pathname: "/auth/login",
						}}
						className='text-primary font-bold hover:underline'
					>
						Inicia Sesión
					</Link>{" "}
					Y descubre lo mejor del Perú
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
