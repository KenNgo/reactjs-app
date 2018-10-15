import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class PF extends Component {
  _handleChange = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    let data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch({
      type: 'CREATE_POST',
      data
    })
    this.getTitle.value = '';
    this.getMessage.value = '';
  }
  
  render() {
    return (
      <div className="post-container">
        <h2 className="post_heading">Create Post</h2>
        <form className="form" onSubmit={this._handleChange} >
          <Grid>
            <Row className="showGrid">
              <input required type="text" ref={(input) => this.getTitle = input} name="txt-title" placeholder="Enter Post Title"  />
            </Row>
            <Row className="showGrid">
              <textarea required name="txt-desc" placeholder="Enter Post" row="5" ref={(input) => this.getMessage = input} ></textarea>
            </Row>
            <Row className="showGrid">
              <button type="submit">Post</button>
            </Row>
          </Grid>
        </form>
      </div>
    );
  }
}
export default connect()(PF);