import React from 'react';
import './App.css';
import Search from './components/Search';
import Saved from './components/Saved';



function App() {
  state = {
    Books: [
      {
        _id: 1,
        title: 'Harry Potter',
      },
      
      {
        _id: 2,
        author: 'JK Rowling',
      },
      {
        _id: 3,
        description: 'Harry and the gang take on spells',
      },
      {
        _id: 4,
        image: 'Harry Potter',
      },
      {
        _id: 5,
        link: 'link',
      }
    ]
  }
  return (
    <div className="App">
    <h1>Hello World</h1>
    <Search />
    <Saved />
    </div>
  );
}

export default App;
