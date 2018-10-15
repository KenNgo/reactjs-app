import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';
import './Card.css';

const API = 'https://api.github.com/users';

class InputField extends Component {
  constructor(props){
    super(props);
  }

  onUserNameChange = (event) => {
    if (event.key === 'Enter') {
      this.props.onUserNameChange(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
        <div className="input-field">
          <input type="text" placeholder="Type Username + Enter" onKeyDown={this.onUserNameChange} />
        </div>
    );
  }
}

class Item extends Component {
  constructor(props){
    super(props);
  }

  componentWillUpdate(){
  }

  componentWillMount(){
  }

  render() {
    let user = this.props.userInfo;
    return (
      <Grid>
          <Row className="showGrid">
            <img src={user.avatar_url} alt='avatar' width="100" />
          </Row>
          <Row className="showGrid">
            <label className="bigText">{user.login}</label>
          </Row>
          <Row className="showGrid">
            <label className="regularText">{user.location}</label>
          </Row>
          <Row className="showGrid">
            <Col xs={4}>
              <label className="bigText">Followers: </label>
              <label className="regularText"> {user.followers}</label>
            </Col>
            <Col xs={4}>
              <label className="bigText">Repositories: </label>
              <label className="regularText"> {user.public_repos}</label>
            </Col>
            <Col xs={4}>
              <label className="bigText">Following: </label>
              <label className="regularText"> {user.following}</label>
            </Col>
          </Row> 
      </Grid>
    )
  }
}

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      userInfo: {
        avatar_url: '',
        login: '',
        location: '',
        followers: '',
        following: '',
        public_repos: ''
      }
    };
  }

  handleUserNameChange = (value) => {
    this.getUser(value);
  }

  getUser = (userName) => {
    let url = `${API}/${userName}`;
    axios.get(url)
      .then(res => {
        this.setState({
          userName: userName,
          userInfo: {
            avatar_url: res.data.avatar_url,
            login: res.data.login,
            location: res.data.location,
            followers: res.data.followers,
            following: res.data.following,
            public_repos: res.data.public_repos
          }
        });
      });
  }

  componentWillMount () {
    if (this.state.userName === '') {
      this.getUser('KenNgo');
    }
  }

  render() {
    return (
      <div id="appContainer">
        <InputField userName={this.state.username} onUserNameChange={this.handleUserNameChange} />
        <Item userInfo={this.state.userInfo} />
      </div>
    )
  }
}