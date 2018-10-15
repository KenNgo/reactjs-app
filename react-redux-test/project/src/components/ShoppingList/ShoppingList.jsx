import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ShoppingForm from './ShoppingForm';
import ItemList from './ItemList';

import './ShoppingList.css'

class ShoppingList extends Component {
	render() {
		return (
			<div className="shopping-list-wrapper">
	  			<Grid>
					<Row>
						<Col xs={6}>
							<ItemList />
						</Col>
						<Col xs={6}>
							<ShoppingForm />
						</Col>
					</Row>
	  			</Grid>
			</div>
			);
		}
}

const mapStateToProps = (state) => {
	return {
		carts: state.reducerShoppingCart
	}
}
export default connect(mapStateToProps)(ShoppingList);