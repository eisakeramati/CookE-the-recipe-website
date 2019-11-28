import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import p1 from './laravel.png';

export default class Example extends Component {
    
    
    render() {
        return (
            <div style ={{ 'margin-top':'30px','margin-bottom':'20px', 'background-color': '#e9967a','color':'#484848', 'font-size':'20px', 'overflow-x':'auto','border-bottom': 'solid','border-top': 'solid','border-right': 'solid', 'font-family': 'arial', 'text-align':'center'}}>
                 
         <p style ={{ 'margin-top':'10px'}}>Laravel is a free, open-source PHP web framework, created by Taylor Otwell. </p>
         <p> intended for the development of web applications following the model–view–controller</p>
         <p>architectural pattern and based on Symfony.</p>
         <p>Laravel is used to take care of common tasks used in the development of most web probjects,</p>
         <p>such as authentication, routing, sessions and caching.It is notable for its built-in templates and</p> 
         <p>widgets, strong web app security, bult-in command line tool called Artisan to automate repetitive tasks,</p>
         <p>and ease of unit testing.</p>
         
        <ul>
            <b style={{'text-align':'left'}}>Any Famous websites?</b>

            <li>Deltanet Travel</li>
            <li>MyRank</li>
            <li>Larasocial</li>
            <li>Fox24</li>
        </ul>
      <br></br>
      <br></br>
      <a href={"https://laravel.com/"}><img id="imglara" src={p1}/></a>
      <br></br>

      

                </div>
        );
    }
}

const linkStyle ={
    color: '#fff',
    textDecoration: 'none'
}
if (document.getElementById('page3')) {
    ReactDOM.render(<Example />, document.getElementById('page3'));
}



          