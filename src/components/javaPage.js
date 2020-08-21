import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class javaPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <div>
              <h1
                className="java-heading"
                style={{
                  color: "black",
                }}
              >
                Welcome to our Javascript section where we inform you of
                everything Javascript.
              </h1>
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                }}
              >
                What is Javascript?
              </h2>
              <p style={{ paddingLeft: "25px" }}>
                <b>
                  JavaScript is a scripting or programming language that allows
                  you to use complex features on web pages, each time a web page
                  does more than display static information for you to look at,
                  displaying content, animated graphics, updates, scrolling,
                  display videos, music etc, you can be sure that JavaScript is
                  probably involved.
                </b>
              </p>
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                }}
              >
                What can Javascript do?
              </h2>
              <ul>
                <li>Javascript can show and hide elements</li>
                <li>Store useful values inside variables.</li>
                <li>Javascript can change HTML styles (CSS)</li>
                <li>
                  Running code which responds to certain events occurring on a
                  web page. As an example we can use a "click" event to detect
                  when a button is clicked and then run the code that updates
                  the web page.
                </li>
                <li>It can also change HTML Content and Attributes </li>
              </ul>
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                  paddingTop: "50px",
                }}
              >
                What is javascript used for?:
              </h2>
              <ul>
                <li>
                  <b>Adds interactivity to websites</b>-if you want your site to
                  be more than just a static page,you'll need some javascript.
                </li>
                <li>
                  <b>Create web based games</b>-javascript makes it possible to
                  play games directly from your web browser.
                </li>
                <li>
                  <b>Back end development</b>-javascript is used mostly for
                  front end development,but its versatile enough to be used on
                  back end infrastructure as well.
                </li>
                <li>
                  <b>Developing mobile applications</b>-javascript is not just
                  used for websites, its used to create applications for phones
                  and tablets as well.
                </li>
              </ul>
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                  paddingTop: "150px",
                }}
              >
                Some Examples:
              </h2>
              <p style={{ paddingLeft: "25px" }}>
                <b>
                  Here is a table showing different ways to use built-in methods
                  for strings and arrays.
                </b>
              </p>
              <p style={{ paddingLeft: "25px" }}>
                <b>
                  Keep in mind that these are only a few examples and that there
                  are many more.
                </b>
              </p>
              <p style={{ paddingLeft: "25px" }}>
                <b>
                  Please read the goal to understand what these methods are used
                  for.
                </b>
              </p>
            </div>
          </Cell>
          <Cell col={6}>
            <div>
              <img
                src="https://stackify.com/wp-content/uploads/2018/10/JavaScript-Tutorials-for-Beginners-881x441.jpg"
                alt=""
                style={{ paddingTop: "300px" }}
              />
              <img
                src="https://miro.medium.com/max/788/1*HJY_2vNKkNkqRQhLZcYlyg.png"
                alt=""
                style={{ marginTop: "350px" }}
              />
            </div>
          </Cell>
          <Cell col={6}>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                  paddingTop: "100px",
                }}
              >
                Javascript reserved words:
              </h2>
              <p style={{ paddingLeft: "25px" }}>
                <b>
                  A list of all the reserved words in JavaScript are given in
                  the following table. They cannot be used as JavaScript
                  variables, functions, methods, loop labels, or any object
                  names.
                </b>
              </p>
              <img
                src="https://i.pinimg.com/originals/2e/dc/5c/2edc5c169bd1117e93bb327a2b318f60.jpg"
                alt=""
                style={{ paddingLeft: "25px" }}
              />
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                  paddingTop: "100px",
                }}
              >
                Video tutorial of javascript:
              </h2>
              <p style={{ paddingLeft: "25px" }}>
                Below is a video tutorial of everything you need to know:
              </p>
            </div>
            <div>
              <iframe
                width="956"
                height="538"
                title="Javascript tutorial"
                src="https://www.youtube.com/embed/PkZNo7MFNFg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Cell>
          <Cell col={6}>
            <img
              src="https://image.slidesharecdn.com/javascript-140415204153-phpapp01/95/javascript-14-638.jpg"
              alt=""
              style={{ paddingTop: "150px", paddingLeft: "100px" }}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default javaPage;
