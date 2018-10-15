import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

import './CRUDPost.css';


class CRUDPost extends Component {
	render() {
		return (
			<div className="CRUD-post">
			  <div className="navbar">
			    <h2 className="center ">Post It</h2>
			    </div>
			    <PostForm />
			    <AllPost />
			</div>
		);
	}
}
export default CRUDPost;