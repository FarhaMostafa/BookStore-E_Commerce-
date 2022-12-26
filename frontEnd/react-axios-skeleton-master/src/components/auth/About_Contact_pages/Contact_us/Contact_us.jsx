import { makeStyles } from "@material-ui/core/styles";
import * as React from 'react';
import {Container, Button, TextField } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    paper: {
      alignItems: "center"
    }, 
       form: {
        width: "50%"
        ,
        alignItems: "center" 
      },
    }));
const Contact_us = () => {
    const classes = useStyles();

    return (

        <>
< Container className={classes.cardGrid}>
            <h2 className='contact' align="center" >
                <b> Contact_us </b>
            </h2>
            <TextField  className={classes.form} id="first_name" label="first_name" />
            <TextField className={classes.form} id="Last_name" label="Last_name" />
            <TextField className={classes.form} id="the topic" label="the topic" />
            <TextField className={classes.form} id=" Yours Email" label=" Yours Email" />
            <TextField className={classes.form} id=" Leave us a message " label=" Leave us a message " />
            <Button className="Button1" variant="contained"  >
                send
            </Button>

            </Container>
        </>

    )


}

export default Contact_us
