import React, { Component } from 'react';
import '../../App.css';

class SingleBtn extends Component {
render() {
    return (
      <div className='singleBtn' onClick={this.props.onclick}>
        <p> Criar </p>
      </div>
    );
  }
}

export default SingleBtn;
