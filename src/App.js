import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import MyChart1 from './MyChart1/MyChart1';
import MyChart2 from './MyChart2/MyChart2';




function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
          <AboutPage/>
          </Route>
          <Route path="/login">
          <LoginPage/>
          </Route>
          <Route path="/">
          <HomePage/>
          </Route> 
        </Switch>
      </div>
      <MyChart1/>
      <MyChart2/>
      <Footer/>
    </Router>
  );
}

export default App;
