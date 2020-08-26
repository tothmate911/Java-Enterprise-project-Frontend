import React, { createContext } from 'react';
import useApiCall from '../hooks/ApiCall';

export const BookContext = createContext();

export const BookProvider = (props) => {
  const urlAllBooks = 'http://localhost:8080/books/';
  const [books, booksIsLoading] = useApiCall(urlAllBooks);

  return (
    <BookContext.Provider value={[books, booksIsLoading]}>
      {props.children}
    </BookContext.Provider>
  );
};
