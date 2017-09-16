import React, { Component } from 'react';
import '../../App.css';

class SingleBtn extends Component {
render() {
    return (
      <div className='singleBtn' onClick={this.props.createOne}>
        <p> Criar </p>
      </div>
    );
  }
}

export default SingleBtn;
