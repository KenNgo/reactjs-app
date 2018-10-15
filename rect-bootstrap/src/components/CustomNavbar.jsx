import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">CodeLife</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to="/" href="/">Home</NavItem>
            <NavItem eventKey={2} componentClass={Link} to="/weather" href="/weather">Weather</NavItem>
            <NavItem eventKey={3} componentClass={Link} to="/news" href="/news">News</NavItem>
            <NavItem eventKey={4} componentClass={Link} to="/card" href="/card">Card</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
