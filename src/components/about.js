import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles'
import {Grid, } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';



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

function About() {
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
                </Grid>
            </Grid>
        </Grid>
        <div>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>
                    <div id="mainarea">
				   
						<h1>About Our Company</h1>

                        <p>
						<a href="#"><img height="107" align="left" border="0" width="165" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" alt="image1" class="floatleft"/></a>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, erat dictum finibus euismod, magna enim tristique lacus, eu mollis risus ex at justo. Nullam id mauris et velit finibus posuere. Vestibulum lobortis cursus venenatis. Donec feugiat magna et ex interdum, vel elementum diam tristique. Maecenas augue turpis, fermentum vel auctor at, consectetur ac lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis consequat turpis volutpat lacinia. In tristique risus et ipsum rhoncus finibus. Integer mattis nisl vitae hendrerit aliquet. Pellentesque ac odio sapien.	Lorem ipsum dolor sit amet, consectetur adipiscing elit. t amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.	
					    </p>
                       
				</div>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                    <div class="floatright" id="sidearea">
					  <h1>Latest News!</h1><br/>
                      <Grid container>
                            <Grid item>
                                <Typography variant="h5" >Latest News!</Typography>
                                {publishNews()}

                            </Grid>
                        </Grid>
					                         
				    </div> 
                    </Paper>
                </Grid>
            </Grid>
        </div>
    </div>
</div>
)
}
export default About;