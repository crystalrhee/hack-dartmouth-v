import React, { Component } from "react";
import "./home.css";
 
class Home extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="card">
          <div className="circle">
            <i className="fas fa-4x fa-phone-volume"></i>
          </div>
          <div>
            <p className="title">Meetings</p>
            <p>25 meetings</p>
          </div>
        </div>
        <div className="card">
          <div className="circle">
            <i className="fas fa-4x fa-file"></i>
          </div>
          <div>
            <p className="title">Work</p>
            <p>41 Stories</p>
          </div>
        </div>
        <div className="card">
          <div className="circle">
            <i className="fas fa-4x fa-utensils"></i>
          </div>
          <div>
            <p className="title">Break</p>
            <p>4 lunches</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;
