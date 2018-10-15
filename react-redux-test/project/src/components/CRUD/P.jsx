import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    let arr = [], row = [], o = {}, post = this.props.post;
    for (o in post) {
      arr.push(post[o]);
    }
    row = arr.map((item, index) => {
      if (index < 1) {
        return (
          <td key={index}>{index}</td>
          );
      } else if(index > 2) {
        return (
          <td key={index}>
            <button className="edit" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>
              Edit
            </button>
            <button className="delete" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>
              Delete
            </button>
          </td>
          );
      } else {
        return (
          <td key={index}>{item}</td>
        );
      }
    });
    return (
      <tr className="post" key={post.id}>
        {row}
      </tr>
    );
  }
}

export default connect()(Post);