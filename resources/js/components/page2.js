import React, { Component } from 'react';
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
            <div style={{ 'margin-top':'30px', 'background-color': '#B8B8B8','color':'#484848', 'font-size':'20px', 'overflow-x':'auto', 'border-radius': '5px', 'border-style': 'solid', 'font-family': 'arial', 'width': '1200px', 'margin-left': 'auto', 'margin-right': 'auto', 'text-align':'center'}}> 

                <span style={{'text-align':'center'}}><p>A short tutorial showing how to create a great looking page (or pages) with text, images, and styles using your chosen Frameworks.</p></span>

                <p id = "first2"><b>Step 1:</b> Start by creating a new Laravel application with $ laravel new tasksman.</p>
                <p id="first2"><b>Step 2:</b> Change directory to tasksman, specify React as our JS framework of choice:</p>
                <p id="third">$ cd tasksman</p>
                <p id="third">    $ php artisan preset react</p>
                <p  id="first2"><b>Step 3:</b> Run this command to install app dependencies:</p>
                <p id="third">    $ npm install</p>
                <p id="first2"><b>Step 4:</b> Create two models - Task and project:</p>
                <p id="third">    $ php artisan make:model Task -m</p>
                <p id="third">    $ php artisan make:model Project -m</p>
                <p id="first2"><b>Step 5:</b> Open app/Task.php and update it as such to specify fields we want to be mass assignable.</p>
            

<br></br>
<img  id="img" src={logo}/>
<br></br>
<p style={{'margin-left':'10px', 'margin-top':'30px', 'text-align':'left'}}><b>Step 6:</b> Similarly, open app/Project.php and update it as such:</p>
<br></br>
<img id="img" src={p2} />
<br></br>
<p style={{'margin-left':'10px', 'margin-top':'30px', 'text-align':'left'}}><b>Step 7:</b> update generated migrations for  our models in database/mirations/TIMESTAMP_create_Tasks_table.php in the up </p>
<p id="second">method as below.</p>
<img id="img" src={p3} />
<br></br>
<p style={{'margin-left':'10px', 'margin-top':'30px', 'text-align':'left'}}><b>Step 8:</b> Define API endpoints.. open routes/api.php and insert the code below</p>
<br></br>
<img id = "img" src={p4} />
<br></br>
<p style={{'margin-left':'10px', 'margin-top':'30px', 'text-align':'left'}}><b>Step 9:</b> Create the controllers:</p>
<p style={{'margin-left':'50px', 'text-align':'left'}}>$ php artisan make:controller PagesController</p>
<p style={{'margin-left':'50px', 'text-align':'left'}}>$ php artisan make:controller PostController</p>
<p id = "second"> The Controllers are where you write the main functions of your pages' backend</p>
<p id = "second"> This is where you need to know your way around PHP!</p>
<p id = "second"> For example these are the storing and updating function for posts</p>
<br></br>
<img id="img" src={p8} />
<br></br>
<img id="img" src={p9} />
<br></br>
<p id ="first2"><b>Step 10:</b>Install React.JS by running the following commands:</p> 
<p id = "third" >$ php artisan preset react</p>
<p id = "third" >$ npm install npm run dev</p>
<p id = "third" >$ npm run dev</p>
<p id = "second" >create the App component to store all of our components(for instance </p>
<p id="second">here we have these three files in our components).</p>
<br></br>
<img id = "img" src={p5} />
<br></br>
<p id = "first"><b>Step 11:</b> Edit your components' JS files whatever way you want.</p>
<p id = "second"> Although 'render' should only return one division tag.</p>
<br></br>
<img id="img" src={p6} />
<br></br>
<p id = "first"><b>Step 12:</b> Remember to mention your component's JS files in your view files.</p>
<p id = "second"> keep compiling your react files by running the command 'npm run watch' in the terminal.</p>
<br></br>
<img id="img" src={p7} />
<p id = "first"><b>Step 13:</b> Start the app: $php artisan serve</p>
<br></br>
Now you have <a href={"/"}>a website</a> customize it the way you want!  
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

if (document.getElementById('page2')) {
    ReactDOM.render(<Example />, document.getElementById('page2'));
}
