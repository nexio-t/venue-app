import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import Navbar from "./components/Navbar"; 
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
         <Navbar/>
        <Switch>
         <Route exact path="/" component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
