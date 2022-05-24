import { useState } from 'react';

const Book = ({ book }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={'card ' + (darkMode && 'dark')}>
      <div className="card-img">
        <img src={book.image} alt="Book" />
      </div>
      <div className="card-title">{book.title}</div>
      <div className="card-author">{book.author}</div>
      <div className="card-body">{book.desc}</div>
      <div className="card-footer">
        <button
          onClick={() => setDarkMode((state) => !state)}
          className="card-button"
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
};

export default Book;
