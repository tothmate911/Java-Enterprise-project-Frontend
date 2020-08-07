import React, { createContext, useState } from 'react';
import axios from 'axios';

export const BookContext = createContext();

export const BookProvider = (props) => {
  let books = [];
  let booksIsLoading = false;

  const fillBooksWithData = () => {
    const urlAllBooks = 'http://localhost:8080/books/';
    booksIsLoading = true;
    axios
      .get(urlAllBooks, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        books = response.data;
        booksIsLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BookContext.Provider value={[books, booksIsLoading, fillBooksWithData]}>
      {props.children}
    </BookContext.Provider>
  );
};
