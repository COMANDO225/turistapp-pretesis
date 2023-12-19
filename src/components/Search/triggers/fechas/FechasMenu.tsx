import "react-dates/initialize";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { FC, useEffect, useRef, useState } from "react";
import {
	DateRangePicker,
	DayPicker,
	DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import FechaCalendar from "./FechaCalendar";

interface FechasMenuProps {
	desdeHasta?: {
		desde?: string;
		desdeLabel?: string;
		hasta?: string;
		hastaLabel?: string;
	};
}

const FechasMenu: FC<FechasMenuProps> = ({ desdeHasta }) => {
	const hoy = new Date();
	const desdeBtnRef = useRef<HTMLButtonElement>(null);
	const hastaBtnRef = useRef<HTMLButtonElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const [open, setOpen] = useState(false);

	const handleClickOutside = (e: MouseEvent) => {
		if (
			!desdeBtnRef.current?.contains(e.target as Node) &&
			!hastaBtnRef.current?.contains(e.target as Node) &&
			!contentRef.current?.contains(e.target as Node)
		) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	const [dateRange, setDateRange] = useState<any | null>({
		startDate: null,
		endDate: null,
	});

	const handleDatesChange = ({ startDate, endDate }: any) => {
		setDateRange({ startDate, endDate });
	};

	return (
		<>
			<div className='relative h-full'>
				<div className='hidden md:flex h-full'>
					{/* fecha inicio */}
					<Button
						className={cn(
							"bg-transparent",
							"h-full rounded-full",
							"w-full max-w-[144px] overflow-hidden px-5 min-w-[150px]",
							"data-[hover=true]:bg-[rgba(0,0,0,0.05)]"
						)}
						disableAnimation
						disableRipple
						ref={desdeBtnRef}
						onPress={() => setOpen(true)}
					>
						<div className='grid justify-start text-start'>
							<div className={cn("text-sm", "font-bold")}>
								<span>{desdeHasta?.desde}</span>
							</div>
							{/* truncar el texto */}
							<p className='text-gray-600 line-clamp-1'>
								{desdeHasta?.desdeLabel}
							</p>
						</div>
					</Button>
					{/* fecha fin */}
					<Button
						className={cn(
							"bg-transparent",
							"h-full rounded-full",
							"w-full max-w-[144px] overflow-hidden px-5 min-w-[150px]",
							"data-[hover=true]:bg-[rgba(0,0,0,0.05)]"
						)}
						disableAnimation
						disableRipple
						ref={hastaBtnRef}
						onPress={() => setOpen(true)}
					>
						<div className='grid justify-start text-start truncate'>
							<div className={cn("text-sm", "font-bold")}>
								<span>{desdeHasta?.hasta}</span>
							</div>
							<p className='text-gray-600 truncate'>
								{desdeHasta?.hastaLabel}
							</p>
						</div>
					</Button>
				</div>
				<div className='md:hidden h-full'>
					<Button
						className={cn(
							"bg-transparent",
							"h-full rounded-full",
							"w-full max-w-[144px] overflow-hidden px-5",
							"data-[hover=true]:bg-[rgba(0,0,0,0.05)]"
						)}
						disableAnimation
						disableRipple
					>
						<div className='grid justify-start text-start truncate'>
							<div className={cn("text-sm", "font-bold")}>
								<span>Desde</span>
							</div>
							<p className='text-gray-600 truncate'>
								Agregar fecha de inicio
							</p>
						</div>
					</Button>
				</div>
			</div>
			{open && (
				<div
					className='absolute w-full top-full'
					data-side='bottom'
					data-state='open'
					ref={contentRef}
				>
					<div className=''>
						<FechaCalendar />
					</div>
				</div>
			)}
		</>
	);
};

export default FechasMenu;
