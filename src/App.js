import './App.css';
import Navbar from './components/Navbar';
import BooksCollection from './components/BooksCollection';
import bookData from './data/books';
import { useState } from 'react';

function App() {
  const [books] = useState(bookData.books);

  return (
    <div className="App">
      <Navbar user={null} />
      <div className="container">
        <BooksCollection books={books} />
      </div>
    </div>
  );
}

export default App;
