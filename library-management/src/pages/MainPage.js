import React, { useContext } from 'react';
import BookList from '../components/BookList';
import { BookContext } from '../context/BookContext';

function MainPage() {
  const [books, booksIsLoading] = useContext(BookContext);

  return (
    <React.Fragment>
      <h1>New books</h1>
      <BookList books={books} booksIsLoading={booksIsLoading} />
    </React.Fragment>
  );
}

export default MainPage;
