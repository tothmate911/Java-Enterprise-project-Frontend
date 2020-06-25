import React from "react";
import BookList from "../components/BookList";

function MainPage() {
  return (
    <React.Fragment>
      <h1>New books</h1>
      <BookList />
    </React.Fragment>
  );
}

export default MainPage;
