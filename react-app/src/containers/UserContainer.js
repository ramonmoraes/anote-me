import React, { Component } from 'react';
import NavTopContainer from './NavTopContainer';
import BookContainer from './BookContainer';

class UserContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      objectId:'',

    }
  }

  render() {
  return (
    <div className="App">
      <NavTopContainer logout={this.props.logout}/>
      <BookContainer/>
    </div>
    );
  }
}

export default UserContainer;
