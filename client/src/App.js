import React, { Component } from 'react';
import './App.css';
import BarChart from './chart.js';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Spotify from "./Spotify";
import Week from "./Week";
import logo from './react-logo.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      })
  }
  render() {
    return (
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
        <BarChart></BarChart>
        <HashRouter>
        <div>
          <div className="container">
            <h1 className="dashboard">Dashboard</h1>
          </div>
          <div className="container">
            <ul>
              <li><NavLink to="/day">Day</NavLink></li>
              <li><NavLink to="/week">Week</NavLink></li>
            </ul>
          </div>
          <div className="container row">
            <Route path="/" component={Home}/>
            <Route path="/" component={Spotify}/>
            <Route path="/week" component={Week}/>
          </div>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
