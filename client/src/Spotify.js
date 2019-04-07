import React, { Component } from "react";
import "./spotify.css";
 
class Spotify extends Component {
  render() {
    return (
      <div className="col col-lg-6">
        <div className="activity-card">
          <div className="activity-header">
            <h3>Top 5 Artists</h3>
          </div>
          <div></div>
          <table>
            <tbody>
            <tr>
              <th colSpan="2">Artist</th>
              <th>Song</th>
              <th>Times Played</th>
            </tr>
            <tr>
              <td className="w-1">
                <img className="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
              </td>
              <td>Ariana Grande</td>
              <td>7 Rings</td>
              <td>51</td>
            </tr>
            <tr>
              <td className="w-1">
                <img className="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
              </td>
              <td>Ariana Grande</td>
              <td>Break up with your girlfriend, I'm bored</td>
              <td>21</td>
            </tr>
            <tr>
              <td className="w-1">
                <img className="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
              </td>
              <td>Ariana Grande</td>
              <td>Thank u, next</td>
              <td>19</td>
            </tr>
            <tr>
              <td className="w-1">
                <img className="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
              </td>
              <td>Ariana Grande</td>
              <td>God is a Woman</td>
              <td>17</td>
            </tr>
            <tr>
              <td className="w-1">
                <img className="avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
              </td>
              <td>Ariana Grande</td>
              <td>Breathin</td>
              <td>16</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
 
export default Spotify;