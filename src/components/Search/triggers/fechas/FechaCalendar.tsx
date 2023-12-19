import { FC, useEffect, useState } from "react";
import {
	DayPicker,
	DayPickerRangeController,
	ModifiersShape,
} from "react-dates";
import moment, { Moment } from "moment";

interface FechaCalendarProps {}

const FechaCalendar: FC<FechaCalendarProps> = ({}) => {
	const [dateRange, setDateRange] = useState<any | null>({
		startDate: null,
		endDate: null,
	});

	const handleDatesChange = ({ startDate, endDate }: any) => {
		setDateRange({ startDate, endDate });
	};

	const [focusedInput, setFocusedInput] = useState<
		"startDate" | "endDate" | null
	>("startDate");

	const isOutsideRange = (day: Moment): boolean => {
		return day && day.isBefore(moment(), "day"); // Bloquear días anteriores al día actual
	};

	const isDayBlocked = (day: Moment) => {
		return day.isBefore(moment(), "day"); // Bloquear días anteriores al día actual
	};

	// crear mis propios dias
	const customRenderDay = (day: Moment, modifiers: any) => {
		const isBlocked = isDayBlocked(day);
		const isSelected = modifiers.selected;

		if (isBlocked) {
			return (
				<div className='w-6 h-6 flex text-red-500 mx-auto items-center justify-center'>
					{day.format("D")}
				</div>
			);
		}

		if (isSelected) {
			return (
				<div className='w-6 h-6 flex text-green-500 bg-primary mx-auto items-center justify-center'></div>
			);
		}

		return (
			<div className='w-6 h-6 flex mx-auto items-center justify-center'>
				{day.format("D")}
			</div>
		);
	};

	return (
		<div className='bg-white shadow-card-nav rounded-[28px] max-h-[calc(100vh-162px)] overflow-hidden'>
			<button
				onClick={() => setFocusedInput("startDate")}
				className={focusedInput === "startDate" ? "active" : ""}
			>
				Set Start Date
			</button>
			<button
				onClick={() => setFocusedInput("endDate")}
				className={focusedInput === "endDate" ? "active" : ""}
			>
				Set End Date
			</button>
			<div className='w-fit mx-auto'>
				<DayPickerRangeController
					initialVisibleMonth={() => moment()}
					startDate={dateRange.startDate}
					endDate={dateRange.endDate}
					onDatesChange={handleDatesChange}
					focusedInput={focusedInput}
					hideKeyboardShortcutsPanel
					onFocusChange={(newFocusedInput) => {
						// si ya se selecciono startDate y endDate, aún permitir seleccionar pero que la fecha nueva seleccionada aplique a endDate
						if (
							dateRange.startDate &&
							newFocusedInput === "endDate"
						) {
							setFocusedInput(newFocusedInput);
						} else if (!dateRange.startDate) {
							setFocusedInput(newFocusedInput);
						}
					}}
					numberOfMonths={2}
					minimumNights={0}
					isDayBlocked={isDayBlocked}
					isOutsideRange={isOutsideRange}
					renderDayContents={customRenderDay}
				/>
			</div>
		</div>
	);
};

export default FechaCalendar;
