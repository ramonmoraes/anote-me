import React, { Component } from 'react';
import Book from './components/Book';
import '../App.css';


class BookContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[{
        title:'title',
        roof:'roof',
        id:"id"
      }]
    }
  }
  getPages=()=>{
    console.log('get pages');
  }
  render() {
    return (
      <div className="containerFlex">
        <Book title='Ramon' roof='' getPages={this.getPages} />
        <Book title='Wofe' roof='tomato' getPages={this.getPages}/>
        </div>
    );
  }
}

export default BookContainer;
