import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useApiCall from '../hooks/ApiCall';

function Category() {
  const { category } = useParams();
  const urlBooksInCategory = `http://localhost:8080/books/category/${category}`;
  const [books, booksIsLoading] = useApiCall(urlBooksInCategory);

  let content = <h3>Loading {category} books...</h3>;

  if (!booksIsLoading && books) {
    const bookIterator = books.map((item, index) => (
      <div key={index} className="card shadow p-0">
        <div className="image-container">
          <img
            className="img.fluid m-0"
            width="100%"
            src={item.image}
            alt=""
          ></img>
        </div>
        <Link to={item.url} key={item.isbn13}>
          <div className="card-body pt-0 pb-4">
            <h4 className="card-title">{item.title}</h4>
            <p className="card-text bright-cyan">{item.authors}</p>
          </div>
        </Link>
      </div>
    ));
    content = <div className="card-columns">{bookIterator}</div>;
  }

  return content;
}

export default Category;
