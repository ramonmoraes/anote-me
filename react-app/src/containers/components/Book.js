import React, { Component } from 'react';
import '../../App.css';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roof:this.props.roof,
      title:this.props.title,
      id:this.props.id
    }

  }

  styleRoof =()=> {
    return ({
      "backgroundColor":this.state.roof
    })
  }

  getPages =()=> {
    console.log('Procurar paginas do book de id :' +this.state.id);
    this.props.getPages(this.state.id)
  }

  render() {

    return (
      <div className="book" onClick={this.getPages}>
        <div className='roof' style={this.styleRoof()}>
        </div>
        <h1>{this.state.title}</h1>
      </div>
    );

  }
}

export default Book;
