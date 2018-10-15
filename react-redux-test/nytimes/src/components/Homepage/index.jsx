import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import NewsList from './NewsList';


class Homepage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="homepage-wrapper">
        <Grid>
          <Row className="show-grid">
            <NewsList />
          </Row>
        </Grid>
      </div>
      );
  }
}

export default connect()(Homepage);