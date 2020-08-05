import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './layout/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { BookProvider } from './context/BookContext';
import { CategoryProvider } from './context/CategoryContext';
import Controller from './services/Controller';

function App() {
  return (
    <React.Fragment>
      <Router>
        <BookProvider>
          <CategoryProvider>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/home" component={Controller} />
            </Switch>
            <Footer></Footer>
          </CategoryProvider>
        </BookProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
