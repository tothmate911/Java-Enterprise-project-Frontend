import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const handleSubmit = () => {
    console.log(
      'trying to sign in with \n username: ' +
        username +
        ', password: ' +
        password
    );
    const loginUrl = 'http://localhost:8080/auth/signin';

    axios
      .post(loginUrl, {
        username: username,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        history.push('/home');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Username or pasword is not correct! Please try again!');
      });
  };

  return (
    <React.Fragment>
      <div className="welcome-container">
        <h1 className="welcome"> Welcome to our library!</h1>
      </div>
      <div className="page container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>

            <div className="card-body">
              {/* <form> */}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <button
                  id="login"
                  value="Login"
                  className="btn float-right login_btn"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              {/* </form> */}
            </div>

            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="/signUp">Sign Up</a>
              </div>
              {/* <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
