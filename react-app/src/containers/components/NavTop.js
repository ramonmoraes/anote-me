import React, { Component } from 'react';
import '../../App.css';

var styleMenu = {
   "backgroundColor": "#28479c",
    "color": "#eee"
  }

var styleBtn ={
  "padding":"5px",
  "borderRadius":"2px",
  "backgroundColor":"#ededed",
  "color":"#000"
}

class NavTop extends Component {

  render() {
    return (
      <nav className='nav-top-ui' style={styleMenu} >
        <div className='logo'>
          <h1> Anote-me </h1>
        </div>
        <div className='btn-wrapper'>
          <div className='btn' style={styleBtn} onClick={this.props.logout}>Sair</div>
        </div>
      </nav>
    );

  }
  
}

export default NavTop;
