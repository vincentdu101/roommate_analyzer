import React, {Component} from "react";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

var Header = React.createClass({

	handleSelect: function() {
		console.log("test");
	},

	render: function() {
		return (
		  <Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">React-Bootstrap</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		      <NavItem eventKey={1} href="#">Link</NavItem>
		      <NavItem eventKey={2} href="#">Link</NavItem>
		      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
		        <MenuItem eventKey={3.1}>Action</MenuItem>
		        <MenuItem eventKey={3.2}>Another action</MenuItem>
		        <MenuItem eventKey={3.3}>Something else here</MenuItem>
		        <MenuItem divider />
		        <MenuItem eventKey={3.3}>Separated link</MenuItem>
		      </NavDropdown>
		    </Nav>
		  </Navbar>
		)
	}

});

export default Header;