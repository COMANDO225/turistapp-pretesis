"use client";

import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleGIcon from "@/components/icons/GoogleGIcon";
import BackGradient from "@/components/ui/BackGradient";
import { Link, usePathname, useRouter } from "@/lib/navigation.intl";
import { Button } from "@nextui-org/react";
import { Mail } from "lucide-react";
import { FC, useState } from "react";

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = ({}) => {
	const pathname = usePathname();
	const router = useRouter();
	const [stateGradient, setStateGradient] = useState<
		"inactive" | "default" | "success" | "sending" | "error"
	>("default");

	const goToSignIn = () => {
		router.replace(pathname, { scroll: false });
	};
	return (
		<div className='grid w-full gap-12'>
			{/* <BackGradient
				className={cn(
					"hidden sm:block absolute top-0 left-0 ",
					"w-full h-full -z-[1] rounded-medium",
					"before:border-[48px] before:border-transparent before:border-solid before:bg-clip-padding"
				)}
				state={stateGradient}
			/> */}
			<h2 className='text-2xl font-bold'>
				Inicia Sesión para acceder a lo mejor de TuristApp
			</h2>
			<div className='grid gap-4'>
				{/* <Link
					href={{
						pathname: "/auth/register",
					}}
				>
					Registrate
				</Link> */}
				<div className='grid gap-2'>
					<Button
						className='py-6 font-bold'
						startContent={<FacebookIcon size={28} fill='#fff' />}
						color='primary'
					>
						Continuar con Facebook
					</Button>
					<Button
						className='py-6 font-bold bg-[#F0F2F5]'
						startContent={<GoogleGIcon size={26} />}
						variant='bordered'
					>
						Iniciar Sesión con Google
					</Button>
				</div>
				<div className='grid gap-2 grid-cols-[1fr_auto_1fr] items-center'>
					<div className='w-full h-[1px] bg-gray-300'></div>
					<div className='text-[#bebebe]'>o ingresa con</div>
					<div className='w-full h-[1px] bg-gray-300'></div>
				</div>
				<Button
					// isDisabled={stateGradient === "sending"}
					variant='bordered'
					// onClick={() => {
					// 	setStateGradient("sending");
					// }}
					// onPress={goToSignIn}
					href='/auth/login'
					as={Link}
					startContent={<Mail />}
					className='py-6 font-bold'
				>
					Iniciar Sesión con Correo
				</Button>
			</div>
		</div>
	);
};

export default AuthPage;
