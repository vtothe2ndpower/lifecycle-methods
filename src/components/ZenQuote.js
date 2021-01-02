import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.scss';

class ZenQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      isLoaded: false
    };
  }

  componentDidMount() {
    // load data
    // set state with the data
    axios.get('https://api.github.com/zen')
    .then(response => {
      setTimeout(function() {
        this.setState({ quote: response.data, isLoaded: true });
      }.bind(this), 3000);
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (        
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
          ) : (
          <div className="showbox">
            <div className="loader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
              </svg>
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default ZenQuote;