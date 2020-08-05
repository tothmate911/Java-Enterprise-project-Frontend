import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layout/Header';
import Book from '../pages/Book';
import Categories from '../pages/Categories';
import Search from '../pages/Search';
import Category from '../pages/Category';
import MainPage from '../pages/MainPage';

const Controller = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container p-5 mb-3">
        <Switch>
          <Route path="/home/book/:isbn13" component={Book} />
          <Route path="/home/categories" component={Categories} />
          <Route exact path="/home/search" component={Search} />
          <Route path="/home/categories/:category" component={Category} />
          <Route path="/home" component={MainPage} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default Controller;
