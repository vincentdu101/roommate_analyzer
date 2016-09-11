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
	    return {
	    	email: "", 
	    	first_name: "", 
	    	last_name: "", 
	    	password: "", 
	    	age: "",
	    	gender: "",
	    	postSuccess: false,
	    	files: []
	    };
	},

	handleFirstNameChange: function(e) {
	    this.setState({first_name: e.target.value});
	},	

	handleLastNameChange: function(e) {
	    this.setState({last_name: e.target.value});
	},	

	handleAgeChange: function(e) {
	    this.setState({age: e.target.value});
	},	

	handleGenderChange: function(e) {
	    this.setState({gender: e.target.value});
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
		$.ajax({
	      url: "http://localhost:3000/users",
	      dataType: 'json',
	      method: "POST",
	      cache: false,
	      data: this.state,
	      success: (data) => {
	        this.setState(data);
	        this.setState({postSuccess: true});
	      },
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }
	    });
	},

	render: function() {
		return (
	      <form className="container-fluid">
	      	<h3>Register User</h3>
	      	{this.state.postSuccess ? <h4>User Updated</h4> : null}
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	First Name
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleFirstNameChange}
		          />
		      </div>
	        </FormGroup>
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Last Name
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleLastNameChange}
		          />
		      </div>
	        </FormGroup>
	       	<FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Gender
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleGenderChange}
		          />
		      </div>
	        </FormGroup>
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Age
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleAgeChange}
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