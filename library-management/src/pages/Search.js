import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

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

    const listBooks = filteredBooks.map((book, index) => (
      <div key={index} className="card shadow p-0">
        <div className="image-container">
          <img
            className="img.fluid m-0"
            width="100%"
            src={book.image}
            alt=""
          ></img>
        </div>
        <Link to={book.url} key={book.isbn13}>
          <div className="card-body pt-0 pb-4">
            <h4 className="card-title">{book.title}</h4>
            <p className="card-text bright-cyan">{book.authors}</p>
          </div>
        </Link>
      </div>
    ));

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
        <div className="card-columns" id="result-list">
          {listBooks}
        </div>
      </React.Fragment>
    );
  }

  return content;
}

export default Search;
