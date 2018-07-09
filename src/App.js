import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import  Home from './components/Home/Home';
import  Curators from './components/Curators/Curators';
import  Amoca from './components/Amoca/Amoca';
import  About from './components/About/About';
import  Partners from './components/Partners/Partners';
import  Where from './components/Where/Where';
import  Contact from './components/Contact/Contact';
import  Thanks from './components/Thanks/Thanks';

import './App.css';

import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
      
     <Router>

     <div>

     
     {/*
  
      <Route exact path="/archive" component={Archive}  />
     */}

     <Route exact path="/thanks" component={Thanks}  />

     <Route exact path="/contact" component={Contact}  />

     <Route exact path="/where" component={Where}  />

     <Route exact path="/partners" component={Partners}  />

     <Route exact path="/about" component={About}  />

     <Route exact path="/curators" component={Curators}  />
     <Route exact path="/amoca" component={Amoca}  />

      <Route exact path="/" component={Intro}  />
      <Route exact path="/home" component={Home}  />
      </div>
      </Router>

  </div>
     
    );
  }
}

export default App;
