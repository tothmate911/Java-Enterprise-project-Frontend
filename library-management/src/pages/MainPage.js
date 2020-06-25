import React from 'react';
import BookList from '../components/BookList';

function MainPage() {
  return (
    <React.Fragment>
    <BookList />
      <h1>New books</h1>
      <div class="card-columns">
        <div class="card shadow">
          <img class="card-img-top" src={noCover} alt=""></img>
          <div class="card-body">
            <h6 class="card-title">Book title</h6>
          </div>
        </div>
        <div class="card shadow">
          <img class="card-img-top" src={noCover} alt=""></img>
          <div class="card-body text-justify-center">
            <h6 class="card-title">Book title</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
