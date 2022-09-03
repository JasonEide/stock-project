import React from 'react';
import {Card, CardContent, Typography, Grid} from  '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';
import names from 'classnames';

export default function Cards(/*You guys add parameters here. just read the code and determine what should be added.*/) {
    /*
    if (! ADD FIRST PARAMETER HERE (sanity check for api not working)) {
        return "Loading...";
    }
    */
   return (
    <div className={styles.container}> 
        <Grid container spacing={3} justifyContent="center">
            <Grid item component={Card} className={names(styles.card, styles.total /* HINT HINT styles.total is a parameter that must be added 
            (total portfolio value, aka all the stocks within the stock portfolio added together)*/)}>
                <CardContent>
                    <Typography color='textSecondary'>Portfolio Value</Typography> 
                    <Typography variant='h5'>
                        <CountUp start={0} end={1000000} /*Must change 1000000 to the portfolio value*/ duration={2.5} separator=','/>
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
   )
}