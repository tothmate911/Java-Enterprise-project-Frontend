import React from 'react';
import BookCard from '../components/BookCard';

const BookList = ({ books, booksIsLoading }) => {
  let content = <h3>Loading Books...</h3>;

  if (!booksIsLoading && books) {
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
