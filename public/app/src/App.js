import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./profile/Profile.js";
import RoomsIndex from "./room/RoomsIndex.js";
import Header from "./header/Header.js";
import Assessment from "./assessment/Assessment.js";
import RoomsCreate from "./room/RoomsCreate.js";
import Home from "./home/Home.js";

var navEvents = {
  "Profile": "profileNav",
  "Find a Rental": "roomsNav",
  "Create a Rental": "roomsCreateNav",
  "Assessment": "assessmentNav"
};

var App = React.createClass({

  resetState: function() {
    this.setState({
      profile: false, 
      rooms: false, 
      roomsCreate: false,
      assessment: false, 
      home: false
    });
  },

  getInitialState: function() {
      return {
        profile: false, 
        rooms: false, 
        roomsCreate: false,
        assessment: false, 
        home: true
      };
  },

  profileNav: function() {
      return this.setState({profile: true});
  },

  roomsNav: function() {
      return this.setState({rooms: true});
  },

  roomsCreateNav: function() {
      return this.setState({roomsCreate: true});
  },

  assessmentNav: function() {
      return this.setState({assessment: true});
  },

  navTriggered: function(prop) {
      this.resetState();
      return this[navEvents[prop]]();
  },

  render: function() {
    return (
      <div>
        <Header items={['Profile', 'Find a Rental', 'Create a Rental', 'Assessment']} navEvent={this.navTriggered} />
        {this.state.home ? <Home /> : null}
        {this.state.profile ? <Profile /> : null}
        {this.state.rooms ? <RoomsIndex /> : null}
        {this.state.roomsCreate ? <RoomsCreate /> : null}
        {this.state.assessment ? <Assessment /> : null}
      </div>
    );
  }
});

export default App;
