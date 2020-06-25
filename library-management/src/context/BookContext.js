import React, { createContext } from 'react';
import useApiCall from '../hooks/ApiCall';

export const BookContext = createContext();

export const BookProvider = (props) => {
  const urlAllBooks = 'http://localhost:8080/books/';
  const [fetchedData, isLoading] = useApiCall(urlAllBooks);

  return (
    <BookContext.Provider value={[fetchedData, isLoading]}>
      {props.children}
    </BookContext.Provider>
  );
};
