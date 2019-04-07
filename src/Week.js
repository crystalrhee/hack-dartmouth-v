import React, { Component } from "react";
 
class Week extends Component {
  render() {
    return (
      <div class="col col-md-6">
        <div class="card">
          <div class="circle">
            <i class="fas fa-4x fa-phone-volume"></i>
          </div>
          <div>
            <p class="title">Meetings</p>
            <p>25 meetings</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Week;
