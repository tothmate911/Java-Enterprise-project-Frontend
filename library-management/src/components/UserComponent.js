import React from "react";
import noCover from "./no-cover.webp";
import { Link } from "react-router-dom";

const RowOfRentedBook = (book) => {
  let { image, title, subtitle, url, authors, duedate, isbn10, isbn13 } = book;

  if (!image) {
    image = noCover;
  }

  return (
    <tr>
      <td>
        <div className="row">
          <div className="col">{image}</div>
          <div className="col">
            <Link to={url} key={isbn13}>
              {title} <br />
              {subtitle} <br />
            </Link>
            by {authors}
          </div>
        </div>
      </td>
      <td className="bright-cyan">{duedate.substring(0, 10)}</td>
      <td>{isbn10}</td>
      <td>{isbn13}</td>
    </tr>
  );
};

const TableOfRentedBooks = (books) => {
  return (
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Book</th>
          <th>Due Date</th>
          <th>ISBN10</th>
          <th>ISBN13</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <RowOfRentedBook key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};

const UserComponent = (props) => {
  let { id, username, books } = props.user;

  return (
    <div className="card shadow p-0">
      <div class="card-header">
        <h4 class="card-title">{username}</h4>
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
