import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import CommentShare from './CommentShare'
import TitleAuthor from './TitleAuthor'
import SideImage from './SideImage';
import ImagesAtBottom from './ImagesAtBottom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            
            <TitleAuthor />

            <Article />

            <CommentShare />

          </div>
          
          <SideImage />

          <ImagesAtBottom />
          
        </main>

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
