import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

const BookList = (props) => {
  const [fetchedData, isLoading] = useContext(BookContext);

  let content = <h3>Loading Books...</h3>;

  if (!isLoading && fetchedData) {
    content = (
      <div className="card-columns">
        {fetchedData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    );
  }

  return content;
};

export default BookList;
