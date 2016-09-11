// curl https://api-sandbox.traitify.com/v1/assessments \
// -H "Content-Type: application/json" \
// -u 8i4i7uusnc5g2pg4909olnsqiu:x \
// -d '{"deck_id": "career-deck"}'

// Public Key: lmd71vappngqh4cbac5vanegf5
// Secret Key: 8i4i7uusnc5g2pg4909olnsqiu

// {"id":"82188545-c03d-4bbd-8208-fa057ade87a6","deck_id":"career-deck","tags":null,"completed_at":null,"created_at":1473613612109,"locale_key":"en-US"}

import React, {Component} from "react";


var Assessment = React.createClass({

	createAssessment: function(callback) {
		var secretKey = "8i4i7uusnc5g2pg4909olnsqiu";
		var jsonMimeType = "application/json;charset=UTF-8";
		$.ajax({
	      url: "https://api-sandbox.traitify.com/v1/assessments",
	      method: "POST",
	      cache: false,
	      data: JSON.stringify({"deck_id": "core"}),
		  beforeSend: function (xhr) {
		    xhr.setRequestHeader ("Authorization", "Basic " + secretKey + ":x");
		  },	      
	      success: (data) => {
	        callback(data.id);
	      },
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }
	    });
	},

	componentWillMount: function () {
	  document.body.innerHTML += "<div class='assessment'></div>";
      Traitify.setPublicKey("lmd71vappngqh4cbac5vanegf5");
      Traitify.setHost("https://api-sandbox.traitify.com");
      Traitify.setVersion("v1");
      var assessmentId = '82188545-c03d-4bbd-8208-fa057ade87a6';
      this.createAssessment(function(assessmentId){
      	  var traitify = Traitify.ui.load(assessmentId, ".assessment");
	      traitify.slideDeck.onFinished(function(data){
		    console.log(data.data);
		    console.log("Finished!");
		  });
      });
	},

	render: function() {
		return null;
	}

});

export default Assessment;