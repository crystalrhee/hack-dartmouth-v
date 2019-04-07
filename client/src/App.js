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
import Pie from "./Pie";
import Year from "./Year";
import logo from './react-logo.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import axios from 'axios';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

const testData = {
  dateTime : "2012-04-23T18:25:43.511Z",
  positivity : 0.6
}

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
    this.handleClick = this.handleClick.bind(this)

  }
  async handleClick () {
    // axios.post('https://hackdartmouth-2019.firebaseio.com/',{ testData })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    await axios.post('https://us-central1-hackdartmouth-2019.cloudfunctions.net/db_UpdateEvents',{"datetime": "2012-04-23T18:25:43.511Z","positivity": 0.6})
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
        console.log(response)
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
          <div className="container row">
            <Route path="/" component={Home}/>
            <Route path="/" component={Spotify}/>
            <Route path="/" component={Pie}/>
            <Route path="/" component={Year}/>
          </div>
        </div>
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
        </div>
        { 
          this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
        <div className='button__container'>
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button>
          <p>{this.state.username}</p>
        </div>
        <BarChart></BarChart>
      </HashRouter>
    );
  }
}
 
export default App;