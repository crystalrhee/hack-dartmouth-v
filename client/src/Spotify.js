import React, { Component } from "react";
import _ from "lodash";
import "./spotify.css";

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();
 
class Spotify extends Component {

  constructor() {
    super();
    this.state = {
      topTracks: []
      }
  }
  

  componentDidMount() {
    spotifyApi.getMyTopTracks({time_range: "short_term"}).then((response) => {

      let topTracks = response.items.slice(0, 5);

      spotifyApi.getAudioFeaturesForTracks(_.map(topTracks, track => {
        return track.id;
      })).then(response => {
        for (let i = 0; i < response.audio_features.length; i++) {
          topTracks[i].features = response.audio_features[i];
        }

        this.setState({topTracks: topTracks})

      })
    })
  }

  render() {

    let tracks = [];

    if (this.state.topTracks.length > 0) {

      _.map(this.state.topTracks, track => {
        tracks.push(
          <tr key={track.id}>
            <td className="w-1">
                <img className="avatar" src={track.album.images[2].url}/>
              </td>
              <td>{track.artists[0].name}</td>
              <td>{track.name}</td>
              <td>{track.features.valence}</td>
          </tr>
        )
      })
    }

    return (
      <div className="col col-lg-6">
        <div className="activity-card">
          <div className="activity-header">
            <h3>Top 5 Songs</h3>
          </div>
          <div></div>
          <table>
            <tbody>
            <tr>
              <th colSpan="2">Artist</th>
              <th>Song</th>
              <th>Postiveness</th>
            </tr>
            {tracks}
            </tbody>
          </table>
        </div>
      </div>
    );
    }
}
 
export default Spotify;