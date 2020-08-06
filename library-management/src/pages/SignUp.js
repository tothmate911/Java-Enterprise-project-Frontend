import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const usernameValidation = (username) => {
    if (username.trim() === "") {
      return "Username is required";
    }
    if (username.trim().length < 6 || username.trim().length > 20) {
      return "Username must be 6-20 characters";
    }
    if (/^[a-zA-Z0-9_]*$/.test(username)) {
      return null;
    }
    return "Invalid characters";
  };

  const emailValidation = (email) => {
    if (email.trim() === "") {
      return "Email is required";
    }
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    return "Please enter a valid email";
  };

  const passwordValidation = (password, passwordAgain) => {
    if (password.trim() === "") {
      return "Password is required";
    }
    if (password !== passwordAgain) {
      return "The two passwords don't match!";
    }
    if (password.trim().length < 6 || password.trim().length > 20) {
      return "Password must be 6-20 characters";
    }
    if (/^([a-zA-Z0-9@*#]{6,20})$/.test(password)) {
      return null;
    }
    return "Invalid characters.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError(usernameValidation(username));
    setEmailError(emailValidation(email));
    setPasswordError(passwordValidation(password, passwordAgain));
  };

  const login = () => {
    const loginUrl = "http://localhost:8080/auth/signin";
    axios
      .post(loginUrl, {
        username: username,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
      });
  };

  useEffect(() => {
    if (
      usernameError === null &&
      emailError === null &&
      (passwordError === null || passwordError === "")
    ) {
      const loginUrl = "http://localhost:8080/auth/register";
      axios
        .post(loginUrl, {
          username: username,
          password: password,
          email: email,
        })
        .then((response) => {
          if (response.data === true) {
            login();
          } else {
            alert("Username has already been registered.");
          }
        });
    }
  });

  return (
    <React.Fragment>
      <div className="welcome-container">
        <h1 className="welcome"> Welcome to our library!</h1>
      </div>
      <div className="page container">
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
                <p className="text-warning">{usernameError}</p>

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
                <p className="text-warning">{emailError}</p>
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
                <p className="text-warning">{passwordError}</p>

                <div className="form-group">
                  <input
                    id="login"
                    type="submit"
                    value="Sign up"
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
