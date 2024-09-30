import "./calendarComponent.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar.jsx"
import ViewSelector from "../../buttons/viewSelector/ViewSelector.jsx"
import GroupImage from "../../sidebar/boardImage/GroupImage.jsx";
import TodayCard from "../todayCard/TodayCard.jsx";
import PostIt from "../../board/postIt/PostIt.jsx";
import { isSameDay, format } from "date-fns";
import { es } from "date-fns/locale";

const CalendarComponent = () => {
    const postits = [
        {
            type: "perano",
            title: "JWT",
            text: "Lorem ipsum"
        },
        {
            type: "wheat",
            title: "Spring",
            text: "Lorem ipsum ipsum lorem"
        },
        {
            type: "rose",
            title: "Security",
            text: "Lorem ipsum"
        },
        {
            type: "green-brut",
            title: "Arrays",
            text: "Lorem ipsum ipsum lorem "
        },
    ]

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
            <div className="top-navigation">
                <GroupImage onClick="" profileImage="" position="position"/>
                <ViewSelector page="" isActive="" onClick=""/>
            </div>
            <div className="week-cal">
                <div className="linebt"></div>
                <WeekCalendar />
            </div>
            <div className="today-cal">
                <TodayCard month={dayMonth} year={dayYear} date={dayNumber} dayWeek={dayWeek} isToday={isToday}/>
            </div>
            <div className="linebt"></div>
            <section className="cal-post-it">
                {postits.map((postit, index) => (
                    <PostIt 
                        key={index}
                        type={postit.type} 
                        title={postit.title}
                        text={postit.text}/>
                ))
                }
            </section>
        </section>
    </div>
  )
}

export default CalendarComponent
