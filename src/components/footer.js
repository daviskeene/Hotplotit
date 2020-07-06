import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    state = {
    }
  
    render () {
        return (
          <footer>
            <Container>
              <Row>
                <Col>
                  <p>
                    <br></br>
                    <a href="https://daviskeene.com">daviskeene.com</a>
                  </p>
                </Col>
              </Row>
            </Container>
          </footer>
        )
     }
  }