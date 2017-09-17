import React, { Component } from 'react';
import NavTopContainer from './NavTopContainer';
import BookContainer from './BookContainer';
import SingleBtnContainer from './SingleBtnContainer';

class UserContainer extends Component {

  render() {
  return (
    <div className="App">
      <NavTopContainer logout={this.props.logout}/>
      <BookContainer/>
      <SingleBtnContainer/>
    </div>
    );
  }
}

export default UserContainer;
