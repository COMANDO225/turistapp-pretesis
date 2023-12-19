import Image from "next/image";
import { FC } from "react";

interface ImageBlurProps {
	src: string;
	alt?: string;
}

const ImageBlur: FC<ImageBlurProps> = ({ src, alt }) => {
	return (
		<Image
			src={src}
			alt={alt || "imagen de producto"}
			className='w-full h-full object-cover'
			fill
			sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
		/>
	);
};

export default ImageBlur;
