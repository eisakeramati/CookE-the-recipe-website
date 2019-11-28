import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table'
import './style.css'
import logo from './4.5stars.png';

export default class Example extends Component { 

    render() {
        return (
            
            <div style={{ 'margin-top':'30px', 'background-color': '#B8B8B8','color':'#484848', 'font-size':'20px', 'overflow-x':'auto', 'border-radius': '5px', 'border-style': 'solid', 'font-family': 'arial', 'width': '1200px', 'margin-left': 'auto', 'margin-right': 'auto', 'text-align':'center'}}> 
                
                <img id="img3" src={logo} />
                
                <p>
                    For back-end framework we used Laravel and for our front-end we used React. Compared to Windows Operating systems
                </p>
                <p>
                    where configuring Laravel, React and their environments was quite easy it was harder to do all that on Mac OS 
                </p>
                <p>
                    we were actually lucky that XAMPP recently released the Mac version. To set up the environment we had to
                </p>
                <p>
                install Composer, Visual Studio Code and XAMPP.
                </p>
                <p>
                    It was really easy to run Laravel on the first try, but it was a little hard to configure how to work with React, like
                </p>
                <p>
                    for React to update the latest changes on the local server on the browser we have to run the command 'npm run watch' and
                </p>
                <p>
                    we did not know that at the beginning. So we were editing the React components and we couldn't see the changes which made 
                </p>
                <p>
                    us feel frustrated!
                </p>
                <p>
                    learning how to use the Laravel functions and syntax took a little bit of time, but since It was mainly the php syntax
                </p>
                <p>
                    and we had experience working with php we got used to it, really fast. React on the other hand was a little challanging
                </p>
                <p>
                    cause we had to learn how to work with JS files and which ones to edit. The syntax was similar to HTML and CSS but 
                </p>
                <p>
                    but some parts like adding styles, images and etc. were different compared to HTML and CSS. Since we were taught
                </p>
                <p>
                    HTML and CSS and php the learning curve was not as steep, so learning the basics of web development helped a lot
                </p>
                <p>                
                    perhaps if we didn't have assignments related to these languages it would have been hard for us to do this project 
                </p>
                <p>
                    Also one of our group members who was using Mac complained about VS code being non user-friendly.
                </p>
                <p>
                    We do not regret our choice of frameworks but we might have used Vue.JS instead of React.JS since I learned through

                </p>
                <p style={{'margin-bottom':'30px'}}>
                    working with React that React was slower in proccessing compared to Vue.
                    
                </p>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Framework</th>
                        <th>Difficulty</th>
                        <th>Features</th>
                        <th>proccessing speed</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laravel</td>
                        <td>4/5</td>
                        <td>5/5</td>
                        <td>5/5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>React</td>
                        <td>4.5/5</td>
                        <td>4/5</td>
                        <td>3.5/5</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vue</td>
                        <td>4/5</td>
                        <td>4.5/5</td>
                        <td>4/5</td>
                    </tr>
                    </tbody>
                    </Table>

            </div>



                
        );
}
}



if (document.getElementById('page10')) {
    ReactDOM.render(<Example />, document.getElementById('page10'));
}
