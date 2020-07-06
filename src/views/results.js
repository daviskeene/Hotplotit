import React , {Component} from 'react'
import Header from '../components/header'
import HotPlot from "../components/hotplot"
import styled from "styled-components";
import {FormBanner} from "../components/form"
import {CreateButton} from "../views/home"
import {Helmet} from 'react-helmet';

export default class Results extends Component {

    state  = {
        labels: localStorage.getItem("ideas").toString().split(","),
        data: JSON.parse(localStorage.getItem("data"))
    }

    getResultsList() {
        let results = [];
        for (let i = 0; i < this.state.labels.length; i++) {
            let dataObj = this.state.data[i];
            results.push([this.state.labels[i], this.distanceFromOrigin(dataObj.x, dataObj.y)])
        }

        results.sort(function(a, b) {
            return b[1] - a[1];
        });
        return results;
    }

    distanceFromOrigin(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    }

    render() {

        return(
            <span>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Results</title>
            </Helmet>
                <Header />
                <FormBanner>
                <h1>Results</h1>
                <h3>Here's what we think you should prioritize, from first to last:</h3>
                {this.getResultsList().map((result, index) => 
                              <div><label>{index + 1}: {result[0]}: ({Number(result[1]).toFixed(2)})</label></div>
                          )}
                </FormBanner>

                <PlotWrapper>
                <div class="chart-container">
                <h2>HotPlot Chart</h2>
                <HotPlot
                    data={this.state.data}
                    labels={this.state.labels}
                    aspectRatio={1/2}
                    useNameLabels={false}
                    />
                </div>
                </PlotWrapper>

                <FooterWrapper>
                <CreateButton>
                <a href="/create" class="btn"><span>Make Another</span></a>
                </CreateButton>

                <CreateButton>
                <a href="/" class="btn"><span>Back To Home</span></a>
                </CreateButton>
                </FooterWrapper>
            </span>
        )

    }
}

const PlotWrapper = styled.div`
    margin-top: 2.5em;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

    .chart-container {
        width: 1000px;
        height: 500px
    }
`

const FooterWrapper = styled.div`
margin-top: 4em;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
`
