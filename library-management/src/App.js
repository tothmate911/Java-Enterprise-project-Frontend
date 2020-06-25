import React from "react";
import Header from "./layout/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./layout/Footer";
import Categories from "./layout/Categories";

function App() {

    return (
        <div>
            <Router>
                <Header></Header>
                <div className="container">
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/categories" component={Categories}/>
                </div>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
