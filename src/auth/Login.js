import React from 'react'
import {Button, Grid, Link, TextField, Typography} from '@material-ui/core';
import natur from '../assets/Images/natur.png'
import logo from '../assets/Images/logo.png'

const Login = () => {
    return (
        <div>
           <Grid container style={{minHeight:'100vh'}}>
           {/*left side */}
           <Grid item xs={12} sm={6}>
        <img src={natur} alt="left-i" style={{height:'100%', width:'100%', objectFit:'cover'}} />
           </Grid>
           {/*right side */}
          <Grid
           container 
           item 
           xs={12} 
           sm={6}
           style={{padding: 20}}
           direction='column'
           >
          <div/>
          <div style={{display:'flex',flexDirection:'column'}}>
          <Grid container style={{justifyContent:'center'}}><img src={logo} alt="logo" width="200"/> </Grid>
            
          <TextField label="Email" margin="normal"/>
          <TextField label="Password" margin="normal"/>
          <Typography align="right"><Link>forgot password?</Link></Typography>

          <div style={{height: 20}}/>
          <Button color="primary" variant="contained">LOG IN</Button>

          <div style={{height: 20}}/>
          </div>

          

          </Grid>
           
         
           </Grid>
        </div>
    )
}

export default Login
