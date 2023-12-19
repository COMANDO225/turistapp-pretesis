import { GridCard } from "@/components/GridCard";
import MenuCategoryBar from "@/components/MenuCategoryBar";
import { cn } from "@/lib/utils";
import { FC, Fragment } from "react";
import { useLocale, useTranslations } from "next-intl";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
	const t = useTranslations("HomePage");
	return (
		<Fragment>
			<MenuCategoryBar />
			<section className="mt-5 w-full">
				<div className="wrapper">
					<div
						className={cn(
							"grid gap-[2rem_1.5rem]",
							"grid-cols-[repeat(var(--grid-breakpoint),minmax(0,1fr))]"
						)}
					>
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
						<GridCard />
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default HomePage;
