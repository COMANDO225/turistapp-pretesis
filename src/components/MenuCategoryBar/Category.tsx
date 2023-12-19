import { Skeleton } from "@nextui-org/skeleton";
import { FC } from "react";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
	return (
		<div className='w-full text-center grid justify-center gap-1'>
			<div className='flex justify-center'>
				{/* <Skeleton className='w-12 rounded-lg h-10 before:!duration-[2s]' /> */}
			</div>
			<span className='text-sm'>
				{/* <Skeleton className='w-full h-3 rounded-lg before:!duration-[2s]' /> */}
			</span>
		</div>
	);
};

export default Category;
