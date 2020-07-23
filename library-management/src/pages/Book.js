import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import Button from "../styledComponents/Button";
import noCover from "../components/no-cover.webp";
import BeautyStars from "beauty-stars";
import { useParams } from "react-router";
import useApiCall from "../hooks/ApiCall";
import axios from "axios";

function Book() {
  let { isbn13 } = useParams();
  let urlBorrow = `http://localhost:8080/books/getstatus/${isbn13}`;
  const [books, booksIsLoading] = useContext(BookContext);
  let [canBorrow, canBorrowIsLoading] = useApiCall(urlBorrow);

  let content = <h3>Loading Book...</h3>;

  let status = true;

  if (!canBorrowIsLoading && canBorrow) {
    status = canBorrow;
  }

  if (!booksIsLoading && books) {
    let book = books.find((book) => book.isbn13 === isbn13);
    let {
      authors,
      title,
      subtitle,
      rating,
      desc,
      image,
      year,
      publisher,
      language,
      pages,
      isbn10,
      duedate,
    } = book;

    let details = { year, publisher, language, pages, isbn10, isbn13 };

    let tableContent = Object.entries(details).map(([key, value]) => {
      return (
        <tr key={key}>
          <th style={{ textTransform: "capitalize" }}>{key}:</th>
          <td>{value.toString()}</td>
        </tr>
      );
    });

    let tableOfDetails = (
      <table className="table">
        <tbody>{tableContent}</tbody>
      </table>
    );

    if (!image) {
      image = noCover;
    }

    let cancelButton;

    let handleCancel = () => {
      axios
        .get(`http://localhost:8080/books/cancel/${isbn13}`)
        .then((response) => {
          status = response;
          cancelButton = "";
          window.location.reload(false);
        });
    };

    const cancelButtonContent = (
      <Button type="button" onClick={handleCancel}>
        Cancel
      </Button>
    );

    const handleBorrow = () => {
      urlBorrow = `http://localhost:8080/books/${isbn13}`;
      axios.get(urlBorrow).then((response) => {
        status = response;
        cancelButton = cancelButtonContent;
        window.location.reload();
      });
    };

    let imgClassNames = "";
    let message = "";

    if (!canBorrow && duedate !== null) {
      imgClassNames = "greycover";
      message = (
        <p className="yellow">
          The book is checked out until: {duedate.substring(0, 10)}
        </p>
      );
      cancelButton = cancelButtonContent;
    }

    content = (
      <React.Fragment>
        <div className="row">
          <div className="col-5 details pl-4 pr-4 pt-0">
            <div className="pt-2 pl-5 pr-5 pb-2">
              <img width="100%" className={imgClassNames} src={image} alt="" />
            </div>
            {tableOfDetails}
          </div>
          <div className="col ml-2">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h5 className="bright-cyan">by {authors}</h5>
            <BeautyStars
              size="25px"
              value={rating}
              onChange={(value) => this.setState({ value })}
            />
            <br />
            <Button
              disabled={canBorrow === false}
              type="button"
              onClick={handleBorrow}
            >
              Borrow
            </Button>
            {cancelButton}
            <br />
            {message}
            <p className="mt-3">{desc}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return content;
}

export default Book;
