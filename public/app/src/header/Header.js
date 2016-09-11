import React, {Component} from "react";
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

var Header = React.createClass({

	handleSelect: function(item) {
	  	this.props.navEvent(item);
	},

	render: function() {
		return (
		  <Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="">Roomie Perfecto</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		    	{this.props.items.map((item, i) => {
		    		return (
						<NavItem onClick={this.handleSelect.bind(this, item)}>{item}</NavItem>
		    		)
		    	})}
		    </Nav>
		  </Navbar>
		)
	}

});

export default Header;