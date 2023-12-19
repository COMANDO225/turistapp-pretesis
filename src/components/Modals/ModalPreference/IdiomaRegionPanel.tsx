import { HiOutlineTranslate } from "react-icons/hi";
import { FC, useState } from "react";
import { Input, RadioGroup } from "@nextui-org/react";
import CustomRadioIdioma from "./CustomRadioIdioma";
import { useLocale } from "next-intl";
import { idiomaRegionInterface } from "@/interface/navbar.messages.interface";

interface IdiomaRegionPanelProps {
	changeLanguageAndClose: (language: string) => void;
	idiomaRegion?: idiomaRegionInterface;
}

const IdiomaRegionPanel: FC<IdiomaRegionPanelProps> = ({
	changeLanguageAndClose,
	idiomaRegion,
}) => {
	const locale = useLocale();
	const [selected, setSelected] = useState(locale);
	const regiones = [
		{
			pais: "Perú",
			lenguaje: "Español",
			flag: "pe",
			value: "es-PE",
		},
		{
			pais: "España",
			lenguaje: "Español",
			flag: "es",
			value: "es-ES",
		},
		{
			pais: "Estados Unidos",
			lenguaje: "English",
			flag: "us",
			value: "en-US",
		},
		{
			pais: "Reino Unido",
			lenguaje: "English",
			flag: "gb",
			value: "en-GB",
		},
		{
			pais: "Francia",
			lenguaje: "Français",
			flag: "fr",
			value: "fr-FR",
		},
		{
			pais: "Alemania",
			lenguaje: "Deutsch",
			flag: "de",
			value: "de-DE",
		},
		{
			pais: "Italia",
			lenguaje: "Italiano",
			flag: "it",
			value: "it-IT",
		},
		{
			pais: "Portugal",
			lenguaje: "Português",
			flag: "pt",
			value: "pt-PT",
		},
		{
			pais: "Brasil",
			lenguaje: "Português",
			flag: "br",
			value: "pt-BR",
		},
		{
			pais: "Japón",
			lenguaje: "日本語",
			flag: "jp",
			value: "ja-JP",
		},
		{
			pais: "China",
			lenguaje: "中文(简体)",
			flag: "cn",
			value: "zh-CN",
		},
		{
			pais: "Taiwán",
			lenguaje: "中文(繁體)",
			flag: "tw",
			value: "zh-TW",
		},
		{
			pais: "Rusia",
			lenguaje: "Русский",
			flag: "ru",
			value: "ru-RU",
		},
	];

	const onChangeLanguage = (value: string) => {
		setSelected(value);
		console.log(value);
		changeLanguageAndClose(value);
	};

	const reordenarRegiones = [
		regiones.find((region) => region.value === selected),
		...regiones.filter((region) => region.value !== selected),
	];

	return (
		<div className='grid gap-6'>
			<div className=''>
				<div className='flex items-center gap-3'>
					<HiOutlineTranslate size={32} />
					<h2 className='font-semibold text-xl'>
						{idiomaRegion?.titulo}
					</h2>
				</div>
				<div className='mt-5'>
					<p className='opacity-75'>{idiomaRegion?.description}</p>
				</div>
			</div>
			<div>
				<Input
					label={idiomaRegion?.inputLabel}
					classNames={{
						inputWrapper: "bg-[#f0f2f5]",
						label: "font-medium text-[15px] group-data-[filled-within=true]:font-bold",
					}}
				/>
			</div>
			<div className=''>
				<h2 className='font-semibold text-xl'>
					{idiomaRegion?.eligeIdioma}
				</h2>
				<div className='mt-4'>
					<section>
						<RadioGroup
							className='w-full'
							value={selected}
							onChange={(e) => onChangeLanguage(e.target.value)}
						>
							{reordenarRegiones.map((region) => (
								<CustomRadioIdioma
									key={region!.value}
									pais={region!.pais}
									flag={region!.flag}
									value={region!.value}
									aria-label={region!.lenguaje}
								>
									{region!.lenguaje}
								</CustomRadioIdioma>
							))}
						</RadioGroup>
					</section>
				</div>
			</div>
		</div>
	);
};

export default IdiomaRegionPanel;
