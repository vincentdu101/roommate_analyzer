import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./profile/Profile.js";
import Header from "./header/Header.js";

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Profile />
      </div>
    );
  }
});

export default App;
