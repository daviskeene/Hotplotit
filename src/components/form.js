import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {CreateButton} from "../views/home"

import {
  Form,
  Col,
  Label,
  FormGroup,
  Button,
  Alert,
  Input,
  Row,
} from 'reactstrap';

import styled from 'styled-components'

class IdeaForm extends Component {

constructor(props) {
      super(props)
      this.state = {ideas: []}
  }


addIdea(event) {
      event.preventDefault();
      const idea = document.getElementById('new-idea').value
      if(idea) {
          this.setState(prev => ({
              ideas: prev.ideas.concat(idea),
          }))
      }
      console.log(this.state)
  }

  deleteIdea(idea) {
      console.log(idea);
      // make a separate copy of the array
      var array = [...this.state.ideas]; 
      var index = array.indexOf(idea);
      array.splice(index, 1);
      this.setState({ideas: array});
  }

  saveIdeas() {
    localStorage.setItem('ideas', this.state.ideas)
  }

  render() {
      return (
          <div>
              <Form onSubmit={(event) => this.addIdea(event)}>
                <FormBanner>
                  <h1>Create A Hotplot</h1>
                  <h4>Step One: Make a list of ideas!</h4>
                  <h5>Type an idea below and press 'enter' to add it to the list. Once you have added all your ideas, click "Continue"</h5>
                </FormBanner>
                  <FormGroup row>
                  < FormWrapper>
                    <Input id='new-idea' type='text' class='input-idea' placeholder='Add a new idea...'/>
                    </FormWrapper>
                  </FormGroup>
              </Form>   

              <AlertWrapper>
                          {this.state.ideas.map((idea) => 
                              <div><button type="submit" onClick={() => this.deleteIdea(idea)}>X</button><label>{idea}</label></div>
                          )}
              </AlertWrapper>

              <CreateButton>
              <a href="create2" class="btn" onClick={() => this.saveIdeas()}><span>Continue</span></a>
              </CreateButton>
          </div>
      )
  }
}

const FormWrapper = styled.div`
width: 50%;
height: 100%;
margin: 2em auto;
text-align: center;
align-items: center;
display: flex;
justify-content: center;
position: relative;
border-bottom: 2px solid #d9d9d9;
padding-bottom: 13px;
margin-bottom: 27px;

  & input {
    display: block;
    width: 100%;
    background: transparent;
    font-family: "Archivo Black", sans-serif;
    font-size: 18px;
    color: #333333;
    line-height: 1.2;
    padding: 0 5px;
    outline: none;
    border: none;
  }
`

const AlertWrapper = styled.div`
button, label{
  display: inline-block;
  vertical-align: middle;
  margin: 10px 5px;
}

button {
  outline: none;
  border: none;
}

width: 55%;
height: 100%;
margin: 2em auto;
text-align: center;
align-items: center;
display: flex;
justify-content: left;
position: relative;
flex-direction: row;
flex-wrap: wrap;
`

const FormBanner = styled.div`
& h1 {
    margin-top: 1.5em;
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



export default IdeaForm;