import React from "react";
import noCover from "./no-cover.webp";
import styled from "styled-components";

function Book() {
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

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-5 details p-4">
          <img className="mb-5 shadow" width="100%" src={noCover} alt=""></img>
          <h6>Year: </h6>
          <h6>Publisher: </h6>
          <h6>ISBN10: </h6>
          <h6>ISBN13: </h6>
          <h6>Pages: </h6>
          <p>Chapters component</p>
        </div>
        <div className="col ml-2">
          <h1>Title</h1>
          <h3>Subtitle</h3>
          <h5>by Authors</h5>
          <p>Rating</p>
          <Button type="button">Borrow</Button>
          <p>
            Description, Description, Description, Description, Description,
            Description, Description, Description, Description, Description,
            Description, Description, Description, Description, Description
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Book;
