import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import p1 from './ek.jpg';
import p2 from './cb.jpeg';
import p3 from './mf.jpeg';

export default class Example extends Component {
    
    
    render() {
        return (
            <div>
                <div>
                    <img id="img" src={p1} />
                </div>
                <div>
                    <img id="img" src={p2} style={{float: right}}/>
                </div>
                <div>
                    <img id="img" src={p3} />
                </div>
            </div>
        );
    }
}

const linkStyle ={
    color: '#fff',
    textDecoration: 'none'
}
if (document.getElementById('page8')) {
    ReactDOM.render(<Example />, document.getElementById('page8'));
}



          