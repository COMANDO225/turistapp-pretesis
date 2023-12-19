"use client";
import { Link, usePathname, useRouter } from "@/lib/navigation.intl";
import { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ChevronLeft, X, XCircle } from "lucide-react";
import InputPassword from "@/components/Inputs/InputPassword";
import { cn } from "@/lib/utils";
import { Button, Input, Progress } from "@nextui-org/react";

interface FormRegisterProps {}

type seguridadType = {
	message: string;
	background: string;
	color: string;
};

const FormRegister: FC<FormRegisterProps> = ({}) => {
	const router = useRouter();
	const pathname = usePathname();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [passwordSecurity, setPasswordSecurity] = useState<number>(0);
	const [dataSegurity, setDataSecurity] = useState<seguridadType>({
		message: "",
		background: "!bg-[hsl(var(--nextui-danger))]",
		color: "text-[hsl(var(--nextui-danger))]",
	});

	const initialValues = {
		email: "",
		password: "",
		repeatPassword: "",
		name: "",
		apellidos: "",
	};

	const validationSchema = Yup.object({
		nombre: Yup.string()
			.trim()
			.notOneOf([""])
			.required("El nombre es obligatorio")
			.min(2, "El nombre debe tener al menos 2 caracteres")
			.matches(/^[a-zA-Z ]*$/, "El nombre no debe tener números"),
		apellidos: Yup.string()
			.trim()
			.notOneOf([""])
			.required("El apellido es obligatorio")
			.min(2, "El apellido debe tener al menos 2 caracteres")
			.matches(/^[a-zA-Z ]*$/, "El apellido no debe tener números"),
		email: Yup.string()
			.trim()
			.notOneOf([""])
			.email("El correo electrónico no es válido")
			.required("El correo electrónico es obligatorio"),
		password: Yup.string()
			.trim()
			.notOneOf([""])
			.min(8, "La contraseña debe tener al menos 8 caracteres")
			.max(24, "La contraseña debe tener como máximo 24 caracteres")
			.matches(
				/^(?=.*[A-Z]).*$/,
				"La contraseña debe tener al menos una letra en mayúscula"
			)
			.matches(
				/^(?=.*[a-z]).*$/,
				"La contraseña debe tener al menos una letra en minúscula"
			)
			.required("La contraseña es obligatoria"),
		repeatPassword: Yup.string()
			.trim()
			.notOneOf([""])
			.oneOf([Yup.ref("password"), ""], "Las contraseñas no coinciden")
			.required("Debes repetir la contraseña"),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			console.log({
				name: `${values.name} ${values.apellidos}`,
				email: values.email,
				password: values.password,
			});
			try {
				setLoading(true);
				const res = await fetch("/api/auth/register/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: `${values.name} ${values.apellidos}`,
						email: values.email,
						password: values.password,
					}),
				});
				const data = await res.json();
				console.log(data);
				if (data?.error) {
					setError(data.error);
					setLoading(false);
					return;
				}

				if (data?.ok) {
					setError("");
					router.replace(pathname, { scroll: false });
				}
			} catch (error) {
				console.log(error);
				// if (error instanceof AxiosError) {
				// 	if (error.response?.status === 404) {
				// 		setError("Hubo un error al crear el usuario");
				// 		setLoading(false);
				// 	}
				// 	if (error.response?.status === 400) {
				// 		setError(error.response.data.message || "Error");
				// 		setLoading(false);
				// 	}
				// }
			}
		},
	});

	const calcularSeguridad = (password: string) => {
		let seguridad = 0;
		const length = password.trim().length;
		if (length >= 4) {
			seguridad += 20;
		}
		if (length >= 8) {
			seguridad += 20;
		}

		if (/[A-Z]/.test(password)) {
			seguridad += 10;
		}

		if (/\d/.test(password)) {
			seguridad += 15;
		}

		if (/[\W_]/.test(password)) {
			seguridad += 35;
		}
		setPasswordSecurity(seguridad);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		calcularSeguridad(e.target.value);
		formik.handleChange(e);
	};

	useEffect(() => {
		switch (true) {
			case passwordSecurity == 0:
				setDataSecurity({
					message: "Muy débil",
					background: "!bg-[hsl(var(--nextui-danger))]",
					color: "text-[hsl(var(--nextui-danger))]",
				});
				break;
			case passwordSecurity >= 20 && passwordSecurity < 40:
				setDataSecurity({
					message: "Débil",
					background: "!bg-[hsl(var(--nextui-danger))]",
					color: "text-[hsl(var(--nextui-danger))]",
				});
				break;
			case passwordSecurity >= 40 && passwordSecurity < 60:
				setDataSecurity({
					message: "Medio",
					background: "!bg-yellow-500",
					color: "text-yellow-500",
				});
				break;
			case passwordSecurity >= 60 && passwordSecurity < 91:
				setDataSecurity({
					message: "Fuerte",
					background: "!bg-green-500",
					color: "text-green-500",
				});
				break;
			case passwordSecurity >= 91:
				setDataSecurity({
					message: "Cielos que macizo!",
					background: "!bg-green-500",
					color: "text-green-500",
				});
				break;
			default:
				setDataSecurity({
					message: "Débil",
					background: "!bg-[hsl(var(--nextui-danger))]",
					color: "text-[hsl(var(--nextui-danger))]",
				});
				break;
		}
	}, [passwordSecurity]);

	const LabelIndicator = ({ message, color }: seguridadType) => {
		return (
			<div className='w-full flex justify-between items-center text-[13px]'>
				<p className=''>Seguridad de la contraseña:</p>

				{!(message === "Muy débil") && (
					<span className={cn("font-semibold text-sm", color)}>
						{message}
					</span>
				)}
			</div>
		);
	};

	return (
		<div className='grid gap-2'>
			<div className='flex items-center gap-2 justify-between'>
				<Link
					href={{
						pathname: "/auth/login",
					}}
				>
					<ChevronLeft size={28} />
				</Link>
				<h2 className='text-xl font-bold'>
					Crea tu cuenta en TuristApp
				</h2>
				<Link
					href={{
						pathname: "/auth",
					}}
					className='flex items-center gap-2 font-semibold bg-[#F0F2F5] rounded-medium p-2 w-fit'
				>
					<X />
				</Link>
			</div>
			<form className='my-4 grid gap-5' onSubmit={formik.handleSubmit}>
				{error && (
					<div className='relative text-center bg-danger-50 text-danger text-sm rounded-medium flex items-center overflow-hidden'>
						<p className='p-2.5 text-center w-full px-12'>
							{error}
						</p>
						<button
							type='button'
							className='absolute right-0 w-14 h-full flex justify-center items-center hover:bg-[rgba(255,255,255,0.15)]'
							onClick={() => setError("")}
						>
							<XCircle />
						</button>
					</div>
				)}

				<div className='grid gap-3'>
					<Input
						aria-label='Nombre'
						label='Nombre'
						name='name'
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						validationState={
							formik.touched.name && formik.errors.name
								? "invalid"
								: "valid"
						}
						errorMessage={
							formik.touched.name && formik.errors.name
								? formik.errors.name
								: null
						}
						isDisabled={loading}
					/>
					<Input
						aria-label='Apellidos'
						label='Apellidos'
						name='apellidos'
						value={formik.values.apellidos}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						validationState={
							formik.touched.apellidos && formik.errors.apellidos
								? "invalid"
								: "valid"
						}
						errorMessage={
							formik.touched.apellidos && formik.errors.apellidos
								? formik.errors.apellidos
								: null
						}
						isDisabled={loading}
					/>
					<InputPassword
						aria-label='Contraseña'
						label='Contraseña'
						name='password'
						color={passwordSecurity === 100 ? "success" : "default"}
						value={formik.values.password}
						onChange={handlePasswordChange}
						onBlur={formik.handleBlur}
						validationState={
							formik.touched.password && formik.errors.password
								? "invalid"
								: "valid"
						}
						errorMessage={
							formik.touched.password && formik.errors.password
								? formik.errors.password
								: null
						}
						isDisabled={loading}
					/>
					<InputPassword
						aria-label='Repetir contraseña'
						label='Repetir contraseña'
						name='repeatPassword'
						// si formik.repeatPassword es igual a formik.password y passwordSecurity es igual a 100 entonces color es igual a success
						color={
							formik.values.repeatPassword ===
								formik.values.password &&
							passwordSecurity === 100
								? "success"
								: "default"
						}
						value={formik.values.repeatPassword}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						validationState={
							formik.touched.repeatPassword &&
							formik.errors.repeatPassword
								? "invalid"
								: "valid"
						}
						errorMessage={
							formik.touched.repeatPassword &&
							formik.errors.repeatPassword
								? formik.errors.repeatPassword
								: null
						}
						isDisabled={loading}
					/>
				</div>
				<div className='grid gap-2'>
					<LabelIndicator
						message={dataSegurity.message}
						background={dataSegurity.background}
						color={dataSegurity.color}
					/>
					<Progress
						aria-label='Seguridad de la contraseña'
						value={passwordSecurity}
						classNames={{
							track: "!bg-default-100 h-[8px] rounded-full",
							indicator: dataSegurity.background,
						}}
						isIndeterminate={loading}
					/>
				</div>
				<Button
					aria-label='registrar'
					color='primary'
					size='lg'
					fullWidth
					radius='sm'
					className='h-16 mt-2 transition-all motion-reduce:transition-none bg-primary shadow-transparent hover:shadow-lg hover:shadow-primary/40 text-primary-foreground'
					type='submit'
					isLoading={loading}
				>
					<span className='text-[22px] font-medium'>Registrar</span>
				</Button>
			</form>
		</div>
	);
};

export default FormRegister;
