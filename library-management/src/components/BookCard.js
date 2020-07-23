import React from 'react';
import noCover from './no-cover.webp';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
  let { authors, title, image, url, isbn13, available } = props.book;
  let imgClassNames = "img.fluid m-0";

  if (!available) {
    imgClassNames = "img.fluid m-0 greycover";
  }

  if (!image) {
    image = noCover;
  }

  return (
    <div className="card shadow p-0">
      <Link to={url} key={isbn13}>
        <div className="image-container">
          <img className={imgClassNames} width="100%" src={image} alt=""></img>
        </div>
        <div className="card-body pt-0 pb-4">
          <h4 className="card-title">{title}</h4>
          <p className="card-text bright-cyan">{authors}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
