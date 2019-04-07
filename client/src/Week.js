import React, { Component } from "react";
 
class Week extends Component {
  render() {
    return (
      <div className="col col-md-6">
        <div className="card">
          <div className="circle">
            <i className="fas fa-4x fa-phone-volume"></i>
          </div>
          <div>
            <p className="title">Meetings</p>
            <p>25 meetings</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Week;
