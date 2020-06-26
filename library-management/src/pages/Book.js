import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import noCover from '../components/no-cover.webp';
import styled from 'styled-components';
import BeautyStars from 'beauty-stars';
import { useParams } from 'react-router';

function Book() {
  let { isbn13 } = useParams();
  const [fetchedData, isLoading] = useContext(BookContext);

  let content = <h3>Loading Book...</h3>;

  const Button = styled.button`
    border: none;
    color: #c5c6c7;
    background-color: #0b0c10;
    border: 2px solid #66fcf1;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus,
    &:visited {
      border: 2px solid #45a29e !important;
      color: #45a29e !important;
    }
  `;

  if (!isLoading && fetchedData) {
    let book = fetchedData.find((book) => book.isbn13 === isbn13);
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
    } = book;

    let details = { year, publisher, language, pages, isbn10, isbn13 };

    let tableContent = Object.entries(details).map(([key, value]) => {
      return (
        <tr>
          <th style={{ textTransform: 'capitalize' }}>{key}:</th>
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

    content = (
      <React.Fragment>
        <div className="row">
          <div className="col-5 details pl-4 pr-4 pt-0">
            <div className="pt-2 pl-5 pr-5 pb-2">
              <img width="100%" src={image} alt=""/>
            </div>
            {tableOfDetails}
          </div>
          <div className="col ml-2">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h5>by {authors}</h5>
            <BeautyStars
              size="25px"
              value={rating}
              onChange={(value) => this.setState({ value })}
            />
            <br />
            <Button type="button">Borrow</Button>
            <p className="mt-3">{desc}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return content;
}

export default Book;
