import React , {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import IdeaForm from '../components/form'
import {Banner} from '../views/home'
import { Container, Row, Col } from 'react-grid-system';
import styled from "styled-components";
import HotPlot from "../components/hotplot"
import { Helmet } from 'react-helmet'

export default class CreatePlot extends Component{

    // comment for vercel deploy
    state = {
        ideas: localStorage.getItem("ideas").split(","),
        data: [],
        ideaIndex: 0
    }

    componentDidMount () {
        this.updateSliderValues();
    }

    getResults() {
        localStorage.setItem("data", JSON.stringify(this.state.data))
        localStorage.setItem("labels", this.state.labels)
        window.location.replace("/results")
    }

    printState() {
        console.log(this.state);
        this.state.ideas.forEach((element) => {
            console.log(element);
        })
    }

    addData() {
        let x = document.getElementById("easiness").value / 10
        let y = document.getElementById("awesomeness").value / 10

        this.setState(prev => ({
            data: prev.data.concat({x: x, y: y}),
        }))
        if (this.state.ideaIndex <= this.state.ideas.length) {
            this.state.ideaIndex++;
        }

    console.log(this.state)

    }

    getSortedAwesome() {
        let sortable = [];
        for (let key in this.state.data) {
            sortable.push([this.state.ideas[key], this.state.data[key]]);
        }

        sortable.sort(function(a, b) {
            return b[1].y - a[1].y;
        });

        console.log(sortable);
        let ret = [];

        Object.values(sortable).map((val) => {
            ret.push(val[0] + " (" + val[1].y + ")");
        });
        console.log(ret);
        return ret;
    }

    getSortedEasy() {
        let sortable = [];
        for (let key in this.state.data) {
            sortable.push([this.state.ideas[key], this.state.data[key]]);
        }

        sortable.sort(function(a, b) {
            return b[1].x - a[1].x;
        });

        console.log(sortable);
        let ret = [];

        Object.values(sortable).map((val) => {
            ret.push(val[0] + " ("+val[1].x +")");
        });
        console.log(ret);
        return ret;
    }

    updateSliderValues() {
        let x = document.getElementById("easiness");
        let y = document.getElementById("awesomeness");
        let awesomeSpan = document.getElementById("awesome-value");
        let easySpan = document.getElementById("easy-value");

        easySpan.innerHTML = x.value / 10;
        awesomeSpan.innerHTML = y.value / 10;

        x.oninput = function() {
            easySpan.innerHTML = this.value / 10;
        }
        y.oninput = function() {
            awesomeSpan.innerHTML = this.value / 10;
        }
    }

    render() {
        return (
            <span>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rank Items</title>
            </Helmet>
            <Header />
            <ContainerWrapper>
            <FormBanner>
                <h1>Create A Hotplot</h1>
                <h3>Step Two: Ranking Items</h3>
                <h4>For each of the following items, rank them in terms of their awesomeness and easiness.</h4>
                <br></br>
                {/* <button onClick={() => this.addData(1, 4)}>Add Data</button> */}
            </FormBanner>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1>Current Item: <u>{this.state.ideas[this.state.ideaIndex]}</u></h1>
                            <h4>How <i>awesome</i> is this? <span id="awesome-value"></span> / 10</h4>
                            <span>😐</span>
                            <input type="range" min="0" max="100" defaultValue="50" id="awesomeness" class="slider" name="awesomeness"></input>
                            <span>😁</span>

                            <h4>How <i>easy</i> is this? <span id="easy-value"></span> / 10</h4>
                            <span>❌</span>
                            <input type="range" min="0" max="100" defaultValue="50" id="easiness" class="slider"></input>
                            <span>✅</span>
                            
                            <br></br>
                                <button onClick={((this.state.ideaIndex === this.state.ideas.length)) ? this.getResults() : () => this.addData()}>{(this.state.ideaIndex === this.state.ideas.length - 1) ? "Results" : "Next"}</button>
                        </Col>
                        <Col>
                        <h1>Current Rankings:</h1>
                        <Row>
                            <Col>
                            <h2>Most Awesome</h2>
                            {this.getSortedAwesome().map((idea) => 
                              <div><label>{idea}</label></div>
                          )}
                            </Col>
                            <Col>
                            <h2>Easiest</h2>
                            {this.getSortedEasy().map((idea) => 
                              <div><label>{idea}</label></div>
                          )}
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            </ContainerWrapper>
            <Footer />
            </span>
        )
    }
}

const ContainerWrapper = styled.div`
    margin-top: 10em;

    .slidecontainer {
        width: 100%;
}

.slider {
    width: 50%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  
  .slider:hover {
    opacity: 1;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4CAF50;
  }
  
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
  }
  
  button{
    display:inline-block;
     padding:0.35em 1.2em;
     border:0.1em solid #FFFFFF;
     margin:0 0.3em 0.3em 0;
     border-radius:0.12em;
     box-sizing: border-box;
     text-decoration:none;
     font-family:'Archivo Black', sans-serif;
     font-weight:500;
    font-size: 16px;
     color:#000;
     text-align:center;
     transition: all 0.2s;
}
`

const FormBanner = styled.div`
& h1 {
    margin-top: -1em;
    width: 100%;
    font-size: 4.0rem;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Archivo Black", sans-serif;


	background: linear-gradient(-45deg, #ff91af, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
  
    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}
`;

const PlotWrapper = styled.div`
    margin-top: 2.5em;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`