import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';
import './Weather.css';

const weatherApiKey='903aa45c741e9579c69f6d5caabcf87c';
var lat=0;
var lon=0;
var url = '';

class SelectCountry extends React.Component {
  constructor(props){
    super(props);
    this.changeCountry = this.changeCountry.bind(this);
  }

  changeCountry = (event) => {
    this.props.changeCountry(event.target.value)
  
  }

  render() {
    return (
      <form>
        <div className="select-country">
          <select id="data-type" onChange={this.changeCountry}>
            <option value="Singapore">Singapore</option>
            <option value="Kuala Lumpur">Kuala Lumpur</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Athens">Athens</option>
          </select>
        </div>
      </form>
    );
  }
}

class CurrentWeather extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillUpdate(){
  }

  componentWillMount(){
  }

  render() {
    return (
      <Grid>
          <Row className="showGrid" id="tempRow">
            <label className="bigText">{this.props.weatherInfo.temperature}ºC</label>
          </Row>
          <Row className="showGrid" id="humidityRow">
            <label className="regularText">Humidity:</label>
            <label className="regularText">{this.props.weatherInfo.humidity}</label>
          </Row> 
      </Grid>
    )
  }
}

class WeatherList extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillUpdate(){
  }

  componentWillMount(){
  }

  render() {
    let rows = this.props.arrWeather.map((item, index) => {
      return (
        <li key={index}>
          <Grid>
              <Row className="showGrid" id="tempRow">
                <label className="bigText">{item.date}</label>
              </Row>
              <Row className="showGrid" id="tempRow">
                <label className="bigText">{item.temperature}ºC</label>
              </Row>
              <Row className="showGrid" id="humidityRow">
                <label className="regularText">Humidity:</label>
                <label className="regularText">{item.humidity}</label>
              </Row> 
          </Grid>
        </li>
      )
    });
    return (
      <ul>{rows}</ul>
    )
  }
}

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_city: '',
      current_weather: {
        temperature: 0,
        humidity: 0
      },
      foreCast: []
    };
    this.changeCountry = this.changeCountry;
    this.setWeather = this.setWeather;
  }

  changeCountry = (value) => {
    this.setWeather(value);
  }

  setWeather = (pos) => {
    url = `http://api.openweathermap.org/data/2.5/weather?q=${pos}&APPID=${weatherApiKey}`;
    axios.get(url)
      .then(res => {
        this.setState({
          current_city: pos,
          current_weather: {
            temperature: Math.round(parseFloat(res.data.main.temp)-273.15),
            humidity: res.data.main.humidity
          }
        });
      });
    url = `http://api.openweathermap.org/data/2.5/forecast?q=${pos}&mode=json&APPID=${weatherApiKey}`;
    let arr = [];
    axios.get(url)
      .then(res => {
        res.data.list.forEach((item, index) => {
          if (index % 8 === 0) {
            arr.push({
              date: item.dt_txt.split(' ')[0], 
              temperature: Math.round(parseFloat(item.main.temp) - 273.15),
              humidity: item.main.humidity
            });
          }
        });
        this.setState({foreCast: arr});
      });
  }

  componentWillMount(){
    if (this.state.current_city === '') {
      this.setWeather('Singapore');
    }
  }

  render() {
    return (
      <div id="appContainer">
        <SelectCountry selectCity={this.state.current_city} changeCountry={this.changeCountry}/>
        <CurrentWeather weatherInfo={this.state.current_weather} />
        <WeatherList arrWeather={this.state.foreCast} />
      </div>
    )
  }
}