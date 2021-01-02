import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      imgUrl: ''
    };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`
    let response = await axios.get(url);
    let data = response.data;
    this.setState({ name: data.name, imgUrl: data.avatar_url });
  }

  render() {
    return (
      <div>
        {/* If no name and url, don't display this - add conditional logic */}
        <h1>Github User: {this.state.name}</h1>
        <img src={this.state.imgUrl} alt=""/>
      </div>
    )
  }
}

export default GithubUserInfo;