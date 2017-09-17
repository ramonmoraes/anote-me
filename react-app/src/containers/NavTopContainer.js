import React, { Component } from 'react';
import NavTop from './components/NavTop';

class NavTopContainer extends Component {

  logout =()=> {
    this.props.logout()
  }

  render() {
  return (
      <NavTop logout={this.logout} />
    );
  }
}

export default NavTopContainer;
