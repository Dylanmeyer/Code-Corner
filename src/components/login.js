import React, { Component } from "react";
import "../App.css";

class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Welcome</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="email">
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  className=""
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="password">
              <label htmlFor="password">Password </label>
              <input
                type="text"
                className=""
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
