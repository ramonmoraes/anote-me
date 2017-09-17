import React, { Component } from 'react';

class LogIn extends Component {
render() {
  return (
      <div className='reactLogin'>
      <div className='roof' > </div>
      <div className='loginButtons'>
        <h1> Log In </h1>
        <button className='btn red' onClick={this.props.loginGoogle}> Log-in com <span>Google</span> </button>
        <button className='btn blue' onClick={this.props.loginFacebook}> Log-in com <span>Facebook</span> </button>
        <p className='disclaimer'>
          *Suas informações com as respectivas empresas estão seguras.
        </p>
      </div>
      </div>
    );
  }
}

export default LogIn;
