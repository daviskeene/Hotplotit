import React , {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container } from 'react-grid-system';
import styled from "styled-components";
import {Helmet} from 'react-helmet';

import HotPlot from '../components/hotplot'

class About extends Component {
    state = {

    }

    render() {
        return(
            <span>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
            </Helmet>
            <Container>
            <Header />
            </Container>

            <Banner>
                <h1>What's a HotPlot?</h1>
                <p>A <i>HotPlot</i> is a way for organizations and people to prioritize their ideas.</p>
                <p>Out of a list of ideas, each one is ranked by <b><i>awesomeness</i></b> and <b><i>difficulty</i></b>.</p>
                <p>The most awesome and the least difficult ideas are prioritized first.</p>
            </Banner>
            
            <PlotWrapper>
                <div class="chart-container">
                <HotPlot type={'example'} data={[{
                    x: 1,
                    y: 2
                }, {
                    x: 3,
                    y: 10
                }, {
                    x: 10,
                    y: 7
                }]} labels={["I'm not awesome or easy!", "I'm awesome, but not easy!", "I'm awesome and easy!"]}
                 aspectRatio={1}
                 showLabels={false}
                 useNameLabels={true} />
                </div>
            </PlotWrapper>
            <p>We should prioritize the tasks farthest from the origin.</p>
            <p>In the above example, we would prioritize the farthest right idea first.</p>
            <Footer />
            </span>
        )
    }
}

const Banner = styled.div`
& h1 {
    margin-top: 2.5em;
    width: 100%;
    font-size: 3.5rem;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Archivo Black", sans-serif;
}
`

const PlotWrapper = styled.div`
    margin-top: 2.5em;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

    .chart-container {
        width: 750px;
        height: 250px;
    }
`

export default About;