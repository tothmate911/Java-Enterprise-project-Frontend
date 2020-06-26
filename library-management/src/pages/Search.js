import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyleContext } from "../context/StyleContext";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [Button] = useContext(StyleContext);
  const [searchBy, setSearchBy] = useState("title");
  let resultList = <span></span>;

  const handleClick = (searchType) => {
    setSearchBy(searchType);
    setSearch(document.getElementById("search-field").value.toLowerCase());
    resultList = <span></span>;
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/books/search/" + searchBy + "/" + search, {})
      .then((response) => setResult(response.data));
  }, [searchBy, search]);

  if (result) {
    resultList = result.map((book) => (
      <div key={book.isbn13}>
        <Link to={`/book/${book.isbn13}`}>
          <li>
            {book.authors}: {book.title}
          </li>
        </Link>
      </div>
    ));
  }

  return (
    <React.Fragment>
      <h1>Search</h1>
      <form>
        <input
          type="text"
          id="search-field"
          class="form-control mt-5"
          placeholder="Search for book"
        />
        <Button type="button" onClick={() => handleClick("Title")}>
          by Title
        </Button>
        <Button type="button" onClick={() => handleClick("Authors")}>
          by Author
        </Button>
      </form>
      <span id="result-list">{resultList}</span>
    </React.Fragment>
  );
}

export default Search;
