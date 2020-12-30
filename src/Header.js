import React from 'react'
import './header.css'
import {AppBar,Toolbar} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'


function Header() {
const classes = useStyles();

    return (
        <div className="header">
        
           <AppBar className={classes.header}  color="default"  position="static">
           <Toolbar>
           
           <ul>
           
           <li><Link to='/home'>Home </Link></li> 
            <li><Link to='/about'>About us </Link></li> 
            <li><Link to='/services'>Services</Link></li> 
            <li><Link to='/careers'>Careers</Link></li> 
            <li><Link to='/support'>Support</Link></li> 
            <li><Link to='/partners'>Partners</Link></li> 
            <li><Link to='/clients'>Clients</Link></li> 
            <li><Link to='/news'>News</Link></li> 
            <li><Link to='/contact'>Contact us</Link></li> 

            </ul>
        
            </Toolbar>
           </AppBar>
          
           </div>
    )
}

export default Header
