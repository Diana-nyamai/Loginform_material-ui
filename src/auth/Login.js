import React from 'react'
import {Grid} from '@material-ui/core';
import nature from '../assets/Images/nature.png'

const Login = () => {
    return (
        <div>
           <Grid container style={{minHeight:'100vh'}}>
           <Grid item xs={12} sm={6}>
        <img src={nature} alt="left-i" style={{height:'100%', width:'100%', objectFit:'cover'}} />
           </Grid>
           <Grid item xs={12} sm={6}></Grid>
           </Grid>
        </div>
    )
}

export default Login
