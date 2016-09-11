import React, {Component} from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";

var Home = React.createClass({

	getInitialState: function() {
		$.ajax({
	      url: "http://localhost:3000/rooms?user_id=" + sessionStorage["user_id"],
	      dataType: 'json',
	      method: "GET",
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
	 return null;
	},

	render: function() {
		return (
			<Jumbotron>
			    <h1>Welcome to Roomie Perfecto!</h1>
			    <p>Find the perfect roommate by having you both take a personality test
			    hosted by Traitify. You can see where you guys are compatible and see if you 
			    want to make the next leap to becoming roommates!</p>
			    <p>See the rentals you have below and whose applied to them!</p>
  			</Jumbotron>

  			
		);
	}

});

export default Home;