import React, { useState } from 'react';
import { Paper, Grid, TextField, Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'

import { useStoreState, useStoreActions } from '../../hooks/TypedState'

const useStyles = makeStyles((theme)=>({
    padding: {
        padding: theme.spacing(1),
        height: '100vh',
        overflow: 'hidden'
    }
}));

const LoginScreen: React.FC = () => {
  const loggedIn = useStoreState(({User})=>User.loggedIn)
  const { login, setEmail } = useStoreActions(({User})=>User)
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

        return (
            <Paper className={classes.padding}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="email" fullWidth autoFocus required onChange={changeEmail}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
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
                            } label="Remember me" />
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