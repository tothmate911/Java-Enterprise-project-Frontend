import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userCredentialError, setUserCredentialError] = useState('');
  const [correctCredentials, setCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      /^[a-zA-Z0-9_]{3,20}$/.test(username) &&
      /^([a-zA-Z0-9@*#]{3,20})$/.test(password)
    ) {
      setCorrect(true);
      setUserCredentialError('');
    } else {
      setCorrect(false);
      setUserCredentialError('Invalid username or password.');
    }
  };

  useEffect(() => {
    if (correctCredentials) {
      const loginUrl = 'http://localhost:8080/auth/signin';

      axios
        .post(loginUrl, {
          username: username,
          password: password,
        })
        .then((response) => {
          const token = response.data.token;
          console.log(token);
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
        });
    }
  }, [correctCredentials, username, password]);

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
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i className="fab fa-facebook-square"></i>
                </span>
                <span>
                  <i className="fab fa-google-plus-square"></i>
                </span>
                <span>
                  <i className="fab fa-twitter-square"></i>
                </span>
              </div>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                <p className="text-warning">{userCredentialError}</p>

                <div className="form-group">
                  <input
                    id="login"
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                  ></input>
                </div>
              </form>
            </div>

            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="/signUp">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
