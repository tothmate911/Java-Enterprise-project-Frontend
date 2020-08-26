import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import axios from 'axios';

function Search() {
  const [filteredBooks, setFilteredBooks] = useState([]);

  let content = <h3>Loading...</h3>;

  const [input, setInput] = useState('@');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/searchby/${input}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setFilteredBooks(response.data);
      });
  }, [input]);

  const handleQuery = (event) => {
    const fieldInput = event.target.value.toLowerCase();
    setInput(fieldInput);
    if (fieldInput.length < 1) setInput('@');
  };

  content = (
    <React.Fragment>
      <h1>Search</h1>
      <form>
        <input
          onChange={handleQuery}
          type="text"
          id="search-field"
          className="form-control mt-5"
          placeholder="Search for book"
        />
      </form>
      <BookList books={filteredBooks} booksIsLoading={false} />
    </React.Fragment>
  );

  return content;
}

export default Search;
