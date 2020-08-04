import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Button from "../styledComponents/Button";

function Header() {
  const username = "user123";
  const userButton = (
    <Link className="nav-item nav-link" key={username} to={`/user/${username}`}>
      <i class="fas fa-user"></i> {username}
    </Link>
  );

  const signIn = (
    <div className="navbar-nav">
      <Link className="nav-item nav-link">
        Sign In <i class="fas fa-sign-in-alt"></i>
      </Link>
    </div>
  );

  const user = username ? userButton : signIn;
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="auto"
            height="120"
            className="d-inline-block align-middle"
            alt=""
          />
          IT Library
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100">
            <Link className="nav-item nav-link" to="/categories">
              Categories
            </Link>
            <Link className="nav-item nav-link" to="/search">
              Search
            </Link>
            <div className="d-flex justify-content-end w-100">{user}</div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
