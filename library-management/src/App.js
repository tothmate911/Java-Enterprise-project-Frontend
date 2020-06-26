import React from "react";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./layout/Footer";
import Categories from "./layout/Categories";
import { BookProvider } from "./context/BookContext";
import { StyleProvider } from "./context/StyleContext";
import Book from "./pages/Book";
import Search from "./pages/Search";
import Category from "./pages/Category";

function App() {
  return (
    <React.Fragment>
      <Router>
        <StyleProvider>
          <BookProvider>
            <Header></Header>
            <div className="container p-5 mb-3">
              <Route exact path="/" component={MainPage} />
              <Route path="/book/:isbn13" component={Book} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/search" component={Search} />
              <Route path="/categories/:category" component={Category}/>
            </div>
            <Footer></Footer>
          </BookProvider>
        </StyleProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
