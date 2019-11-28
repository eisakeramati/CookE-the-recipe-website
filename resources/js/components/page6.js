import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import './style.css'
import logo from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './4.png';
import p5 from './5.png';
import p6 from './6.png';
import p7 from './7.png';
import p8 from './8.png';
import p9 from './9.png';
export default class Example extends Component {

    render() {
        return (
            
            <div style={{ 'margin-top':'30px', 'border-color':'#BDB76B' ,'background-color': '#FFFACD','color':'#484848', 'font-size':'20px', 'overflow-x':'auto', 'border-radius': '0px', 'border-style': 'solid', 'font-family': 'arial', 'width': '1000px', 'margin-left': 'auto', 'margin-right': 'auto', 'text-align':'center'}}> 

              <h2 id="in">
                    Your online cook book!
                  </h2> 
                  <ul id="inn">
                      <li>
                          Share your recipes and cooking ideas here.
                          </li>
                          <li >
                          Thousands of amazing homemade recipes.
                          </li>
                          <li >
                          login and start posting!
                          </li>
                          <li >
                          Also learn how to create a beautiful responsive page.
                          </li>
                      </ul> 
                      <div>
                
                </div>
                </div>
                
        );
}
}





if (document.getElementById('p1')) {
    ReactDOM.render(<Examplepart1 />, document.getElementById('p1'));
}
if (document.getElementById('p2')) {
    ReactDOM.render(<Examplepart1 />, document.getElementById('p2'));
}
if (document.getElementById('p3')) {
    ReactDOM.render(<Examplepart1 />, document.getElementById('p3'));
}
if (document.getElementById('p4')) {
    ReactDOM.render(<Examplepart1 />, document.getElementById('p4'));
}
if (document.getElementById('p5')) {
    ReactDOM.render(<Examplepart1 />, document.getElementById('p5'));
}
if (document.getElementById('p6')) {
    ReactDOM.render(<Examplepart1 />, document.getElementById('p6'));
}
if (document.getElementById('p7')) {
    ReactDOM.render(<Examplepart1 />, document.getElementById('p7'));
}

if (document.getElementById('page6')) {
    ReactDOM.render(<Example />, document.getElementById('page6'));
}
