import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import BookList from '../components/BookList';
import { BookContext } from '../context/BookContext';
import Header from '../layout/Header';
import Book from '../pages/Book';
import Categories from '../pages/Categories';
import Search from '../pages/Search';
import Category from '../pages/Category';

const MainPage = () => {
  const [books, booksIsLoading] = useContext(BookContext);

  return (
    <React.Fragment>
      <Header></Header>
      <div className="container p-5 mb-3">
        <h1>New books</h1>
        <BookList books={books} booksIsLoading={booksIsLoading} />
        <Switch>
          <Route path="/book/:isbn13" component={Book} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/search" component={Search} />
          <Route path="/categories/:category" component={Category} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
