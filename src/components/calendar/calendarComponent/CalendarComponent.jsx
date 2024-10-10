import "./calendarComponent.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar.jsx";
import TodayCard from "../todayCard/TodayCard.jsx";
import PostItContainerCalendar from "../../postIt/postItContainerCalendar/PostItContainerCalendar"
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";


const CalendarComponent = ( {groupId} ) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const todayCalendar = () => {
        return {
            dayNumber: format(selectedDate, 'd', { locale: es }),
            dayWeek: format(selectedDate, 'EEEE', { locale: es }),
            dayYear: format(selectedDate, 'yyy', { locale: es}),
            dayMonth: format(selectedDate, 'MMM', { locale: es}),
            formatedDate: format(selectedDate, 'yyyy-MM-dd')
        };

    };
  };


    const { dayNumber, dayWeek, dayYear, dayMonth, isToday, formatedDate } = todayCalendar();
    
    const handleDataChange = (date) => {
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
                <PostItContainerCalendar date={formatedDate} groupId={groupId} />
            </section>

        </section>
      </section>
    </div>
  );
};

export default CalendarComponent;
