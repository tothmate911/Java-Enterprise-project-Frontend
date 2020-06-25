import React from "react";
import noCover from "./no-cover.webp";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  let { authors, title, image, url, isbn13 } = props.book;

  if (!image) {
    image = noCover;
  }

  return (
    <div class="card shadow p-0">
      <div className="image-container">
        <img class="img.fluid m-0" width="100%" src={image} alt=""></img>
      </div>
      <Link to={url} key={isbn13}>
        <div class="card-body pt-0 pb-2">
          <h6 class="card-title">{`${authors}: ${title}`}</h6>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
