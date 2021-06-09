import React from 'react'
import {Button, Grid, Link, TextField, Typography} from '@material-ui/core';
import natur from '../assets/Images/natur.png'
import logo from '../assets/Images/logo.png'

const Login = () => {
    const {email,setEmail,password,setPassword,handleLogIn,handleSignUp,hasAccount,setHasAccount,emailError,passwordError} = props;
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
            
          <TextField label="Email*" margin="normal"/>
          <TextField label="Password*" margin="normal"/>
          <Typography align="right"><Link>forgot password?</Link></Typography>

          <div style={{height: 20}}/>
          <Button color="primary" variant="contained">log in</Button>

          <div style={{height: 20}}/>
          <Typography color="primary" align="center">DO NOT HAVE AN ACCOUNT?<Link>CREATE ACCOUNT</Link></Typography>
          </div>  
          <div style={{height: 120}}/>
          <Grid container >
          <Grid item>
          <Typography color="primary">Designer:<Link href="https://github.com/Diana-nyamai"> DIANA NYAMAI</Link></Typography>
          </Grid>
          </Grid>
          </Grid>
            </Grid>
          
    
        </div>
    )
}

export default Login
