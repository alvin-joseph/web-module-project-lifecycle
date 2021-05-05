import React from 'react';
import './App.css';
import axios from 'axios';

import Followers from './components/Followers'

class App extends React.Component {
  state = {
    user:{},
    followers:[]
  }

  componentDidMount() {
    Promise.all([
      axios.get('https://api.github.com/users/alvin-joseph'),
      axios.get('https://api.github.com/users/alvin-joseph/followers')
    ])
        .then(res => {
            console.log('resp', res[0]); //step 4
            console.log('resp2', res[1]); //step 4
            this.setState({
                user:res[0].data,
                followers:res[1].data
            })
            //console.log(this.state.user.avatar_url);
        })
        .catch(err => {
            console.log(err);
        })
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="my-info">
            <h1>My Profile</h1>
            <img 
            src={this.state.user.avatar_url} 
            alt="my pic"
            height="320"
            /><br/>
            <h2>Hi my name is {this.state.user.name}</h2>
            <a href={this.state.user.html_url}>{this.state.user.html_url}</a>
          </div>
        </div>
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
