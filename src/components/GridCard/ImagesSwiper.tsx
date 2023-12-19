"use client";
import { FC, useEffect, useRef, useState } from "react";
import { ImageProduct } from "./image.interface";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageBlur from "./ImageBlur";

interface ImagesSwiperProps {
	images: ImageProduct[];
	className?: HTMLDivElement["className"];
}

const ImagesSwiper: FC<ImagesSwiperProps> = ({ images, className }) => {
	const swiperRef = useRef<SwiperRef>(null);
	const [indexActual, setIndexActual] = useState<number>(0);

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.swiper.on("slideChangeTransitionEnd", () => {
				setIndexActual(swiperRef.current!.swiper.activeIndex);
			});
		}
	}, []);

	const handlePrev = () => {
		if (indexActual !== 0 && swiperRef.current)
			swiperRef.current.swiper.slideTo(indexActual - 1);
	};

	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.swiper.slideNext();
	};

	const FirstButton = ({ className }: { className: any }) => {
		if (indexActual > 0) {
			return (
				<Button
					type='button'
					aria-label='Siguiente foto'
					aria-hidden
					disableRipple
					className={cn(
						"hidden absolute left-3 z-[3] h-[30px] w-[30px] min-w-[30px] min-h-[30px]",
						"rounded-full max-w-none p-0 min-w-0 bg-white shadow-sm hover:shadow-md opacity-90 hover:opacity-100 hover:scale-105 transition-shadow duration-300",
						className && `${className}`
					)}
					onPress={handlePrev}
				>
					<ChevronLeft size={20} className='absolute mr-0.5' />
				</Button>
			);
		}
		return null;
	};

	const LastButton = ({ className }: { className: any }) => {
		if (indexActual < images.length - 1) {
			return (
				<Button
					type='button'
					aria-label='Siguiente foto'
					aria-hidden
					disableRipple
					className={cn(
						"hidden absolute right-3 z-[3] h-[30px] w-[30px] min-w-[30px] min-h-[30px]",
						"rounded-full max-w-none p-0 min-w-0 bg-white shadow-sm hover:shadow-md opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300",
						className && `${className}`
					)}
					onPress={handleNext}
				>
					<ChevronRight size={20} className='absolute ml-0.5' />
				</Button>
			);
		}
		return null;
	};

	return (
		<>
			<FirstButton className={className} />
			<LastButton className={className} />
			<Swiper
				ref={swiperRef}
				cssMode
				onSlideChange={(swiper) => setIndexActual(swiper.activeIndex)}
				className='w-full h-full bg-transparent'
				modules={[Pagination]}
				pagination={{
					dynamicBullets: true,
				}}
			>
				{images.map((image) => (
					<SwiperSlide key={image.id}>
						<ImageBlur src={image.url} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default ImagesSwiper;
