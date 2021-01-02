import React, { Component } from 'react';
import Timer from './components/Timer';
import ZenQuote from './components/ZenQuote';
import GithubUserInfo from './components/GithubUserInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Lifecycle Methods</h1>
        <Timer />
        <ZenQuote />
        <GithubUserInfo username="facebook" />
        <GithubUserInfo username="gaearon" />
        <GithubUserInfo username="sophiebits" />
        <GithubUserInfo username="vtothe2ndpower" />
      </div>
    );

  }
}

export default App;
