import React,{useState} from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from '../styles'
import {Grid, } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


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
                </Grid>
            </Grid>
        </Grid>
        <div>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>
                    <div id="mainarea">
				   
						<h1>H1 Heading</h1>
						<h2>H2 Heading</h2>
						<h3>H3 Heading</h3>
						<h4>H4 Heading</h4>
						<h5>H5 Heading</h5>
						<h6>H6 Heading</h6>
				
					<p>
						<a href="#"><img height="107" align="right" border="0" width="165" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" alt="image1" class="floatright"/></a>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, erat dictum finibus euismod, magna enim tristique lacus, eu mollis risus ex at justo. Nullam id mauris et velit finibus posuere. Vestibulum lobortis cursus venenatis. Donec feugiat magna et ex interdum, vel elementum diam tristique. Maecenas augue turpis, fermentum vel auctor at, consectetur ac lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ligula nec leo ornare iaculis vitae nec ante. Sed aliquam turpis id purus convallis luctus. Maecenas congue tempor dapibus. Cras at placerat sapien. Donec vitae tellus sagittis, pulvinar nisi a, eleifend nibh. Donec at felis consequat turpis volutpat lacinia. In tristique risus et ipsum rhoncus finibus. Integer mattis nisl vitae hendrerit aliquet. Pellentesque ac odio sapien.			
					</p>
					<br class="clear"/>
					<p>
						<a href="#"><img height="107" align="left" border="0" width="165" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" alt="image1" class="floatleft"/></a>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, erat dictum finibus euismod, magna enim tristique lacus, eu mollis risus ex at justo. Nullam id mauris et velit finibus posuere. Vestibulum lobortis cursus venenatis. Donec feugiat magna et ex interdum, vel elementum diam tristique. Maecenas augue turpis, fermentum vel auctor at, consectetur ac lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ligula nec leo ornare iaculis vitae nec ante. Sed aliquam turpis id purus convallis luctus. Maecenas congue tempor dapibus. Cras at placerat sapien. Donec vitae tellus sagittis, pulvinar nisi a, eleifend nibh. Donec at felis consequat turpis volutpat lacinia. In tristique risus et ipsum rhoncus finibus. Integer mattis nisl vitae hendrerit aliquet. Pellentesque ac odio sapien.		
					</p>
					<br class="clear"/>
					<p class="center"><a href="#"><img height="107" align="center" border="0" width="165" src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" alt="image1"/></a></p>			
					<p class="center">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>                        
				</div>
                    </Paper>
                </Grid>
                <Grid item xs={5} container spacing={3}>
                    <Paper className={classes.paper}>
                    <div class="floatright" id="sidearea">
					  <p><strong>This is strong text</strong><br/>
						<em>This is emphasised text</em><br/>
						<acronym>This is an acronym or abbreviation</acronym><br/>
						<del>This is deleted text</del><br/>
						<a href="#">This is a link</a><br/>
						<code>This is code</code><br/></p>
						<ul>
							<li><a href="#">Unordered list with link</a>
								<ul>
									<li>List 1</li>
									<li>List 2</li>
								</ul>
							</li>
							<li>Item 1</li>
							<li>Item 2</li>
						</ul>
						<br/>
						<ol>
						<li><a href="#">Ordered list with link</a>
							<ol>
								<li>Aliquam tincidunt mauris eu risus.</li>
								<li>Vestibulum auctor dapibus neque.</li>
							</ol>
						</li>
						<li>Aliquam tincidunt mauris eu risus.</li>
						<li>Vestibulum auctor dapibus neque.</li>
					</ol>
					<br/>
					<dl>
						<dt>Definition Title</dt>
						<dd>Definition description goes here......</dd>
					</dl><br/>                         
				</div>
		{/*<!-- Sidearea Ends -->*/}    
                    </Paper>
                </Grid>
            </Grid>
        </div>
    </div>
</div>
)
}
export default Service;