import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Footer from './layout/Footer';
import Login from './pages/Login';

import { BookProvider } from './context/BookContext';
import { CategoryProvider } from './context/CategoryContext';

function App() {
  return (
    <React.Fragment>
      <Router>
        <BookProvider>
          <CategoryProvider>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={MainPage} />
            </Switch>
            <Footer></Footer>
          </CategoryProvider>
        </BookProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
