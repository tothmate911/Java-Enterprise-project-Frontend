import React from "react";
import { useParams } from "react-router-dom";
import useApiCall from "../hooks/ApiCall";
import BookList from "../components/BookList";

function User() {
  const { user } = useParams();
  const urlBooksInCategory = `http://localhost:8080/books/user/${user}`;
  const [books, booksIsLoading] = useApiCall(urlBooksInCategory);

  let content = <h3>Loading {user} books...</h3>;

  if (!booksIsLoading && books) {
    content = <BookList books={books} booksisLoading={booksIsLoading} />;
  }
  return content;
}

export default User;
