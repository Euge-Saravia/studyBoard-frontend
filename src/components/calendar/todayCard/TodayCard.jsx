import "./todayCard.scss";

const TodayCard = ( { month, year, date, dayWeek } ) => {
  return (
    <div className="today-card">
        <div className="month-year">
            <p>{month}, {year}</p>
        </div>
        <div className="today-date">
            <h1 className="today-dt">{date}</h1>
            <p>{dayWeek}</p>
        </div>
    </div>
  )
}

export default TodayCard
