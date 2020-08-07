import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layout/Header';
import Book from '../pages/Book';
import Categories from '../pages/Categories';
import Search from '../pages/Search';
import Category from '../pages/Category';
import MainPage from '../pages/MainPage';
import Admin from '../pages/Admin';
import User from '../pages/User';

const Controller = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="page container p-5 mb-3">
        <Switch>
          <Route path="/home/book/:id" component={Book} />
          <Route exact path="/home/categories" component={Categories} />
          <Route exact path="/home/search" component={Search} />
          <Route path="/home/categories/:category" component={Category} />
          <Route exact path="/home/admin" component={Admin} />
          <Route path="/home/user/:username" component={User} />
          <Route path="/home" component={MainPage} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default Controller;
