import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";

function Search() {
  const [fetchedData, isLoading] = useContext(BookContext);
  const [search, setSearch] = useState("");
  const [foundBooks, setFoundBooks] = useState([]);

  const handleChange = (event) => {
    const fieldInput = event.target.value.toLowerCase();
    const searchedTitle = fetchedData.filter((book) =>
      book.title.toLowerCase().includes(fieldInput)
    );
    if (fieldInput !== "") {
      setFoundBooks(searchedTitle);
    } else {
      setFoundBooks([]);
    }
    setSearch(fieldInput);
  };

  const searchResults = foundBooks.map((book) => (
    <div key={book.isbn13}>
      <Link to={`/book/${book.isbn13}`}>
        <li>
          {book.authors}: {book.title}
        </li>
      </Link>
    </div>
  ));

  let resultList = <span></span>;
  if (!isLoading) {
    resultList = searchResults;
  }

  return (
    <React.Fragment>
      <h1>Search</h1>
      <input
        type="text"
        class="form-control mt-5"
        placeholder="Search for book"
        value={search}
        onChange={handleChange}
      />
      {resultList}
    </React.Fragment>
  );
}

export default Search;
