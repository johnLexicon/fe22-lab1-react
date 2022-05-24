import Book from './Book';
import './books.css';

const BooksCollection = ({ books }) => {
  return (
    <>
      <h1>Books Collection</h1>
      <div className="books-wrapper">
        {books &&
          books.length &&
          books.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </>
  );
};

export default BooksCollection;
