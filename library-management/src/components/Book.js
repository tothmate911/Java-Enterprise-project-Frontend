import React from 'react';
import noCover from './no-cover.webp';

const Book = () => {
  return (
    <div className="card bg-light">
      <img className="card-img-top" src={noCover} alt=""></img>
      <div className="card-body">
        <h5 className="card-title">Book title</h5>
      </div>
    </div>
  );
};

export default Book;
