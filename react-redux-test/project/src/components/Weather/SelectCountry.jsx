import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';

const weatherApiKey='903aa45c741e9579c69f6d5caabcf87c';

class SelectCountry extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
  	this.getCurrentWeather('Singapore');
  }

  getCurrentWeather = (country) => {
    let data = {},
		url = `http://api.openweathermap.org/data/2.5/forecast?q=${country}&mode=json&APPID=${weatherApiKey}`,
    	arr = [];
		
		// get forecast
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
        		data.country = country;
        		data.current_weather = {
        			temperature: arr[0].temperature,
        			humidity: arr[0].humidity
        		};
        		data.forecast = [];
        		data.forecast = arr;
        		this.props.dispatch({
		      		type: 'CHANGE_COUNTRY',
		     	 	data
		    	});
      	});
  }

  changeCountry = (event) => {
    const country = event.target.value;
    this.getCurrentWeather(country);
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
export default connect()(SelectCountry);