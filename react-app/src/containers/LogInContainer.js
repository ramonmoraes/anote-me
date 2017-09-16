
import React, { Component } from 'react';
import LogIn from './components/LogIn';

class LogInContainer extends Component {

  loginGoogle =()=> {
    console.log('loginGoogle');
  }

  loginFacebook =()=> {
    console.log('loginFacebook');
  }

  render() {
  return (
    <div className='centered'>
      <LogIn loginFacebook={this.loginFacebook} loginGoogle={this.loginGoogle} />
    </div>
    );
  }
}

export default LogInContainer;
