import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Article from './Article'
import CommentShare from './CommentShare'
import TitleAuthor from './TitleAuthor'
import SideImage from './SideImage';
import ImagesAtBottom from './ImagesAtBottom';
import Footer from './Footer';

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

            <h6 id = "comm"></h6>

          </div>
          
          <SideImage />

          <ImagesAtBottom/>

        </main>

          <Footer />
      </div>
    );
  }
}

export default App;
