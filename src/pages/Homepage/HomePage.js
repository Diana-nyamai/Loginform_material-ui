import { Button } from '@material-ui/core'
import React from 'react'
import SideNavBar from './SideNavBar'

const HomePage = ({handleLogOut}) => {
    return (
        <div>
            <SideNavBar/>
            <Button onClick={handleLogOut} variant="contained" color="primary">Log out</Button>
        </div>
    )
}

export default HomePage
