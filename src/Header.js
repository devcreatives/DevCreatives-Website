import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import useStyles from './styles'
import {Nav,Navbar} from 'react-bootstrap'


function Header() {
const classes = useStyles();

    return (

        <Navbar className={classes.header}  expand="lg">
            <Navbar.Brand className={classes.brand} href="/home"  >DevCreatives++</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                        <li className="nav-item"><Link to='/home'>Home </Link></li> 
                        <li className="nav-item"><Link to='/about'>About us </Link></li> 
                        <li className="nav-item"><Link to='/services'>Services</Link></li> 
                        <li className="nav-item"><Link to='/careers'>Careers</Link></li> 
                        <li className="nav-item"><Link to='/support'>Support</Link></li> 
                        <li className="nav-item"><Link to='/partners'>Partners</Link></li> 
                        <li className="nav-item"><Link to='/clients'>Clients</Link></li> 
                        <li className="nav-item"><Link to='/news'>News</Link></li> 
                        <li className="nav-item"><Link to='/contact'>Contact us</Link></li> 

                    </ul>
                </Nav>
    
             </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
