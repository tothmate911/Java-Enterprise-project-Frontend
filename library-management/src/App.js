import React from 'react';
import Header from './layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <div>
      <Router>
        <BookProvider>
          <Header></Header>
          <div className="container">
            <Route exact path="/" component={MainPage} />
          </div>
        </BookProvider>
      </Router>
    </div>
  );
}

export default App;
