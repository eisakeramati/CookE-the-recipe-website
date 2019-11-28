import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import p1 from './ek.jpg';
import p2 from './cb.jpeg';
import p3 from './mf.jpeg';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Example extends Component {
    
    
    render() {
        return (
            <div>
                <Jumbotron style={{'padding':'-50px'}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p1}/>
                        <Card.Body>
                            <Card.Title>Eisa Keramati</Card.Title>
                            <Card.Text>
                            "I'm not superstitious, But I am a little bit stitious."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{'margin-top':'-315px', 'margin-bottom':'200px', 'margin-left':'300px'}}>
                    <h2>How's it going? I'm Eisa.</h2>
                    <p id="card">I'm an ex-computer engineering international student and this is my first year at Ryerson.</p>
                    <p id="card">I like Shawarmas and I'm passionate about different fields of Artificial Intelligence.</p>
                    <p id="card">In this project I was in charge of <b>pages 6 and 4</b>I also helped a lot with the back-end.</p>
                    </div>
                </Jumbotron>
                <Jumbotron>
                    <Card style={{ width: '18rem', 'margin-left':'1150px'}}>
                    <Card.Img variant="top" src={p2} />
                    <Card.Body>
                        <Card.Title>Carley Brady</Card.Title>
                        <Card.Text>
                        "I'm Carley, let's get rid of the m and it's iCarley!"
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <div style={{'margin-top':'-315px', 'margin-bottom':'200px', 'margin-right':'300px'}}>
                    <h2>Hey there it's Carley!</h2>
                    <p id="card">I'm big fan of casual gaming, jogging and digital art</p>
                    <p id="card"v>I hope I become a front-end developer in the future!</p>
                    <p id="card">In this project I was in charge of <b>pages 1 and 5</b>I also helped a lot with the front-end.</p>
                    </div>
                </Jumbotron>
                <Jumbotron>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p3} />
                    <Card.Body>
                        <Card.Title>Fabliha Faiza</Card.Title>
                        <Card.Text>
                        "Just give me some Covfefe...I mean coffee...""
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <div style={{'margin-top':'-315px', 'margin-bottom':'200px', 'margin-left':'300px'}}>
                    <h2>Hi I'm Fabliha!</h2>
                    <p id="card">I'm a third year Ryerson student.</p>
                    <p id="card">My motto in life is eat, sleep and code!</p>
                    <p id="card">In this project I was in charge of <b>pages 2 and 3</b>I also helped a lot with the front-end.</p>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

if (document.getElementById('page9')) {
    ReactDOM.render(<Example />, document.getElementById('page9'));
}



          