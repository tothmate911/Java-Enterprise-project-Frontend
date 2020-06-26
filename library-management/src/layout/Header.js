import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

function Header() {
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
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/categories">
                            Categories <span className="sr-only">(current)</span>
                        </Link>
                        <Link className="nav-item nav-link" to="/search">
                            Search
                        </Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;
