import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class ItemList extends Component {
	render() {
		let total = 0;
		this.props.carts.forEach(item => total += parseInt(item.quantity));
		return (
			<Grid>
				<Row className="show-grid">
					<h3>Shopping List - {total} items</h3>
				</Row>
				{this.props.carts.map((cart) => (
	  				<Row key={cart.id}>
	  					<div className="item-wrapper">
							<div className="heading">
								{cart.quantity} x {cart.name}
		    				</div>
		    				<div className="body">{cart.message}</div>
		    				<div className="footer">
								<button onClick={() => this.props.dispatch({ type: 'DELETE_ITEM', id: cart.id })}>Remove</button>
		    				</div>
	  					</div>
	  				</Row>
				))}
			</Grid>
			);
		}
}

const mapStateToProps = (state) => {
	return {
		carts: state.reducerShoppingCart
	}
}
export default connect(mapStateToProps)(ItemList);