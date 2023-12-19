import { Chip } from "@nextui-org/chip";
import { LocateFixed } from "lucide-react";
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import { ImageProduct } from "./image.interface";
import ImagesSwiper from "./ImagesSwiper";

interface GridCardProps {}

const GridCard: FC<GridCardProps> = ({}) => {
	// arreglo de imagenes
	const imagenes: ImageProduct[] = [
		{
			id: 1,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 2,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 3,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 4,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 5,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 6,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 7,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 8,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
		{
			id: 9,
			url: "https://via.placeholder.com/500x500",
			alt: "hero",
		},
	];

	return (
		// card
		<div
			role='group'
			aria-label='card'
			// hover de grupo
			className='block relative group'
		>
			{/* linkeable card */}

			{/* wrapper card */}
			<div className='grid gap-2.5 w-full'>
				{/* wrapper image */}
				<div className='relative aspect-[14/13] overflow-hidden'>
					{/* image */}
					<div className='relative w-full h-full flex justify-center items-center rounded-xl overflow-hidden'>
						<div className='absolute w-full h-full bg-slate-500'></div>
						{/* <Image
								className='z-[1] object-cover object-center transition-all duration-300 group-hover:scale-110'
								src='https://via.placeholder.com/500x500'
								alt='hero'
								fill
								sizes='100%'
							/> */}
						{/* swiper */}
						<ImagesSwiper
							images={imagenes}
							className='group-hover:flex'
						/>
					</div>
				</div>
				{/* content wrapper */}
				<div aria-label='content'>
					{/* content */}
					<div className='grid gap-0.5 !text-[15px]'>
						{/* title */}
						<div className='flex justify-between gap-2.5'>
							<div className=''>
								{/* truncate maximo 2 lineas */}
								<h2
									aria-label='title'
									className='font-bold line-clamp-2'
									title='Promoción de pollo a la brasa con papas y ensalada para 2 personas'
								>
									Promoción de tour Lima
								</h2>
							</div>

							<div
								aria-label='rating'
								className='flex items-center gap-0.5'
							>
								<AiFillStar className='text-yellow-400 text-base' />
								<span aria-label='rating'>4.5</span>
							</div>
						</div>
						{/* informacion */}
						<div className='grid gap-1.5'>
							{/* direction */}
							<div className='flex items-center w-full font-light text-gray-500 gap-1'>
								<div className='mb-[1px]'>
									<LocateFixed
										size={16}
										strokeWidth={1.6}
										className='text-gray-500'
									/>
									{/* <MapPin
											size={16}
											strokeWidth={1.6}
											className='text-gray-500'
										/> */}
								</div>
								<p
									aria-label='direction'
									className='line-clamp-1'
								>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Blanditiis minus quos
									autem, nesciunt aliquid inventore quisquam
									maxime a nulla, soluta debitis ea cumque,
									porro rem sequi voluptas? Ducimus, quis
									eaque.
								</p>
							</div>
							{/* precio y categoria */}
							<div className='grid grid-cols-[auto_1fr] gap-2'>
								{/* precio */}
								<div
									className='flex items-center gap-1'
									aria-hidden
								>
									<span className='text-xs text-gray-500 font-light line-through'>
										S/ 599
									</span>
									<span className='font-bold text-base'>
										S/ 399
									</span>
								</div>
								{/* categoria */}
								{/* <div className='flex w-full items-center gap-1'>
										<Chip
											size='sm'
											className='text-xs h-[20px] border-[1px] bg-white'
										>
											Small
										</Chip>
									</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GridCard;
