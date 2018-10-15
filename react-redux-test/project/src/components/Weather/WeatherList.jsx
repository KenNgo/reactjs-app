import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class WeatherList extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillUpdate(){
  }

  componentWillMount(){
  }

  render() {
    let arrForecast = this.props.weather.forecast || [];
    let rows = arrForecast.map((item, index) => {
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

const mapStateToProps = (state) => {
  return {
    weather: state.reducerWeather
  }
}
export default connect(mapStateToProps)(WeatherList);