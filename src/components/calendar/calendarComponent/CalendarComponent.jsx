import "./calendarComponent.scss";
import WeekCalendar from "../weekCalendar/WeekCalendar.jsx"
import ViewSelector from "../../buttons/viewSelector/ViewSelector.jsx"
import GroupImage from "../../sidebar/boardImage/GroupImage.jsx";
import TodayCard from "../todayCard/TodayCard.jsx";

const CalendarComponent = () => {
  return (
    <div>
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
                <TodayCard month="sep" year="2024" date="27" dayWeek="viernes"/>
            </div>
            <div className="linebt"></div>
        </section>
    </div>
  )
}

export default CalendarComponent
