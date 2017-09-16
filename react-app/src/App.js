import React, { Component } from 'react';
import './App.css';
import LogInContainer from './containers/LogInContainer';
import UserContainer from './containers/UserContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged:false,
      user_id:'',
      token:''
    }
  }

  login =(user)=> {
    this.setState({
      logged:true,
      user_id:user.id,
      token:user.token
    })
  }

  logout =()=> {
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
        <UserContainer user={this.state.user_id} logout={this.logout}/>
      );
    }

  }
}

export default App;
