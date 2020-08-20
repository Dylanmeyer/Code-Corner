import React, { Component } from "react";
import "../App.css";

class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Contact us</h1>
          <form action="https://formspree.io/xknqabnr" method="POST">
            <label style={{ width: "100%", paddingBottom: "10px" }}>
              Your Name:
              <input type="text" name="name" />
            </label>
            <label style={{ width: "100%", paddingBottom: "10px" }}>
              Your Email:
              <input type="text" name="_replyto" />
            </label>
            <label
              style={{
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              Message:
              <textarea
                name="message"
                style={{ height: "50px", width: "300px" }}
              ></textarea>
            </label>
            <button
              type="submit"
              style={{
                marginLeft: "165px",
                backgroundColor: "#92a9c6",
                border: "none",
                fontSize: "24px",
                fontFamily: "josefin sans",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
