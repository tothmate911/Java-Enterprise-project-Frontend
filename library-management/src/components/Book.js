import React from 'react';
import noCover from './no-cover.webp';

const Book = (props) => {
  let content = (
    <div className="card bg-light">
      <img className="card-img-top" src={noCover} alt=""></img>
      <div className="card-body">
        <h5 className="card-title">Book title</h5>
      </div>
    </div>
  );

  if (props.book) {
    const { authors, title, image } = props.book;

    content = (
      <div className="card bg-light">
        <img className="card-img-top" src={image} alt={title}></img>
        <div className="card-body">
          <h8 className="card-title">{`${authors}: ${title}`}</h8>
        </div>
      </div>
    );
  }

  return content;
};

export default Book;
