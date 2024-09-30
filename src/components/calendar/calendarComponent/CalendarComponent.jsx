import "./calendarComponent.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar.jsx"
import TodayCard from "../todayCard/TodayCard.jsx";
import PostIt from "../../board/postIt/PostIt.jsx";
import { isSameDay, format } from "date-fns";
import { es } from "date-fns/locale";
import PostItContainer from "../../board/postIt/postItContainer/PostItContainer.jsx";

const CalendarComponent = () => {

    const today = new Date();

    const todayCalendar = () => {
        const isToday = isSameDay(today, new Date());
        return {
            dayNumber: format(today, 'd', { locale: es }),
            dayWeek: format(today, 'EEEE', { locale: es }),
            dayYear: format(today, 'yyy', { locale: es}),
            dayMonth: format(today, 'MMM', { locale: es}),
            isToday
        };
    };

    const { dayNumber, dayWeek, dayYear, dayMonth, isToday } = todayCalendar(); 

  return (
    <div className="calendar-comp">
        <section className="calendar-section">
            <div className="week-cal">
                <WeekCalendar />
            </div>
            <div className="today-cal">
                <TodayCard month={dayMonth} year={dayYear} date={dayNumber} dayWeek={dayWeek} isToday={isToday}/>
            </div>
            <div className="linebt"></div>
            <section className="cal-post-it">
                <PostItContainer />
            </section>
        </section>
    </div>
  )
}

export default CalendarComponent
