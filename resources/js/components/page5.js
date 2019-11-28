import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import p2 from './react.png';
import bgimage from './ffin.jpg';

export default class Example extends Component {
    
    
    render() {
        return (
            <div >
            <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', 'text-align':'center', 'border-bottom':'solid'}}>
  <h1><span id="yeah">CookE </span>  is your cooking blog</h1>
        <p style={{'font-size':"120%"}}>Share your ideas and recipes!</p>
        <p>
  <Button variant="primary" style={{'margin-right':'10px'}} href="/login">login</Button>

  <Button variant="success" href="/register">register</Button>
      </p>
</Jumbotron>
</div>
        );
    }
}


if (document.getElementById('page5')) { 
    ReactDOM.render(<Example />, document.getElementById('page5'));
}


