import React, {Component} from "react";
import form from "react-bootstrap/lib/Form";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import Button from "react-bootstrap/lib/Button";
import Dropzone from "react-dropzone";


var Profile = React.createClass({
	getInitialState: function() {
	    return {email: "", name: "", password: "", files: []};
	},

	handleNameChange: function(e) {
	    this.setState({name: e.target.value});
	},	

	handleEmailChange: function(e) {
	    this.setState({email: e.target.value});
	},	

	handlePasswordChange: function(e) {
	    this.setState({password: e.target.value});
	},		

	onDrop: function(files) {
		this.setState({files: files});
	},

	submit: function() {
		debugger;
	},

	render: function() {
		return (
	      <form className="container-fluid">
	      	<h3>Register User</h3>
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Name
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleNameChange}
		          />
		      </div>
	        </FormGroup>
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Email
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleEmailChange}
		          />
		      </div>
	        </FormGroup>
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Password
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		            type="password"
		            placeholder="Enter password"
		            onChange={this.handlePasswordChange}
		          />
		      </div>
	        </FormGroup>	        
	       	<FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Image 
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <Dropzone onDrop={this.onDrop}>
		              <div>Try dropping some files here, or click to select files to upload.</div>
		            </Dropzone>
		      </div>
	        </FormGroup>	
	        <FormGroup className="row">
	        	<div className="col-xs-12">
				    <Button onClick={this.submit}>
				      Submit
				    </Button>
			    </div>
	        </FormGroup>       
	      </form>
		)
	}

});

export default Profile;