const Book = ({ book }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={book.image} alt="Book" />
      </div>
      <div className="card-title">{book.title}</div>
      <div className="card-author">{book.author}</div>
      <div className="card-body">{book.desc}</div>
    </div>
  );
};

export default Book;
