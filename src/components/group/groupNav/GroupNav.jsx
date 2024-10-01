import React from 'react'
import GroupImage from '../../sidebar/boardImage/GroupImage'
import ViewSelector from '../../buttons/viewSelector/ViewSelector'
import "./groupNav.scss"

const GroupNav = () => {
  return (
    <section className="group-nav">
        <div className="top-navigation">
            <GroupImage onClick="" profileImage=""/>
            <ViewSelector page="" isActive="" onClick=""/>
        </div>
        <div className="linebt"></div>
    </section>
  )
}

export default GroupNav
