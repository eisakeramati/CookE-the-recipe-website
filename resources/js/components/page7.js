import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

import ReactDOM from 'react-dom';
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
            <div  style={{'font-size':'50px !important'}}>
                <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="https://www.allrecipes.com/" style={{'color':'black', 'font-size':'50%'}}>AllRecipes</Nav.Link>
                <Nav.Link href="https://www.foodnetwork.com/" eventKey="link-1" style={{'color':'black', 'font-size':'50%'}}>FoodNetwork</Nav.Link>
                <Nav.Link href="https://www.thekitchn.com/" eventKey="link-2" style={{'color':'black', 'font-size':'50%'}}>TheKitchen</Nav.Link>
                <Nav.Link href="https://www.yummly.com/" eventKey="link-2" style={{'color':'black', 'font-size':'50%'}}>Yummly</Nav.Link>
                <Nav.Link href="https://www.chowhound.com/" eventKey="link-2" style={{'color':'black', 'font-size':'50%'}}>Chow</Nav.Link>
                <Nav.Link href="https://www.epicurious.com/" eventKey="link-2" style={{'color':'black', 'font-size':'50%'}}>epicurious</Nav.Link>
                </Nav>
            </div>

        );
}
}
if (document.getElementById('page7')) {
    ReactDOM.render(<Example />, document.getElementById('page7'));}


