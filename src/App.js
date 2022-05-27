import './App.css';
import Navbar from './components/Navbar/Navbar';
import BooksCollection from './components/BooksCollection';
import bookData from './data/books';
import { useState } from 'react';

function App() {
  const [books] = useState(bookData.books);
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser((state) => user);
  };

  return (
    <div className="App">
      <Navbar title="Welcome" user={user} handleLogin={handleLogin} />
      {user ? (
        <div className="container">
          <BooksCollection books={books} />
        </div>
      ) : (
        <h1>Log in to see the Books Collection</h1>
      )}
    </div>
  );
}

export default App;
