import React, { useState, useEffect } from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

import { useStoreState, useStoreActions } from '../../hooks/TypedState'

const useStyles = makeStyles((theme)=>({
    padding: {
        padding: theme.spacing(1),
        height: '100vh',
        overflow: 'hidden'
    }
}));

const LoginScreen: React.FC = () => {
  const history = useHistory()
  
  const loggedIn = useStoreState(({User})=>User.loggedIn)
  const { login, setEmail, setLoggedIn } = useStoreActions(({User})=>User)
  const [password, setPassword] = useState("")

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(e.target.value){
      setEmail(e.target.value)
    }
  }
  const changePass = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(e.target.value){
      setPassword(e.target.value)
    }
  } 
  const classes = useStyles()
  
  useEffect(()=>{
    setLoggedIn({value: false, roles: []})
  },[])

  useEffect(()=>{
    if(loggedIn)
      history.push('/home')
  }, [loggedIn, history])

  return (
    <Paper className={classes.padding}>
      <Grid container spacing={8} justify="space-around">
        <Grid item md={true} sm={true} xs={true}>
          <TextField id="username" label="Username" type="email" fullWidth autoFocus required onChange={changeEmail}/>
        </Grid>
      </Grid>
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item md={true} sm={true} xs={true}>
          <TextField id="password" label="Password" type="password" fullWidth required onChange={changePass} />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <FormControlLabel control={
            <Checkbox
              color="primary"
            />
          } label="Remember me"/>
        </Grid>
        <Grid item>
          <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: '10px' }}>
        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={()=>login(password)}>{loggedIn ? "true" : "false"}</Button>
      </Grid>
    </Paper>
  );
}

export default LoginScreen;