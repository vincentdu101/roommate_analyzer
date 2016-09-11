import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./profile/Profile.js";
import RoomsIndex from "./room/RoomsIndex.js";
import Header from "./header/Header.js";
import Assessment from "./assessment/Assessment.js";
import Home from "./home/Home.js";

var App = React.createClass({

  resetState: function() {
    this.state.props = {profile: false, rooms: false, assessment: false, home: false};
  },

  getInitialState: function() {
      return {profile: false, rooms: false, assessment: false, home: true};
  },

  triggerProfileNav: function() {
      return this.setState({profile: true});
  },

  triggerRoomsNav: function() {
      return this.setState({rooms: true});
  },

  triggerAssessmentNav: function() {
      return this.setState({assessment: true});
  },

  navTriggered: function(prop) {
      this.resetState();
      return this["trigger" + prop + "Nav"]();
  },

  render: function() {
    return (
      <div>
        <Header items={['Profile', 'Rooms', 'Assessment']} navEvent={this.navTriggered} />
        {this.state.home ? <Home /> : null}
        {this.state.profile ? <Profile /> : null}
        {this.state.rooms ? <RoomsIndex /> : null}
        {this.state.assessment ? <Assessment /> : null}
      </div>
    );
  }
});

export default App;
