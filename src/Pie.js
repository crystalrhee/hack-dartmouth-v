import React, { Component } from "react";
import * as d3 from 'd3';
import "./pie.css";

const data = [1, 2, 3];
const Slice = props => {
  let { pie } = props;
  let arc = d3.arc().innerRadius(0).outerRadius(100);
  let interpolate = d3.interpolateRgb("#33393d", "#eee1e6");
  return pie.map((slice,index) => {
    let sliceColor = interpolate(index / (pie.length - 1));
    return <path d={arc(slice)} fill={sliceColor} />;
  });
}

class Pie extends Component {
  render() {
    const height = 400;
    const width = 400;
    let pie = d3.pie()(data);
    return (
      <div class="col col-md-6">
        <div class="card">
          <svg height={height} width={width}>
            <g tranform={'translate(${width/2},${height/2})'}>
              <Slice pie={pie}/>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
 
export default Pie;
