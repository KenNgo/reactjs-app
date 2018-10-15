import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class Counter extends Component {
  constructor (props) {
	super(props);
  }
  render() {
  	let count = this.props.counter || 0;
    return (
      <div className="counter-wrapper">
		<Jumbotron>
		  <h2>Welcome to React + RxJS</h2>
		  <p>
		    This is a template showcasing RxJS as a dataflow + React + React-router. This project will continue to grown implementing other use full real life examples! (well as close as)
		  </p>
		  <p>
		  	<h3>counter: {this.props.counter}</h3>
		  </p>
		  <p>
			<Button bsStyle="primary" onClick={() => this.props.dispatch({ type: 'DECREASE_COUNTER', counter: --count })}>decrease</Button>
			&nbsp;
			<Button bsStyle="primary" onClick={() => this.props.dispatch({ type: 'INCREASE_COUNTER', counter: ++count })}>increment</Button>
		  </p>
		</Jumbotron>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
	return {
		counter: state.reducers
	}
}
export default connect(mapStateToProps)(Counter);