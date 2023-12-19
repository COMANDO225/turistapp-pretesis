import { FC } from "react";
import Brand from "../Brand";
import { Search } from "../Search";
import SearchActive from "../Search/SearchActive";
import UserMenu from "../UserMenu";
import { cn } from "@/lib/utils";
import AssetsNav from "./AssetsNav";
import { useTranslations } from "next-intl";
import { modalLocalidadInterface } from "@/interface/navbar.messages.interface";
import { Link } from "@/lib/navigation.intl";

interface NavbarProps {
	locale?: string;
}

const Navbar: FC<NavbarProps> = ({ locale }) => {
	const t = useTranslations("navbar");
	const m = useTranslations("Modales");
	const searchBarInactive = {
		cualquierPartedePeru: t("searchBarInactive.cualquierPartedePeru"),
		cualquierFecha: t("searchBarInactive.cualquierFecha"),
		agregarTuristas: t("searchBarInactive.agregarTuristas"),
	};
	const searchBarActive = {
		dondeQuieresIr: t("searchBarActive.dondeQuieresIr"),
		desde: t("searchBarActive.desde"),
		desdeLabel: t("searchBarActive.desdeLabel"),
		hasta: t("searchBarActive.hasta"),
		hastaLabel: t("searchBarActive.hastaLabel"),
		cuantos: t("searchBarActive.cuantos"),
		cuantosLabel: t("searchBarActive.cuantosLabel"),
		buscar: t("searchBarActive.buscar"),
	};

	const botonPresumido = t("botonPresumido");

	const userMenu = {
		userMenuNoAutenticado: {
			registrarte: t("userMenu.userMenuNoAutenticado.registrarte"),
			iniciarSesion: t("userMenu.userMenuNoAutenticado.iniciarSesion"),
			ayuda: t("userMenu.userMenuNoAutenticado.ayuda"),
		},
		userMenuAutenticado: {
			perfil: t("userMenu.userMenuAutenticado.perfil"),
			reservas: t("userMenu.userMenuAutenticado.reservas"),
			cerrarSesion: t("userMenu.userMenuAutenticado.cerrarSesion"),
		},
	};

	const modalLocalidad: modalLocalidadInterface = {
		idiomaRegion: {
			tab: m("modalLocalidad.idiomaRegion.tab"),
			titulo: m("modalLocalidad.idiomaRegion.titulo"),
			description: m("modalLocalidad.idiomaRegion.description"),
			inputLabel: m("modalLocalidad.idiomaRegion.inputLabel"),
			eligeIdioma: m("modalLocalidad.idiomaRegion.eligeIdioma"),
		},
		moneda: {
			tab: m("modalLocalidad.Moneda.tab"),
		},
		configuracion: {
			tab: m("modalLocalidad.Configuracion.tab"),
		},
	};
	return (
		<header
			className='fixed top-0 z-40 w-full bg-white border-b-[1px]'
			lang={locale}
		>
			<nav
				className={cn(
					"navbar-h",
					"relative",
					"h-full wrapper",
					"flex justify-between gap-2.5 md:gap-0 md:grid md:grid-cols-[1fr_auto_1fr] items-center"
				)}
			>
				<div className='flex justify-start'>
					<Link
						href={{
							pathname: "/",
						}}
					>
						<Brand />
					</Link>
				</div>
				<div className='flex justify-center md:px-6'>
					<Search {...{ searchBarInactive }} />
				</div>
				<div className='hidden md:flex justify-end items-center gap-2'>
					<AssetsNav
						{...{
							botonPresumido,
							locale,
							modalLocalidad,
						}}
					/>
					<UserMenu {...{ botonPresumido, userMenu }} />
				</div>
			</nav>
			<div className='flex justify-center w-full'>
				<SearchActive {...{ searchBarActive }} />
			</div>
		</header>
	);
};

export default Navbar;
