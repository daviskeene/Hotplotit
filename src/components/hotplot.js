import ChartJS from "chart.js";
import "chartjs-plugin-datalabels";
import React, { Component } from "react";
import Chart from "chart.js";
import PropTypes from 'prop-types';

ChartJS.defaults.global.defaultFontFamily = "Archivo Black";

export default class HotPlot extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        const type = this.props.type;
        const isExample = type === "example";
        const useNameLabels = this.props.useNameLabels;
        console.log(useNameLabels);

        const COLORS = build_colors(
            [55, 120, 167],
            [95, 178, 106],
            this.props.data.length
        );

        const backgroundColor = COLORS;

        const options = {
                layout: {
                    padding: {
                        left: 100,
                        right: 100,
                        top: 50,
                        bottom: 50
                    }
                },
                beginAtZero: true,
                aspectRatio: this.props.aspectRatio,
                pointDot: true,
                responsive: true,
                maintainAspectRatio: false,
                  plugins: {
                      datalabels: {
                          display: this.props.showLabels,
                          formatter: function(value, context) {
                            return context.chart.data.labels[context.dataIndex];
                            },
                          align: 'top',
                          font: {
                              size: 20,
                          },
                          padding: 10
                      }
                  },
                  legend: {
                      display: false
                  },
                  xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                }],
                tooltips: (useNameLabels) ? {
                    callbacks: {
                       label: function(tooltipItem, data) {
                        return (useNameLabels) ? data.labels[tooltipItem.index] : 0;
                       }
                    }
                    } : {

                },
                scales: {
                    yAxes: [{ 
                      scaleLabel: {
                        display: true,
                        labelString: "Awesomeness",
                        fontSize: 20
                      }
                    }],
                    xAxes: [{ 
                      scaleLabel: {
                        display: true,
                        labelString: "Easiness",
                        fontSize: 20
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
    type: PropTypes.string,
    aspectRatio: PropTypes.number,
    showLabels: PropTypes.bool,
    useNameLabels: PropTypes.bool
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
