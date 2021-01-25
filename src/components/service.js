import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles'
import { Card, CardContent, CardMedia, Grid, CardActionArea } from '@material-ui/core';

function Service() {
const classes = useStyles();

return(
<div className={classes.homeContent}>
    <div className={classes.detailsPart}>
        <Grid  container direction="row" justify="left" spacing='1'>  
            <Grid  item lg={4} md={4} sm={12} xs={12}>
                <Grid  container direction="row" justify="left" alignItems="stretch" spacing='3'>
                    <Grid  item lg={12} md={6} sm={6} xs={6} className={classes.webName}>
                        <Typography variant="h4" >Dev<strong className={classes.title}>Cr</strong>eatives++ </Typography>
                        <Typography variant="body1">IT Solutions</Typography>  
                    </Grid>
                
                    <div className={classes.siteDesc}>
                        <Grid container direction="row" spacing={4}justify="left" alignContent="stretch"> 
                            <Grid item lg={157} md={300} sm={25} xs={39}>
                                <Grid container>
                                    <Grid item>
                                        <h1>H1 Heading</h1>
                                        <h2>H2 Heading</h2>        
                                        <h3>H3 Heading</h3>
                                        <h4>H4 Heading</h4>
                                        <h5>H5 Heading</h5>
                                        <h6>H6 Heading</h6>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                            <Grid item lg={157} md={29} sm={25} xs={65}>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid  item lg={8} md={6} sm={12} xs={12} >
                        <Card  className={classes.imageBox} >
                            
                                <CardMedia
                                    component="img"
                                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                    className={classes.image}
                                />
                            
                        </Card>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
    </div>
</div>

)
}
export default Service;