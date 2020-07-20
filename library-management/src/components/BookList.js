import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const BookList = (props) => {
  const [books, booksisLoading] = useContext(BookContext);

  let content = <h3>Loading Books...</h3>;

  if (!booksisLoading && books) {
    content = (
      <div className="card-columns">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    );
  }

  return content;
};

export default BookList;
