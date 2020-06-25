import React from "react";
import noCover from "./no-cover.webp";

const BookCard = (props) => {
  let { authors, title, image } = props.book;

  if (!image) {
    image = noCover;
  }

  return (
    <div class="card shadow p-0">
      <div className="image-container">
        <img class="img.fluid m-0" width="100%" src={image} alt=""></img>
      </div>
      <div class="card-body pt-0 pb-2">
        <h6 class="card-title">{`${authors}: ${title}`}</h6>
      </div>
    </div>
  );
};

export default BookCard;
