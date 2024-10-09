import "./calendarComponent.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar.jsx"
import TodayCard from "../todayCard/TodayCard.jsx";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import PostItContainerCalendar from "../../board/postIt/postItContainerCalendar/PostItContainerCalendar.jsx";
import { useState } from "react";

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const todayCalendar = () => {
        return {
            dayNumber: format(selectedDate, 'd', { locale: es }),
            dayWeek: format(selectedDate, 'EEEE', { locale: es }),
            dayYear: format(selectedDate, 'yyy', { locale: es}),
            dayMonth: format(selectedDate, 'MMM', { locale: es})
        };
    };

    const { dayNumber, dayWeek, dayYear, dayMonth, isToday } = todayCalendar();
    
    const handleDataChange = (date) => {
        //Aquí el get con date
        console.log(date);
        setSelectedDate(date);
    }

  return (
    <div className="calendar-comp">
        <section className="calendar-section">
            <div className="week-cal">
                <WeekCalendar onDateChange={handleDataChange}/>
            </div>
            <div className="today-cal">
                <TodayCard month={dayMonth} year={dayYear} date={dayNumber} dayWeek={dayWeek} isToday={isToday}/>
            </div>
            <div className="linebt"></div>
            <section className="cal-post-it">
                <PostItContainerCalendar />
            </section>
        </section>
    </div>
  )
}

export default CalendarComponent
