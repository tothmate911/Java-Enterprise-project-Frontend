import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import BookList from '../components/BookList';

function Search() {
  const [allBooks, allBooksIsLoading] = useContext(BookContext);
  const [filteredBooks, setFilteredBooks] = useState([]);

  let content = <h3>Loading...</h3>;

  if (!allBooksIsLoading && allBooks) {
    const handleQuery = (event) => {
      const fieldInput = event.target.value.toLowerCase();
      const searchedBook = allBooks.filter((item) =>
        item.title.toLowerCase().includes(fieldInput)
      );
      if (fieldInput !== '') {
        setFilteredBooks(searchedBook);
      } else if (fieldInput === '') {
        setFilteredBooks([]);
      } else {
        setFilteredBooks(searchedBook);
      }
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
  }
  return content;
}

export default Search;
