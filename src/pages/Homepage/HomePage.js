import React from 'react'
import SideNavBar from './SideNavBar'

const HomePage = ({handleLogOut}) => {
    return (
        <div>
            <SideNavBar handleLogOut={handleLogOut}/>
            
        </div>
    )
}

export default HomePage
