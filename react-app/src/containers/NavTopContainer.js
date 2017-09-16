import React, { Component } from 'react';
import NavTop from './components/NavTop';

class NavTopContainer extends Component {

  logOut =()=> {
    this.props.logOut()
  }

  render() {
  return (
      <NavTop logOut={this.logOut} />
    );
  }
}

export default NavTopContainer;
