import React, { Component } from "react";
import "./year.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Year extends Component {
  async componentDidMount() {
    const squares = document.querySelector('.squares');
    for (var i = 1; i < 365; i++) {
      // calculate level here
      const level = Math.floor(Math.random() * 3);
      if (level == 0) {
        squares.insertAdjacentHTML('beforeend', `<li data-level="${level}" style="margin-left: 0;"></li>`);
      } else {
        squares.insertAdjacentHTML('beforeend', `<li data-level="${level}" data-toggle="tooltip" data-placement="top" title="Tooltip on top" style="margin-left: 0;"></li>`);
      }
    }
  }
  render() {
    return (
      <div class="col">
        <div class="graph">
          <ul class="months">
            <li>Jan</li>
            <li>Feb</li>
            <li>Mar</li>
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
            <li>Jul</li>
            <li>Aug</li>
            <li>Sep</li>
            <li>Oct</li>
            <li>Nov</li>
            <li>Dec</li>
          </ul>
          <ul class="days">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul class="squares">
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Year;
