import React, { Component } from 'react';
import Page from './components/Page'
import SingleBtnContainer from './SingleBtnContainer'
class PageContainer extends Component {
constructor(props){
  super(props);
  this.state ={
    pages:[{
      title:'titulo',
      content:'content'
    }]
  }
}
createOne() {
  console.log('createOne page on this book, which the id is :'+this.props.id);
}
render() {
  let listOfPages = [];
  let i=0;
  this.state.pages.map( (info)=>{
    listOfPages.push ( <Page title={info.title} content={info.content} key={i} /> );
    i++;
  });
  return (
    <div className='containerFlex'>
      {listOfPages}
      <SingleBtnContainer onclick={this.createOne}/>
    </div>
    );
  }
}

export default PageContainer;
