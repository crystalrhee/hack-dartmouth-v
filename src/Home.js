import React, { Component } from "react";
import "./home.css";
 
class Home extends Component {
  render() {
    return (
      <div class="container">
        <div class="gallery">
          <div class="card">
            <div class="circle">
              <i class="fas fa-4x fa-phone-volume"></i>
            </div>
            <div>
              <p class="title">Meetings</p>
              <p>25 meetings</p>
            </div>
          </div>
          <div class="card">
            <div class="circle">
              <i class="fas fa-4x fa-file"></i>
            </div>
            <div>
              <p class="title">Work</p>
              <p>41 Stories</p>
            </div>
          </div>
          <div class="card">
            <div class="circle">
              <i class="fas fa-4x fa-utensils"></i>
            </div>
            <div>
              <p class="title">Break</p>
              <p>4 lunches</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;
