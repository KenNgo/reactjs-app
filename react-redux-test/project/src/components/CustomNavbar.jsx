import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CustomNavbar.css';


export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Ken.Ngo</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to="/" href="/">Home</NavItem>
            <NavItem eventKey={2} componentClass={Link} to="/crud" href="/crud">CRUD</NavItem>
            <NavItem eventKey={3} componentClass={Link} to="/crud-post" href="/crud-post">CRUD Post</NavItem>
            <NavItem eventKey={4} componentClass={Link} to="/counter" href="/counter">Counter</NavItem>
            <NavItem eventKey={5} componentClass={Link} to="/shopping-list" href="/shopping-list">Shopping List</NavItem>
            <NavItem eventKey={6} componentClass={Link} to="/weather" href="/weather">Weather</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
