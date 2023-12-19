"use client";
import { Link, useRouter } from "@/lib/navigation.intl";
import { ChevronLeft, Mail, X, XCircle } from "lucide-react";
import { FC, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import InputPassword from "@/components/Inputs/InputPassword";

interface FormLoginProps {}

const FormLogin: FC<FormLoginProps> = ({}) => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const initialValues = {
		email: "",
		password: "",
		name: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.trim()
			.notOneOf([""])
			.email("El correo electrónico no es válido")
			.required("El correo electrónico es obligatorio"),
		password: Yup.string()
			.trim()
			.notOneOf([""])
			.min(4, "La contraseña es demasiado corta")
			.max(24, "La contraseña debe tener como máximo 24 caracteres")
			.required("La contraseña es obligatoria"),
		name: Yup.string()
			.trim()
			.notOneOf([""])
			.min(2, "El nombre es demasiado corto")
			.max(24, "El nombre debe tener como máximo 24 caracteres")
			.required("El nombre es obligatorio"),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values, { setErrors }) => {
			try {
				setLoading(true);

				const result = await signIn("credentials", {
					redirect: false,
					email: values.email,
					password: values.password,
				});
				console.log(result);
				if (result?.error) {
					setError(result.error);
					setErrors({ email: "", password: "" });
					setLoading(false);
					return;
				}
				if (result?.ok) {
					setError("");
					router.push("/");
					window.location.reload();
				}
			} catch (error: any) {
				console.log(error);
				setError(error.message);
				setLoading(false);
			}
		},
	});

	return (
		<div className='grid gap-10'>
			<div className='flex items-center gap-2 justify-between'>
				<Link
					href={{
						pathname: "/auth",
					}}
					// className='flex items-center gap-2 font-semibold bg-[#F0F2F5] rounded-medium p-2 w-fit'
				>
					<ChevronLeft size={28} />
				</Link>
				<h2 className='text-xl font-bold'>Iniciar Sesión</h2>
				<Link
					href={{
						pathname: "/auth",
					}}
					className='flex items-center gap-2 font-semibold bg-[#F0F2F5] rounded-medium p-2 w-fit'
				>
					<X />
				</Link>
			</div>
			<form className='grid gap-5' onSubmit={formik.handleSubmit}>
				<div className='grid gap-4'>
					<div className='grid gap-3'>
						{error && (
							<div className='text-center bg-danger-50 text-danger text-sm rounded-medium grid grid-cols-[1fr_auto] overflow-hidden'>
								<p className='p-2.5 px-1.5 pr-0'>{error}</p>
								<button
									type='button'
									className='w-12 flex justify-center items-center hover:bg-[rgba(255,255,255,0.15)]'
									onClick={() => setError("")}
								>
									<XCircle />
								</button>
							</div>
						)}
						<Input
							aria-label='Correo electrónico'
							label='Correo electrónico'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							endContent={<Mail opacity={0.5} />}
							validationState={
								formik.touched.email && formik.errors.email
									? "invalid"
									: "valid"
							}
							errorMessage={
								formik.touched.email && formik.errors.email
									? formik.errors.email
									: null
							}
							isDisabled={loading}
						/>
						<InputPassword
							aria-label='Repetir contraseña'
							label='Repetir contraseña'
							name='password'
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							validationState={
								formik.touched.password &&
								formik.errors.password
									? "invalid"
									: "valid"
							}
							errorMessage={
								formik.touched.password &&
								formik.errors.password
									? formik.errors.password
									: null
							}
							isDisabled={loading}
						/>
					</div>
					<div className='flex justify-between items-center'>
						<Checkbox
							color='primary'
							className='text-default-500'
							typeof='checkbox'
						>
							<span className='text-default-500 text-[15px]'>
								Recuérdame
							</span>
						</Checkbox>
						<Link
							href='/forgot-password'
							className='text-primary-500 font-medium text-[15px] hover:underline'
						>
							Olvidé mi contra uu
						</Link>
					</div>
					<Button
						aria-label='Iniciar Sesión'
						color='primary'
						size='lg'
						fullWidth
						radius='sm'
						className='h-14 transition-all motion-reduce:transition-none bg-primary shadow-transparent hover:shadow-lg hover:shadow-primary/40 text-primary-foreground'
						type='submit'
					>
						<span className='text-[22px] font-bold'>
							Iniciar Sesión
						</span>
					</Button>
				</div>
			</form>
		</div>
	);
};

export default FormLogin;
