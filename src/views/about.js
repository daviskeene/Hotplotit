import React , {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container } from 'react-grid-system';
import styled from "styled-components";

import HotPlot from '../components/hotplot'

class About extends Component {
    state = {


    }

    render() {
        return(
            <span>
            <Container>
            <Header />
            </Container>

            <Banner>
                <h1>What is a Hot Plot?</h1>
                <p>A hotplot is a way for organizations and people to prioritize their ideas.</p>
                <p>Out of a list of ideas, each one is ranked by <b><i>awesomeness</i></b> and <b><i>difficulty</i></b>.</p>
                <p>The most awesome and the least difficult ideas are prioritized first.</p>
            </Banner>
            
            <PlotWrapper>
                <HotPlot type={'example'} data={[{
                    x: 1,
                    y: 2
                }, {
                    x: 3,
                    y: 10
                }, {
                    x: 10,
                    y: 7
                }]} labels={["I'm not awesome or easy!", "I'm awesome, but not easy!", "I'm awesome and easy!"]} aspectRatio={1}/>
            </PlotWrapper>
                
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
    width: 100%;
    height: 100%;
    margin-top: 2.5em;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
`

export default About;