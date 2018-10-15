import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';


class NewsList extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
  	this.getNewsList();
  }

  getNewsList = () => {
    let data = {},
		url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5763846de30d489aa867f0711e2b031c&q=singapore&page=0`,
    	arr = [];
		
		// get forecast
		axios.get(url)
      		.then(res => {
        		res.data.response.docs.forEach((item, index) => {
        			arr.push({
        				snipet: item.snippet,
        				pub_date: item.pub_date,
        				source: item.source,
        				multimedia: item.multimedia
        			});
        		});
        		data.copyright = res.data.copyright;
        		data.list = [];
        		data.list = arr;
        		this.props.dispatch({
		      		type: 'CHANGE_COUNTRY',
		     	 	data
		    	});
      	});
  }


  render() {
    let arrNews = this.props.newsList || {list:[]};
    if (typeof arrNews.list === "undefined") arrNews.list = [];
    let rows = arrNews.list.map((item, index) => {
      return (
        <li key={index}>
          <Grid>
              <Row className="showGrid" id="tempRow">
                <img className="thumb" src={item.multimedia[2].url} alt="image thumb" />
              </Row>
              <Row className="showGrid" id="tempRow">
                <label className="bigText">{item.snippet}</label>
              </Row>
              <Row className="showGrid" id="humidityRow">
                <label className="regularText">{item.source}</label>
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
    newsList: state.reducers
  }
}
export default connect(mapStateToProps)(NewsList);