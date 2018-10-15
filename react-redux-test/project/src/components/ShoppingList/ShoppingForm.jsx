import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class ShoppingForm extends Component {
	handleSubmit = (e) => {
    	e.preventDefault();
    	const name = this.getName.value,
    	 		message = this.getMessage.value,
				quantity = this.getQuantity.value;
    	let data = {
      		id: new Date(),
      		name,
      		message,
			quantity,
    	}
    	this.props.dispatch({
      		type: 'ADD_ITEM',
      		data
    	});
    	this.getName.value = '';
    	this.getMessage.value = '';
    	this.getQuantity.value = '';
  	}

  	handleCancel = e => {
  		e.preventDefault();
  		this.getName.value = '';
    	this.getMessage.value = '';
    	this.getQuantity.value = '';	
  	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<Grid>
				<Row className="show-grid">
					<h3>Adding New Item</h3>
				</Row>
				<Row className="show-grid">
					<label htmlFor="name">Name *</label>
				</Row>
				<Row className="show-grid">
					<input required type="text" ref={(input) => this.getName = input} name="txt-name" placeholder="Enter Name"  />
				</Row>
				<Row className="show-grid">
					<label htmlFor="desc">Description *</label>
				</Row>
				<Row className="show-grid">
					<textarea required name="txt-desc" placeholder="Enter description" row="5" ref={(input) => this.getMessage = input} ></textarea>
				</Row>
				<Row className="show-grid">
					<label htmlFor="name">Quantity *</label>
				</Row>
				<Row className="show-grid last">
					<input required type="number" ref={(input) => this.getQuantity = input} name="txt-quantity" placeholder="Enter quantity"  />
				</Row>
				<Row className="show-grid button-control">
					<button className="add-to-list">
		              Add To List
		            </button>
		            <button className="cancel" onClick={this.handleCancel}>
		              Cancel
		            </button>
				</Row>
			</Grid>
			</form>
			);
		}
}
export default connect()(ShoppingForm);