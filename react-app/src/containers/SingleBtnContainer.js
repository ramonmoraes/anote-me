import React, { Component } from 'react';
import SingleBtn from './components/SingleBtn'

class SingleBtnContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      janela:""
    }
  }
  createOne =()=>{
    console.log('createOne');
  }
  render() {
    return (
      <SingleBtn createOne={this.createOne} />
    );
  }
}

export default SingleBtnContainer;
