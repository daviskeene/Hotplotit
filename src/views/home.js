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
                <br></br>
            </Banner>
            <CreateButton>
                <a href="create" class="btn"><span>Get Started!</span></a>
            </CreateButton>

            <Footer />
            </span>
        )
    }
}

const Banner = styled.div`
& h1 {
    margin-top: 2.5em;
    width: 100%;
    font-size: 4.5rem;
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

export const CreateButton = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 30vh;

.btn {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    background-color: #222;
    padding: 17px 60px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0,0,0,0.20);
  }
  
  .btn span {
    position: relative; 
    z-index: 1;
  }
  
  .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #BD3381;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }
  
  .btn:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }

  .btn:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
  
`

export default Home;