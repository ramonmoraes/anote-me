import React, { Component } from 'react';
import '../../App.css';

class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      roof:this.props.roof,
      title:this.props.title,
      id:this.props.id,
      content:this.props.content
    }
  }

  styleRoof=()=>{
    return ({
      "backgroundColor":this.state.roof
    })
  }

  editPages =()=> {
    console.log('Editar page com id no. :' +this.props.id);
    console.log('pop-up do editor com as infos');
  }

  render() {
    return (
      <div className="book" onClick={this.editPage}>
        <div className='roof' style={this.styleRoof()}>
        </div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default Page;
