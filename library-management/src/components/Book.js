import React from 'react';
import noCover from './no-cover.webp';

const Book = (props) => {
  let { authors, title, image } = props.book;

  if (!image) {
    image = noCover;
  }

  return (
    <div className="card bg-light">
      <img className="card-img-top" src={image} alt={title}></img>
      <div className="card-body">
        <h8 className="card-title">{`${authors}: ${title}`}</h8>
      </div>
    </div>
  );
};

export default Book;
