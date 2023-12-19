"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "./Category";

interface CategorySliderProps {}

const CategorySlider: FC<CategorySliderProps> = ({}) => {
	const categories = [
		{
			name: "Aventura",
			image: "https://picsum.photos/200/300",
		},
	];

	return (
		<div className="relative overflow-hidden max-w-[100%] py-2">
			<Swiper
				className="w-full h-full"
				id="swiper_category"
				slidesPerView={"auto"}
			>
				{Array(10)
					.fill(10)
					.map((_, i) => (
						<SwiperSlide
							key={i}
							className="w-full max-w-[130px] h-full items-center flex"
						>
							<Category />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default CategorySlider;
