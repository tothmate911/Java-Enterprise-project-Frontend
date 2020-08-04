import React from "react";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./layout/Footer";
import Categories from "./pages/Categories";
import { BookProvider } from "./context/BookContext";
import { CategoryProvider } from "./context/CategoryContext";
import Book from "./pages/Book";
import Search from "./pages/Search";
import Category from "./pages/Category";
import User from "./pages/User";

function App() {
  return (
    <React.Fragment>
      <Router>
        <BookProvider>
          <CategoryProvider>
            <Header></Header>
            <div className="container p-5 mb-3">
              <Route exact path="/" component={MainPage} />
              <Route path="/book/:isbn13" component={Book} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/search" component={Search} />
              <Route path="/categories/:category" component={Category} />
              <Route path="/user/:username" component={User} />
            </div>
            <Footer></Footer>
          </CategoryProvider>
        </BookProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
