import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./profile/Profile.js";
import RoomsIndex from "./room/RoomsIndex.js";
import Header from "./header/Header.js";

var App = React.createClass({

  resetState: function() {
    this.state.props = {profile: false, rooms: false, assessment: true};
  },

  getInitialState: function() {
      return {profile: false, rooms: true, assessment: false};
  },

  navTriggered: function(prop) {
      prop = prop.toLowerCase();
      this.resetState();
      this.state[prop] = true;
  },

  render: function() {
    return (
      <div>
        <Header items={['Profile', 'Rooms']} navEvent={this.navTriggered} />
        {this.state.profile ? <Profile /> : null}
        {this.state.rooms ? <RoomsIndex /> : null}
      </div>
    );
  }
});

export default App;
