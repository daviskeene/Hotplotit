import React , {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container } from 'react-grid-system';
import styled from "styled-components";


class Home extends Component {
    state = {

    }

    render() {
        return(
            <span>
            <Container>
            <Header />
            </Container>

            <Banner>
                <h1>Hotplotit </h1>
                <h3>Organize your thoughts.</h3>
            </Banner>
            <h4>Testing.</h4>

            <Footer />
            </span>
        )
    }
}

const Banner = styled.div`



& h1 {
    margin-top: 3em;
    width: 100%;
    font-size: 3.6rem;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Archivo Black", sans-serif;
    
    /* Create the gradient. */
    background-image: linear-gradient(240deg, #ffc3a0, #ff91af);
    
    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;
  
    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}
`;

export default Home;