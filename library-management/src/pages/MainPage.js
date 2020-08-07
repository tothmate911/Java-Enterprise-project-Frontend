import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import BookList from '../components/BookList';
import { BookContext } from '../context/BookContext';

const MainPage = () => {
  // const [books, booksIsLoading] = useContext(BookContext);

  const [books, setBooks] = useState([]);
  const [booksIsLoading, setBooksIsLoading] = useState(false);

  useEffect(() => {
    const urlAllBooks = 'http://localhost:8080/books/';
    console.log('MainPage: sending request to: ' + urlAllBooks);
    setBooksIsLoading(true);
    axios
      .get(urlAllBooks, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        setBooks(response.data);
        setBooksIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <h1>New books</h1>
      <BookList books={books} booksIsLoading={booksIsLoading} />
    </React.Fragment>
  );
};

export default MainPage;
