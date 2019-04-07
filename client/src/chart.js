import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
  
        var date1 = new Date(2019,4,1);
        var date2 = new Date(2019,4,2);
        var date3 = new Date(2019,4,3);
        var date4 = new Date(2019,4,4);
        var date5 = new Date(2019,4,5);
        var date6 = new Date(2019,4,6);
        const data = {
            date1 : {"gym": 0.4, "lunch": 0.2, "work": 0.4},
            date2 : {"gym": 0.3, "lunch": 0.1, "work": 0.6},
            date3 : {"gym": 0.2, "lunch": 0.2, "work": 0.6},
            date4 : {"gym": 0.3, "lunch": 0.8, "work": 0.1},
            date5 : {"gym": 0.3, "lunch": 0.5, "work": 0.2},
            date6 : {"gym": 0.3, "lunch": 0.2, "work": 0.5},
        };
        const dates = Object.keys(data)
         
        const margin = 60;
        const width = 700
        const height = 300
        const svg = d3.select('svg');
        const chart = svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`);

        var xScale = d3.scaleTime()
          .domain(dates)
          .nice(d3.timeDay)
          .range([0, width]);
        
          const yScale = d3.scaleLinear()
          .range([height, 0])
          .domain([0, 1]);
    }
    render() {
        return <span></span>
    }
}


export default BarChart;
