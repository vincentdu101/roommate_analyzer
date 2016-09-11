import React, {Component} from "react";
import form from "react-bootstrap/lib/Form";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import Button from "react-bootstrap/lib/Button";
import Dropzone from "react-dropzone";


var RoomsCreate = React.createClass({
	getInitialState: function() {
	    return {
	    	size: "", 
	    	availablity_date: "", 
	    	rent: "",
	    	postSuccess: false,
	    	user_id: sessionStorage["user_id"]
	    };
	},

	handleSizeChange: function(e) {
	    this.setState({size: e.target.value});
	},	

	handleAvailabilityDateChange: function(e) {
	    this.setState({availablity_date: e.target.value});
	},	

	handleRentChange: function(e) {
	    this.setState({rent: e.target.value});
	},

	submit: function() {
		$.ajax({
	      url: "http://localhost:3000/rooms",
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
	      	<h3>Create a Rental</h3>
	      	{this.state.postSuccess ? <h4>Rental Updated</h4> : null}
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Size
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleSizeChange}
		          />
		      </div>
	        </FormGroup>
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Availability Date
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleAvailabilityDateChange}
		          />
		      </div>
	        </FormGroup>
	        <FormGroup
	          controlId="formBasicText"
	          className="row"
	        >
	          <div className="col-xs-12 col-sm-4">
		          <ControlLabel>
		          	Rent
		          </ControlLabel>
		      </div>
	          <div className="col-xs-12 col-sm-7">
		          <FormControl
		          	className=""
		            type="text"
		            placeholder="Enter text"
		            onChange={this.handleRentChange}
		          />
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

export default RoomsCreate;