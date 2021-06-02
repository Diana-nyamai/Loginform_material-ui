import React from 'react'
import {Grid} from '@material-ui/core';
import bike from '../assets/Images/bike.png'

const Login = () => {
    return (
        <div>
           <Grid container>
           <Grid item xs={12} sm={6}>
        <Img src={bike} alt="left-i" style={{height:'100%', width:'100%', objectFit:'cover'}} />
           </Grid>
           <Grid item xs={12} sm={6}></Grid>
           </Grid>
        </div>
    )
}

export default Login
