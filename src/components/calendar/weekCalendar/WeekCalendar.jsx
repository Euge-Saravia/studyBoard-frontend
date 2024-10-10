import {
    addDays,
    addWeeks,
    format,
    isSameDay,
    startOfWeek,
    subWeeks,
} from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";
import DayCard from "../dayCard/DayCard";
import "./weekCalendar.scss";

const WeekCalendar = ({ onDateChange }) => {
    const [currentWeekStart, setCurrentWeekStart] = useState(
        startOfWeek(new Date(), { weekStartsOn: 1 })
    );
    const [selectedDate, setSelectedDate] = useState(null);
    const goToPreviousWeek = () => {
        setCurrentWeekStart((prevWeek) => subWeeks(prevWeek, 1));
    };

    const goToNextWeek = () => {
        setCurrentWeekStart((prevWeek) => addWeeks(prevWeek, 1));
    };

    const today = new Date();

    const daysOfTheWeek = Array.from({ length: 7 }, (_, index) => {
        const dayDate = addDays(currentWeekStart, index);
        const isToday = !selectedDate && isSameDay(dayDate, today);
        const isSelected = selectedDate
            ? isSameDay(dayDate, selectedDate)
            : false;
        return {
            dayNumber: format(dayDate, "dd", { locale: es }),
            dayWeek: format(dayDate, "EEE", { locale: es }),
            dayMonth: format(dayDate, "MM", { locale: es }),
            dayYear: format(dayDate, "y", { locale: es }),
            isToday,
            isSelected,
        };
    });

    const handleDayChange = (date) => {
        setSelectedDate(date);
        onDateChange(date);
    };

    return (
        <div className="calendar-container">
            <button onClick={goToPreviousWeek} className="arrow-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="#7EE6DD"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                </svg>
            </button>
            {daysOfTheWeek.map((day, index) => (
                <DayCard
                    key={index}
                    dayNumber={day.dayNumber}
                    dayWeek={day.dayWeek}
                    dayMonth={day.dayMonth}
                    dayYear={day.dayYear}
                    isToday={day.isToday}
                    isSelected={day.isSelected}
                    onClick={handleDayChange}
                />
            ))}
            <button onClick={goToNextWeek} className="arrow-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="#7EE6DD"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                </svg>
            </button>
        </div>
    );
};

export default WeekCalendar;
