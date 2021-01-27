import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles'
import { Card, CardContent, CardMedia, Grid, CardActionArea } from '@material-ui/core';


const NewsComponent = (props) =>{
const classes = useStyles();

    return (
     <div className={classes.news}>
         <Typography variant="subtitle1" ><strong>{props.newsDate}</strong></Typography>
         <Typography variant="subtitle3">{props.title}</Typography>
         <Typography variant="subtitle3">{props.subTitle}</Typography>

         
     </div>   
    )
}
function Home() {
const classes = useStyles();


    const newsArray = [{
        "newsDate":"May 12, 2020",
        "title":"Donec molestie bibendum sem.",
        "subTitle":"Aenean libero metus."
    },
    {
       "newsDate":"May 12, 2020",
        "title":"Donec molestie bibendum sem.",
        "subTitle":"Aenean libero metus."
    },
    {
        "newsDate":"May 12, 2020",
        "title":"Donec molestie bibendum sem.",
        "subTitle":"Aenean libero metus."
    }
];

    const [publishedNews,setPublishedNews] = useState(newsArray);

    const publishNews = () =>{
        return ( publishedNews.map(news => {
            return <NewsComponent newsDate={news.newsDate} title={news.title} subTitle = {news.subTitle} />
        })

        );
    }



    return (
        <div className={classes.homeContent}>
            <div className={classes.detailsPart}>
                <Grid  container direction="row" justify="center" spacing='1'>  
                    <Grid  item lg={4} md={4} sm={12} xs={12}>
                        <Grid  container direction="row" justify="center" alignItems="stretch" spacing='3'>
                            <Grid  item lg={12} md={6} sm={6} xs={6} className={classes.webName}>
                            <Typography variant="h4" >Dev<strong className={classes.title}>Cr</strong>eatives++ </Typography>
                            <Typography variant="body1">IT Solutions</Typography>                     
            
                            </Grid>
                            <Grid  item lg={12} md={6} sm={8} xs={6}>
                                <Card className={classes.imageDetails}>
                                    <CardContent elementType="p">
                                    GraphicRiver is a marketplace for buying and selling Royalty Free layered Adobe Photoshop Files, EPS Vector Graphics, Icons.
                                    </CardContent>
                                </Card>
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
            </div>
            <div className={classes.siteDesc}>
                <Grid container direction="row" spacing={4}justify="center" alignContent="stretch"> 
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Grid container>
                            <Grid item>
                                <Typography variant="h5" >Latest News!</Typography>
                                {publishNews()}

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={5} md={6} sm={12} xs={12}>
                        <Grid container alignItems="center">
                            <Grid item>
                                <Typography variant="h5" >Welcome to our site!</Typography>
                                <div className={classes.news}>
                                    <Typography  variant="h6" >Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Typography>
                                </div>
                                <div className={classes.news}>
                                    <Typography  variant="body2">Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</Typography>
                                </div>
                                <div className={classes.news}>
                                    <Typography  variant="body2">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</Typography>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item lg={4} md={3} sm={12} xs={12}>
                     
                                <Typography variant="h5" >About us!</Typography>
                                    <div className={classes.news}>
                                        <div className={classes.credits}>
                                            <Card className={classes.creditsItem}>
                                                <div className={classes.credits}>
                                                    <CardContent >
                                                        <Typography variant="BUTTON TEXT"><strong>Muzamil Nawaz</strong></Typography>
                                                        <Typography variant="body2">Pellentesque habitant morbi tristique senectus et netus et malesuada.</Typography>
                                                        
                                                    </CardContent>
                                                </div>
                                                <CardMedia 
                                                component="img"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                className={classes.creditsImage}
                                                />
                                            </Card>
                                            
                                            <Card className={classes.creditsItem}>
                                                <div className={classes.credits}>
                                                    <CardContent >
                                                        <Typography variant="BUTTON TEXT"><strong>Muzamil Nawaz</strong></Typography>
                                                        <Typography variant="body2">Pellentesque habitant morbi tristique senectus et netus et malesuada.</Typography>
                                                        
                                                    </CardContent>
                                                </div>
                                                <CardMedia 
                                                component="img"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                className={classes.creditsImage}
                                                />
                                            </Card>
                                        </div>
                                    </div>
                                 </Grid>

                            </Grid>
                        
                  </div>
                  </div>
    )
}

export default Home;
