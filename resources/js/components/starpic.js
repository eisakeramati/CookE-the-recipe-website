import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import p2 from './4.5stars.png';

export default class Example extends Component {
    
    
    render() {
        return (
           

      <img id="img3" src={p2} />


        );
    }

}



const linkStyle ={
    color: '#fff',
    textDecoration: 'none'
}
if (document.getElementById('star')) {
    ReactDOM.render(<Example />, document.getElementById('star'));
}

          