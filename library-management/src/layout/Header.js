import React from 'react';
import logo from './logo.svg';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  let username = localStorage.getItem('username');

  let history = useHistory();

  const admin = (
    <Link className="nav-item nav-link" key="admin" to="/home/admin">
      <i className="fas fa-user"></i> Administrator
    </Link>
  );

  const regularUser = (
    <Link
      className="nav-item nav-link"
      key={username}
      to={`/home/user/${username}`}
    >
      <i className="fas fa-user"></i> {username}
    </Link>
  );

  const user = username === 'admin' ? admin : regularUser;

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  const dropdownUser = (
    <div>
      <a
        className="nav-link dropdown-toggle"
        href="/home"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {' '}
      </a>
      <div
        className="dropdown-menu dropdown-menu-right bg-dark"
        aria-labelledby="navbarDropdown"
      >
        <a
          className="dropdown-item bg-dark text-light"
          href="/"
          onClick={logout}
        >
          Log Out
        </a>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
        <a className="navbar-brand" href="/home">
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
            <Link className="nav-item nav-link" to="/home/categories">
              Categories <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/home/search">
              Search
            </Link>
            <div className="d-flex justify-content-end w-100">
              {user}
              {dropdownUser}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
