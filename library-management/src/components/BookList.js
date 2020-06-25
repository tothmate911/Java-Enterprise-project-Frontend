import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import Book from '../components/Book';

const BookList = (props) => {
  const [fetchedData, isLoading] = useContext(BookContext);

  let content = <h3>Loading Books...</h3>;

  if (!isLoading && fetchedData) {
    content = (
      <div className="card-columns m-5">
        {fetchedData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  }

  return content;
};

export default BookList;
