import React from 'react'
import './App.css';
import Header from './Header.js'
import {Container} from '@material-ui/core'
import useStyles from './styles'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import ServiceComponent from './components/service'
import HomeComponent from './components/home'
import AboutComponent from './components/about'
import CareersComponent from './components/careers'
import ClientsComponent from './components/clients'
import NewsComponent from './components/news'
import ContactComponent from './components/contact'


function App() {
const classes = useStyles();

  return (
    <Router>
      <Container className={classes.root} maxWidth="md">
        {/* Header  */}
        <Header />
        <Route path="/home"  exact component = {HomeComponent} />
        <Route path="/about" component = {AboutComponent} />
        <Route path="/careers" component = {CareersComponent} />
        <Route path="/clients" component = {ClientsComponent} />
        <Route path="/news" component = {NewsComponent} />
        
        <Route path="/services" component = {ServiceComponent} />
      </Container>
      </Router>
  );
}

export default App;
