import React, { Component } from 'react';
import '../../App.css';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      roof:this.props.roof,
      title:this.props.title
    }
  }
  styleRoof=()=>{
    return ({
      "backgroundColor":this.state.roof
    })
  }
  render() {
    return (
      <div className="book" onClick={this.props.getPages}>
      <div className='roof' style={this.styleRoof()}>
      </div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default Book;
