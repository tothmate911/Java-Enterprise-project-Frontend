import React from "react";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./layout/Footer";

function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <div className="container">
          <Route exact path="/" component={MainPage} />
        </div>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
