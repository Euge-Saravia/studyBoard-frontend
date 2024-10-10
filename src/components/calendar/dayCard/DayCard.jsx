import './dayCard.scss'

const DayCard = ({isToday, dayNumber, dayWeek, dayMonth, dayYear, isSelected, onClick}) => {
    const date = `${dayYear}-${dayMonth}-${dayNumber}`
    return (
        <div className={`day-card-container ${isToday || isSelected ? 'today' : "not-today"}`} onClick={() => onClick(date)}>
            {isToday || isSelected && (
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