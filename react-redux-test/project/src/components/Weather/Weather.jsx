import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import SelectCountry from './SelectCountry';
import CurrentWeather from './CurrentWeather';
import WeatherList from './WeatherList';
import './Weather.css';

class Weather extends Component {
  constructor (props) {
    super (props);
  }

  render() {
    return (
      <div className="weather-wrapper">
        <Grid>
          <Row className="show-grid">
            <SelectCountry />
            <CurrentWeather />
            <WeatherList />
          </Row>
        </Grid>
      </div>
      );
    }
}
const mapStateToProps = (state) => {
  return {
    weather: state.reducerWeather
  }
}
export default connect()(Weather);