import { Button } from '@material-ui/core'
import React from 'react'

function HomePage({handleLogOut}) {
    return (
        <div>
            <h1>welcome to you page</h1>
            <Button variant="primary" onclick={handleLogOut}>Log out</Button>

        </div>
    )
}

export default HomePage
