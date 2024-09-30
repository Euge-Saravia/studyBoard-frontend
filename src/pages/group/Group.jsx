import CalendarComponent from "../../components/calendar/calendarComponent/CalendarComponent"
import GroupNav from "../../components/group/groupNav/GroupNav"

const Group = ( { isCreator } ) => {
  return (
    <div>
      <GroupNav />
      <CalendarComponent />
    </div>
  )
}

export default Group
