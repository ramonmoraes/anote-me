import React, { Component } from 'react';
import NavTopContainer from './NavTopContainer';
import BookContainer from './BookContainer';
// import PageContainer from './PageContainer';

class UserContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      janela:{
          id:'',
          janela:'book'
      },
      id:this.props.id,
      token:this.props.token
    }
  }

  PageOrBook =(ele)=>{
    console.log('element is :' + ele);
  }

  render() {
  return (
    <div className="App">
      <NavTopContainer logout={this.props.logout}/>
      <BookContainer user_id={this.state.id}/>
    </div>
    );
  }
}

export default UserContainer;
