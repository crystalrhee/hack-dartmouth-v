import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Spotify from "./Spotify";
import Week from "./Week";
import logo from './react-logo.png';
 
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
          <h1 className="container">Dashboard</h1>
          <div className="container">
            <ul>
              <li><NavLink to="/day">Day</NavLink></li>
              <li><NavLink to="/week">Week</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/" component={Spotify}/>
            <Route path="/week" component={Week}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;