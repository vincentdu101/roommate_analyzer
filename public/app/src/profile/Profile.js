import React, {Component} from "react";
import form from "react-bootstrap/lib/Form";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import HelpBlock from "react-bootstrap/lib/HelpBlock";


var Profile = React.createClass({

	handleChange: function(event) {
		console.log(event);
	},

	render: function() {
		return (
	      <form>
	        <FormGroup
	          controlId="formBasicText"
	        >
	          <ControlLabel>Working example with validation</ControlLabel>
	          <FormControl
	            type="text"
	            placeholder="Enter text"
	            onChange={this.handleChange}
	          />
	          <FormControl.Feedback />
	          <HelpBlock>Validation is based on string length.</HelpBlock>
	        </FormGroup>
	      </form>
		)
	}

});

export default Profile;