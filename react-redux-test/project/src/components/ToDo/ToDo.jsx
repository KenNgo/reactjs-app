import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions';

import './ToDo.css';

class ToDo extends Component {
    // exact same code
    _handleChange = e => {
      e.preventDefault()
      let item = e.target.querySelector('input').value;
      this.props.createTodo(item);
      e.target.querySelector('input').value = '';
    }
    render() {
      return (
          <div className="my-app">
            <form onSubmit={this._handleChange}>
              <input type="text" name="listItem" />
              <button type="submit">button</button>
            </form>
            <br />
            {this.props.todos.map((text, id) => (
              <div key={id}>
                  {text}
              </div>
            )) }
          </div>
        );
    }
}

export default connect( state => ({
    todos: state.reducerToDo
  }), { createTodo })(ToDo);