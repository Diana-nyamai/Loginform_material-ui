import { Button } from '@material-ui/core'
import React from 'react'

const HomePage = ({handleLogOut}) => {
    return (
        <div>
            <h1>welcome to you page</h1>
            <Button onClick={handleLogOut}>Log out</Button>

        </div>
    )
}

export default HomePage
