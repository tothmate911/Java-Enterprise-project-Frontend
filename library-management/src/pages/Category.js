import React from 'react';
import { useParams } from 'react-router-dom';
import useApiCall from '../hooks/ApiCall';
import BookList from '../components/BookList';

function Category() {
  const { category } = useParams();
  const urlBooksInCategory = `http://localhost:8080/books/category/${category}`;
  const [books, booksIsLoading] = useApiCall(urlBooksInCategory);

  let content = <h3>Loading {category} books...</h3>;

  if (!booksIsLoading && books) {
    content = <BookList books={books} booksisLoading={booksIsLoading} />;
  }
  return content;
}

export default Category;
