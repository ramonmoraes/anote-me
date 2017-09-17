import React, { Component } from 'react';
import './App.css';
import LogInContainer from './containers/LogInContainer';
import UserContainer from './containers/UserContainer';

import FB from './containers/LogInContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged:false,
      user_id:'',
      user_token:''
    }
  }

  login =(user)=> {
    this.setState({
      logged:true,
      user_id:user.id,
      user_token:user.token
    });
    // console.log(user);
  }

  logout =()=> {
    LogInContainer.logoutFacebook;
    this.setState({
      logged:false,
      user_id:'no_user',
      token:"no_token"
    })
  }

  render() {
    if(this.state.logged===false){
      return (
            <LogInContainer login={this.login}/>
        );
    }else{
      return(
          <UserContainer user={this.state.user_id} token={this.state.user_token} logout={this.logout}/>
      );
    }

  }
}

export default App;
