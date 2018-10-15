import React, { Component } from 'react';
import { connect } from 'react-redux';
import P from './P';
import EC from './EC';

class AP extends Component {
	render() {
		return (
			<div>
	  			<h3 className="post_heading">All Posts</h3>
	  			<table border="1">
              		<thead>
                		<tr>
                  			<th>No</th>
                  			<th>Title</th>
		                  	<th>Description</th>
		                  	<th>Actions</th>
                		</tr>
              		</thead>
              		<tbody>
              			{this.props.posts.map((post) => (
			  				post.editing ? <EC post={post} key={post.id} /> : <P post={post} key={post.id} /> 
			  				)
						)}
					</tbody>
				</table>
			</div>
			);
		}
}

const mapStateToProps = (state) => {
	return {
		posts: state.reducerCRUD
	}
}
export default connect(mapStateToProps)(AP);