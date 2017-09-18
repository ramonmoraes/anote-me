import React, { Component } from 'react';
import SingleBtnContainer from './SingleBtnContainer';
import PageContainer from './PageContainer';
import Book from './components/Book';
import '../App.css';


class BookContainer extends Component {
  constructor(props) {
    super(props);

    this.state={
      books:[{
        title:'title',
        roof:'roof',
        id:"1"
      },
      {
        title:'titulo diaaaabo',
        roof:'roof',
        id:"53084"
      }],
      janela:'books',
      book_id:''
    }

  }

  componentDidMount() {
    //fetchbooks @app/users/caderno
    console.log('fecth infos book container');
  }

  createOne =()=> {
    console.log('craete new book refering the user id: '+this.props.user_id);
  }

  getPages =(id)=> {
    console.log("id do book : "+ id);
    this.setState({
      janela:'page',
      book_id:id
    });
  }

  render() {
    let listOfBooks = [];
    let i=0;
    this.state.books.map( (info)=>{
      listOfBooks.push( <Book title={info.title} roof={info.roof} id={info.id} getPages={this.getPages} key={i}/> );
      i++;
      return 'plus1';
    });

    if(this.state.janela==='books'){

      return (
        <div className="containerFlex">
          {listOfBooks}
          <SingleBtnContainer onclick={this.createOne}/>
        </div>
      );

    } else {

      return(
        <PageContainer id={this.state.book_id}/>
      );

    }
  }
}

export default BookContainer;
