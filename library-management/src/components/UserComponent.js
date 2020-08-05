import React from "react";
import noCover from "./no-cover.webp";
import { Link } from "react-router-dom";

const RowOfRentedBook = (props) => {
  let {
    image,
    title,
    subtitle,
    url,
    authors,
    duedate,
    isbn10,
    isbn13,
  } = props.book;

  duedate = !duedate ? "Available" : duedate.substring(0, 10);
  url = "/home" + url;

  if (!image) {
    image = (
      <div className="image-container">
        <img className="img.fluid m-0" width="100%" src={noCover} alt=""></img>
      </div>
    );
  } else {
    image = <img className="table-img" src={image} alt=""></img>;
  }

  return (
    <tr>
      <td>
        <div className="row table-book">
          <div className="col table-img-container">{image}</div>
          <div className="col d-flex">
            <span className="table-book-titles align-self-center">
              <div className="col table-title">
                <Link to={url} key={isbn13}>
                  <div className="col table-title">{title}</div>
                </Link>
              </div>
              <div className="row">
                <Link to={url} key={isbn13}>
                  <div className="col table-subtitle">{subtitle}</div>
                </Link>
              </div>
              <div className="row">
                <div className="col table-authors">by {authors}</div>
              </div>
            </span>
          </div>
        </div>
      </td>
      <td>{isbn10}</td>
      <td>{isbn13}</td>
      <td className="text-warning">{duedate}</td>
    </tr>
  );
};

const TableOfRentedBooks = (props) => {
  let books = props.books;
  return (
    <table className="table table-responsive">
      <thead>
        <tr>
          <th className="table-book">Book</th>
          <th>ISBN10</th>
          <th>ISBN13</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <RowOfRentedBook id={index} book={book} />
        ))}
      </tbody>
    </table>
  );
};

const UserComponent = (props) => {
  let { id, username, books } = props.user;

  return (
    <div className="card shadow p-0 m-3">
      <div className="card-header">
        <h4 className="card-title mt-4 text-light">{username}</h4>
      </div>
      <div className="card-body pt-0 pb-4">
        <div>
          <TableOfRentedBooks key={id} books={books} />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
