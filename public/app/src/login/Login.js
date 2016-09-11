import React, { Component } from 'react';
import Modal from "react-bootstrap/lib/Modal";


var Login = React.createClass({

	render: function() {
		return (
		  <div className="static-modal">
		    <Modal.Dialog>
		      <Modal.Header>
		        <Modal.Title>Login</Modal.Title>
		      </Modal.Header>

		      <Modal.Body>
		        One fine body...
		      </Modal.Body>

		      <Modal.Footer>
		        <Button>Close</Button>
		        <Button bsStyle="primary">Save changes</Button>
		      </Modal.Footer>

		    </Modal.Dialog>
		  </div>
		);
	}

});