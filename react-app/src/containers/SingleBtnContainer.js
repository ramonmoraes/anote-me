import React, { Component } from 'react';
import SingleBtn from './components/SingleBtn'

class SingleBtnContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      janela:""
    }

  }

  createOne =()=> {
    this.props.onclick();
  }

  render() {
    return (
      <SingleBtn onclick={this.createOne}/>
    );
  }
}

export default SingleBtnContainer;
