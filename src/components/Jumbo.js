import React, { Component } from 'react';
import {
  Container,
  Jumbotron
} from 'reactstrap';
import './Jumbo.css';

class Jumbo extends Component {
   render() {
      return (
       <div>
       <Container fluid>
         <Jumbotron fluid className="container-one">
          <p className="display-3">Peace Makers</p>
          <p className="lead">
          </p>
         </Jumbotron>
       </Container>
       </div>
      );
    }
  }

export default Jumbo;