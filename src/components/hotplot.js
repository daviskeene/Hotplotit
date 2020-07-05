import ChartJS from "chart.js";
import "chartjs-plugin-datalabels";
import React, { Component } from "react";
import Chart from "chart.js";
import PropTypes from 'prop-types';

ChartJS.defaults.global.defaultFontFamily = "Archivo Black";

export default class HotPlot extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        const type = this.props.type;
        const isExample = type === "example";

        const COLORS = build_colors(
            [55, 120, 167],
            [95, 178, 106],
            this.props.data.length
        );

        const backgroundColor = COLORS;

        const options = {
                aspectRatio: 1,
                pointDot: true,
                  plugins: {
                      datalabels: {
                          display: false,
                          formatter: function(value, context) {
                            return context.chart.data.labels[context.dataIndex];
                        }
                      }
                  },
                  tooltips: {
                    callbacks: {
                       label: function(tooltipItem, data) {
                          var label = data.labels[tooltipItem.index];
                          return label;
                       }
                    }
                 },
                  legend: {
                      display: false
                  },
                  xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                }],
                scales: {
                    yAxes: [{ 
                      scaleLabel: {
                        display: true,
                        labelString: "Awesomeness"
                      }
                    }],
                    xAxes: [{ 
                      scaleLabel: {
                        display: true,
                        labelString: "Easiness"
                      }
                    }]
                  }
              };

        new Chart(myChartRef, {
            type: "scatter",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        data: this.props.data,
                        backgroundColor: backgroundColor,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }
                ]
            },
            options: options
        });
    }

    render() {
        return (
            <div>
                <canvas id="myChart" ref={this.chartRef} />
            </div>
        );
    }
}

HotPlot.propTypes = {
    labels: PropTypes.array,
    data: PropTypes.array,
    type: PropTypes.string
}

var build_colors = function(start, end, n) {
    //Distance between each color
    var steps = [(end[0] - start[0]) / n, (end[1] - start[1]) / n, (end[2] - start[2]) / n];

    //Build array of colors
    var colors = [start];
    for (var ii = 0; ii < n - 1; ++ii) {
        colors.push([
            Math.floor(colors[ii][0] + steps[0]),
            Math.floor(colors[ii][1] + steps[1]),
            Math.floor(colors[ii][2] + steps[2])
        ]);
    }
    colors.push(end);

    colors = colors.map(x => "rgb(" + x.join(",") + ")");

    return colors;
};
