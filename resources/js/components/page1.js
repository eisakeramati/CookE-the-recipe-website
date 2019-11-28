import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import p2 from './react.png';

export default class Example extends Component {
    
    
    render() {
        return (
            <div style ={{ 'margin-top':'30px', 'background-color': '#CCFFFF','color':'#484848', 'font-size':'20px', 'overflow-x':'auto', 'border-bottom': 'solid','border-top': 'solid','border-left': 'solid', 'border-right':'solid' ,'font-family': 'arial', 'text-align':'center'}}>
                 
         <p style ={{ 'margin-top':'10px'}}>ReactJS is a JavaScript library for building user interfaces, specifically for single page applications.</p>
         <p>It is used for handling view layer for web and mobile apps.</p>
         <p>It is optimal for fetching rapidly changing data.</p>
         <p>Notable features are responsiveness, a virtual broswer (DOM), and diving applications into components,</p>
         <p> which are typically written using JSX. According to StackOverflow's 2018 surveys, React ranks #3 in most popular.</p>
        <p>Weaknesses include only being a UI library (having to download additional libraries to handle</p> 
        <p>other parts of app) and there is no predefined way to structure your app.</p>
        <ul>
            <b style={{'text-align':'left'}}>Any Famous websites?</b>

            <li>Facebook</li>
            <li>Instagram</li>
            <li>Codeacademy</li>
            <li>Khan Academy</li>
            <li>Yahoo Mail</li>
        </ul>

      <a href={"https://reactjs.org/"}><img id="img2" src={p2} /></a>

                </div>
        );
    }
}

const linkStyle ={
    color: '#fff',
    textDecoration: 'none'
}
if (document.getElementById('page1')) {
    ReactDOM.render(<Example />, document.getElementById('page1'));
}



          