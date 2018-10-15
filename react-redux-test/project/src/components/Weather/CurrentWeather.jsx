import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class CurrentWeather extends Component {
	constructor(props){
    super(props);
  }

  render() {
    
    const currentWeather = this.props.weather.current_weather ? this.props.weather.current_weather : {temperature: 0, humidity: 0};

    return (
      <Grid>
          <Row className="show-grid" id="tempRow">
            <label className="bigText">{currentWeather.temperature}ºC</label>
          </Row>
          <Row className="show-grid" id="humidityRow">
            <label className="regularText">Humidity:</label>
            <label className="regularText">{currentWeather.humidity}</label>
          </Row> 
      </Grid>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    weather: state.reducerWeather
  }
}
export default connect(mapStateToProps)(CurrentWeather);