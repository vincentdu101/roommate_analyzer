import React, {Component} from "react";
import Table from "react-bootstrap/lib/Table";
import Room from "./room.js"

var RoomsIndex = React.createClass({

	getInitialState: function() {
		return { data: [] };
	},

	componentDidMount: function() {
	    $.ajax({
	      url: "http://localhost:3000/rooms",
	      crossDomain: true,
	      dataType: 'json',
	      cache: false,

	      success: function(data) {
	      	console.log(data);
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
  },

	render: function() {
		return (

		  <Table striped bordered condensed hover>
		    <thead>

		      <tr>
		        <th>#</th>
		        <th>First Name</th>
		        <th>Last Name</th>
		        <th>Username</th>
		      </tr>
		    </thead>
		    <tbody>
		    	{this.state.data.map((item, i) =>{
		    		return (
		    			<tr className="room">
      					<td>{item.id}</td>
       					 <td>{item.size}</td>
        				<td>{item.availablity_date}</td>
     					</tr>
		    		)
		    	})}
		    </tbody>
		  </Table>	
		);
	}

});

export default RoomsIndex;