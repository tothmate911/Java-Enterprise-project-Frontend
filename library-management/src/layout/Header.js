import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            width="auto"
            height="120"
            class="d-inline-block align-middle"
            alt=""
          />
          IT Library
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" href="#">
              Categories <span class="sr-only">(current)</span>
            </Link>
            <Link class="nav-item nav-link" href="#">
              Search
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
