import React, {Component} from "react";
import Table from "react-bootstrap/lib/Table";


var RoomsIndex = React.createClass({

	getInitialState: function() {
		return { rooms: [] };
	},

	componentDidMount: function() {
		console.log("Rooms componentDidMount")
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
		      <tr>
		        <td>1</td>
		        <td>Mark</td>
		        <td>Otto</td>
		        <td>@mdo</td>
		      </tr>
		      <tr>
		        <td>2</td>
		        <td>Jacob</td>
		        <td>Thornton</td>
		        <td>@fat</td>
		      </tr>
		      <tr>
		        <td>3</td>
		        <td colSpan="2">Larry the Bird</td>
		        <td>@twitter</td>
		      </tr>
		    </tbody>
		  </Table>	
		);
	}

});

export default RoomsIndex;