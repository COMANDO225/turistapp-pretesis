import { FC } from "react";
import ShadowLine from "./ShadowLine";
import { useTranslations } from "next-intl";
import CategorySlider from "./CategorySlider";

interface MenuCategoryBarProps {}

const MenuCategoryBar: FC<MenuCategoryBarProps> = ({}) => {
	const t = useTranslations("HomePage");
	return (
		<div className="sticky w-full top-[--nav-h] h-[--nav-h] mt-4 bg-transparent z-10">
			<div className="w-full h-full relative">
				<ShadowLine />
				<div className="w-full h-full overflow-hidden relative wrapper">
					<div className="w-full h-full grid grid-cols-[1fr_auto] gap-2">
						{/* category slider */}
						<CategorySlider />
						{/* aassets bar */}
						<div className="">hola</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuCategoryBar;
