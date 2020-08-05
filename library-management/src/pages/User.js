import React from "react";
import { useParams } from "react-router-dom";
import useApiCall from "../hooks/ApiCall";
import BookList from "../components/BookList";

function User() {
  const { username } = useParams();
  const urlBooksInCategory = `http://localhost:8080/books/user/${username}`;
  const [books, booksIsLoading] = useApiCall(urlBooksInCategory);

  let content = <h3>Loading books...</h3>;

  if (!booksIsLoading && books) {
    content = (
      <div>
        <h3 className="p-3">My checked out books: </h3>
        <BookList books={books} booksisLoading={booksIsLoading} />
      </div>
    );
  }
  return content;
}

export default User;
