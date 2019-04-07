import React, { Component } from "react";
import "./spotify.css";
 
class Spotify extends Component {
  render() {
    return (
      <div class="container">
        <div class="activity-card">
          <div class="activity-header">
            <h3>Top 5 Artists</h3>
          </div>
          <div></div>
          <div class="table">
            <thead>
              <th colspan="2">Artist</th>
              <th>Times Played</th>
            </thead>
            <tbody>
              <tr>
                <td class="w-1">
                  <img class="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                </td>
                <td>Ariana Grande</td>
                <td>21</td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Spotify;