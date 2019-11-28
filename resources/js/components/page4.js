import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import p1 from './11.png';
import p2 from './12.png';
import p3 from './13.png';
import p4 from './14.png';
import p5 from './15.png';
import p6 from './16.png';
import p7 from './17.png';
import p8 from './18.png';
import p9 from './19.png';
import p10 from './lara.gif';
import p11 from './re.gif';
export default class Example extends Component {

    render() {
        return (
            <div style={{ 'margin-top':'30px', 'background-color': '#B8B8B8','color':'#484848', 'font-size':'20px', 'overflow-x':'auto', 'border-radius': '5px', 'border-style': 'solid', 'font-family': 'arial', 'width': '1200px', 'margin-left': 'auto', 'margin-right': 'auto', 'text-align':'center'}}> 

                <span style={{'text-align':'center', 'margin-top':'10px'}}><p>A brief instruction on how to install the relevant and needed apps for setting up the environment</p></span>
                <span style={{'text-align':'center'}}><p>for starting web development with Laravel and React.</p></span>
                <div style={{'background-color': 'white', 'border-top':'solid', 'border-bottom':'solid'}}>
                <img  style={{'border-radius':'10px'}} src={p10}/>
                <img  style={{'border-radius':'10px', 'height':'130px', 'width':'150px'}} src={p11}/>
                </div>
                <p id = "first2" style={{'margin-top':'15px'}}><b>Step 1:</b>Having a working PC or laptop!</p>
                <p id="first2"><b>Step 2:</b> Installing XAMPP, </p>
                <p id ="second">XAMPP is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting </p>
                <p id ="second">mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages</p>
                <p id ="second">You can install XAMPP from this <a href={'https://www.apachefriends.org/index.html'}>link.</a></p>
                <img id="img" src={p1} />
                <p id ="second" style={{ 'margin-top':'25px', 'margin-bottom':'25px'}}>XAMPP gives you many abilities including phpmyadmin and a Database where you can use for the backend of your website: </p>
                <img id="img" src={p2} />
                
                <p id="first2"><b>Step 3:</b> Installing Composer </p>
                <p id ="second">Composer is an application-level package manager for the PHP programming language that provides a standard format for managing dependencies of PHP  </p>
                <p id ="second">software and required libraries. It was developed by Nils Adermann and Jordi Boggiano, who continue to manage the project.</p>
                <p id ="second">You can install Composer from this <a href={'https://getcomposer.org/'}>link.</a></p>
                <img id="imgcomp" src={p3} />
                <p id ="second" style={{ 'margin-top':'25px', 'margin-bottom':'25px'}}>Remeber when installing Composer set the location of your php as your XAMPP's (@ '../XAMPP/php/php.exe') </p>
                <img id="imgcomp" src={p4} />
                <p id="first2"><b>Step 4:</b> Installing Visual Studio Code:</p>
                <p id ="second">VS code is a professional text editor that comes with a terminal and other features which helps you have everything in one app</p>
                <p id ="second">You can install VS code from this <a href={'https://code.visualstudio.com/'}>link.</a></p>
                <img id="img" src={p5} />
                <p id="first2"><b>Step 5:</b> Open app/Task.php and update it as such to specify fields we want to be mass assignable.</p>
                <p id="first2"><b>Step 6:</b> Now you can create your Laravel project by running the following command 'composer create-project [PACKAGE] [DESTINATION PATH] [--FLAGS]' in the VS code terminal</p>
                <p id ="second">Your starting files and directories for the project should look like this, now you can edit and add to them:</p>
                <img id="img" src={p6} />  
                <p style={{'margin-top':'30px', 'color':'#8C001A'}}><b>Now you have a basic Laravel project! Now let's get into React.</b></p>
                <p id="first2"><b>Step 7:</b> Open the terminal in your VS code (you can find it in the View tab) and type in the following command</p>
                <img id="img" src={p7} />  
                <p id ="first2"><b>Step 8:</b> You are gonna be asked to enter the following command, it will install npm for your project:</p>
                <img id="img" src={p8} />  
                <p id ="second" style={{'margin-top':'30px'}}> At this stage you are gonna have a JS file named Example.js in your components directory.</p>
                <p id ="second"> Keep creating JS files in the components directory and give them distinct IDs so you can use them in your view files.</p>
                <p id ="first2"><b>Step 9:</b> Run this last command in the terminal to have React update the changes you make and reflect them in the browser</p>
                <img id="img" src={p9} />
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

if (document.getElementById('page4')) {
    ReactDOM.render(<Example />, document.getElementById('page4'));
}
