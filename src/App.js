import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Spotify from "./Spotify";
import Pie from "./Pie";
import Year from "./Year";
import logo from './react-logo.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="header">
            <div className="container">
              <img className="logo" src={logo}/> 
            </div>
          </div>
          <div className="container">
            <h1 className="dashboard">Dashboard</h1>
          </div>
          <div className="container">
            <ul>
              <li><NavLink to="/day">Day</NavLink></li>
              <li><NavLink to="/year">Year</NavLink></li>
            </ul>
          </div>
          <div className="container row">
            <Route path="/" component={Home}/>
            <Route path="/" component={Spotify}/>
            <Route path="/" component={Pie}/>
            <Route path="/year" component={Year}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;