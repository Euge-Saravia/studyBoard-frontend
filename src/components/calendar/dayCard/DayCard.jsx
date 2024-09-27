import './dayCard.scss'

const DayCard = ({isToday, dayNumber, dayWeek, onDayClick}) => {
    return (
        <div className={`day-card-container ${isToday ? 'today' : "not-today"}`} onClick={() => onDayClick(dayNumber)}>
            {isToday && (
                <span className="is-today-indicator">
                    <span className="is-today-indicator--ping"></span>
                    <span className="is-today-indicator--dot"></span>
                </span>
            )}
            <div className="date-container">
                <div className="date-content">
                    <p className={`date-number ${isToday ? 'today' : 'not-today'}`}>{dayNumber}</p>
                    <p className={`date-week ${isToday ? 'today' : 'not-today'}`}>{dayWeek}</p>
                </div>
            </div> 
        </div>
    )
}

export default DayCard