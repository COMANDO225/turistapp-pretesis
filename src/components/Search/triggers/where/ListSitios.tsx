import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Button, ScrollShadow } from "@nextui-org/react";
import { MapPin } from "lucide-react";
import { FC } from "react";

interface ListSitiosProps {}

const ListSitios: FC<ListSitiosProps> = ({}) => {
	const departamentosPeru = [
		{
			id: 1,
			nombre: "Amazonas",
			coords: {
				lat: -6.228,
				lng: -77.87,
			},
		},
		{
			id: 2,
			nombre: "Áncash",
			coords: {
				lat: -9.526,
				lng: -77.528,
			},
		},
		{
			id: 3,
			nombre: "Apurímac",
			coords: {
				lat: -14.046,
				lng: -73.084,
			},
		},
		{
			id: 4,
			nombre: "Arequipa",
			coords: {
				lat: -16.398,
				lng: -71.535,
			},
		},
		{
			id: 5,
			nombre: "Ayacucho",
			coords: {
				lat: -13.158,
				lng: -74.223,
			},
		},
		{
			id: 6,
			nombre: "Cajamarca",
			coords: {
				lat: -7.161,
				lng: -78.512,
			},
		},
		{
			id: 7,
			nombre: "Callao",
			coords: {
				lat: -12.056,
				lng: -77.118,
			},
		},
		{
			id: 8,
			nombre: "Cusco",
			coords: {
				lat: -13.531,
				lng: -71.967,
			},
		},
		{
			id: 9,
			nombre: "Huancavelica",
			coords: {
				lat: -12.782,
				lng: -74.976,
			},
		},
		{
			id: 10,
			nombre: "Huánuco",
			coords: {
				lat: -9.925,
				lng: -76.242,
			},
		},
		{
			id: 11,
			nombre: "Ica",
			coords: {
				lat: -14.067,
				lng: -75.728,
			},
		},
		{
			id: 12,
			nombre: "Junín",
			coords: {
				lat: -11.158,
				lng: -75.997,
			},
		},
		{
			id: 13,
			nombre: "La Libertad",
			coords: {
				lat: -8.115,
				lng: -78.99,
			},
		},
		{
			id: 14,
			nombre: "Lambayeque",
			coords: {
				lat: -6.701,
				lng: -79.906,
			},
		},
		{
			id: 15,
			nombre: "Lima",
			coords: {
				lat: -12.043,
				lng: -77.028,
			},
		},
		{
			id: 16,
			nombre: "Loreto",
			coords: {
				lat: -3.749,
				lng: -73.253,
			},
		},
		{
			id: 17,
			nombre: "Madre de Dios",
			coords: {
				lat: -11.766,
				lng: -70.811,
			},
		},
		{
			id: 18,
			nombre: "Moquegua",
			coords: {
				lat: -17.196,
				lng: -70.935,
			},
		},
		{
			id: 19,
			nombre: "Pasco",
			coords: {
				lat: -10.686,
				lng: -76.256,
			},
		},
		{
			id: 20,
			nombre: "Piura",
			coords: {
				lat: -5.178,
				lng: -80.655,
			},
		},
		{
			id: 21,
			nombre: "Puno",
			coords: {
				lat: -15.841,
				lng: -70.025,
			},
		},
		{
			id: 22,
			nombre: "San Martín",
			coords: {
				lat: -6.508,
				lng: -76.364,
			},
		},
		{
			id: 23,
			nombre: "Tacna",
			coords: {
				lat: -18.006,
				lng: -70.246,
			},
		},
		{
			id: 24,
			nombre: "Tumbes",
			coords: {
				lat: -3.566,
				lng: -80.451,
			},
		},
		{
			id: 25,
			nombre: "Ucayali",
			coords: {
				lat: -8.379,
				lng: -74.553,
			},
		},
	];

	return (
		<ScrollArea className='h-[500px] overflow-y-auto'>
			<div className='py-4 px-3'>
				<ul className='grid'>
					{departamentosPeru.map((departamento) => (
						<li key={departamento.id}>
							<Button
								onClick={() => console.log(departamento)}
								className={cn(
									"flex items-center justify-between",
									"w-full h-[54px] py-2 px-3 rounded-2xl",
									"bg-transparent hover:bg-default",
									"text-gray-800"
								)}
							>
								<div className='flex items-center gap-2'>
									<div className=''>
										<MapPin strokeWidth={1.6} />
									</div>
									<span className='font-semibold'>
										{departamento.nombre}
									</span>
								</div>
							</Button>
						</li>
					))}
				</ul>
			</div>
		</ScrollArea>
	);
};

export default ListSitios;
