import React from 'react';
import noCover from '../components/no-cover.webp';
import styled from 'styled-components';
import BeautyStars from 'beauty-stars';

const value = 3;

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
        <div className="col-5 details pl-4 pr-4 pt-0">
          <div className="pt-2 pl-5 pr-5 pb-2">
            <img width="100%" src={noCover} alt=""></img>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th>Published:</th>
                <td></td>
              </tr>
              <tr>
                <th>Publisher:</th>
                <td></td>
              </tr>
              <tr>
                <th>Language:</th>
                <td></td>
              </tr>
              <tr>
                <th>Pages:</th>
                <td></td>
              </tr>
              <tr>
                <th>ISBN10:</th>
                <td></td>
              </tr>
              <tr>
                <th>ISBN13:</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col ml-2">
          <h1>Title</h1>
          <h3>Subtitle</h3>
          <h5>by Authors</h5>
          <BeautyStars
            size="25px"
            value={value}
            onChange={(value) => this.setState({ value })}
          />
          <br />
          <Button type="button">Borrow</Button>
          <p className="mt-3">
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
