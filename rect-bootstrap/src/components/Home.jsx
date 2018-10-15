import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import fire from '../services/fire';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [],
      briefDesces: []
    };
  }
  componentWillMount(){
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    });

    let briefDescRef = fire.database().ref('briefDesc').orderByKey().limitToLast(100);
    briefDescRef.on('child_added', snapshot => {
      let briefDesc = { text: snapshot.val(), id: snapshot.key };
      this.setState({ briefDesces: [briefDesc].concat(this.state.briefDesces) });
    })

  }
  // addMessage(e){
  //   e.preventDefault();
  //   fire.database().ref('messages').push( this.inputEl.value );
  //   this.inputEl.value = '';
  // }
  render() {
    return (
      <div className="Home">
        <Grid>
        <Jumbotron>
          <h2>Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/1.jpeg" circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/2.jpeg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/3.jpeg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} className="">
            {/*<form onSubmit={this.addMessage.bind(this)}>
              <input type="text" ref={ el => this.inputEl = el }/>
              <input type="submit"/>
            </form>*/}
            <ul>
              {
                this.state.briefDesces.map( briefDesc => <li key={briefDesc.id}>{briefDesc.text}</li> )
              }
            </ul>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}
