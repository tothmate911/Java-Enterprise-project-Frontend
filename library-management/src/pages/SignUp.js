import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleSubmit = () => {
    if (password === passwordAgain) {
      console.log(
        'trying to sign up with \n username: ' +
          username +
          ', password: ' +
          password +
          ', email: ' +
          email
      );
      const loginUrl = 'http://localhost:8080/auth/signup';
      axios
        .post(loginUrl, {
          username: username,
          password: password,
          email: email,
        })
        .then((response) => {
          const token = response.data.token;
          console.log(token);
          localStorage.setItem('token', token);
        });
    } else {
      alert("The two passwords don't match!");
    }
  };

  return (
    <React.Fragment>
      <div className="welcome-container">
        <h1 className="welcome"> Welcome to our library!</h1>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign Up</h3>
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
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="email"
                    onChange={(event) => setEmail(event.target.value)}
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
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    id="password again"
                    type="password"
                    className="form-control"
                    placeholder="password again"
                    onChange={(event) => {
                      setPasswordAgain(event.target.value);
                    }}
                  />
                </div>

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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
