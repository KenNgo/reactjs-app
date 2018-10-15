import React, { Component } from 'react';
import PF from './PF';
import AP from './AP';

import './CRUD.css';


class CRUD extends Component {
  render() {
    return (
      <div className="crud-wrapper">
          <PF />
          <AP />
      </div>
    );
  }
}
export default CRUD;