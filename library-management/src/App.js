import React from "react";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Book from "./pages/Book";
import Footer from "./layout/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header></Header>
        <div className="container p-5 mb-3">
          <Route exact path="/" component={MainPage} />
          <Route exact path="/book" component={Book} />
        </div>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
