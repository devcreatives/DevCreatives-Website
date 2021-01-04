import React from 'react'
import {Grid, Typography,Container} from '@material-ui/core'
import useStyles from '../styles'

function Footer() {

const classes = useStyles();

    return (
        <div >

        <Container className={classes.footer} >
            <Grid container justify="center" alignItems="stretch">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography variant="body2">Copyright © 2021 <strong>DevCreatives++.</strong> Designed by <strong>Muzamil Nawaz</strong></Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Typography href="#" variant="body2"><a href="" >Terms & Conditions | Privacy Policy | Sitemap</a></Typography>

                </Grid>

            </Grid>
            </Container>
        </div>
    )
}

export default Footer
