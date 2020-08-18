import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class htmlPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <div>
              <h1
                className="html-heading"
                style={{
                  color: "black",
                }}
              >
                Welcome to our HTML section where we inform you of everything
                HTML.
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
                What is HTML?
              </h2>
              <ul>
                <li>HTML stands for Hyper Text Markup Language</li>
                <li>
                  HTML is the standard markup language for creating Web pages
                </li>
                <li>HTML describes the structure of a Web page</li>
                <li>HTML consists of a series of elements</li>
                <li>
                  HTML elements tell the browser how to display the content
                </li>
                <li>
                  HTML elements label pieces of content such as "this is a
                  heading", "this is a paragraph", "this is a link", etc.
                </li>
              </ul>
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                  paddingTop: "30px",
                }}
              >
                What a basic HTML document consists of:
              </h2>
            </div>
            <div>
              <img src="https://media.geeksforgeeks.org/wp-content/uploads/Untitled-drawing-1-6.png" />
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                }}
              >
                Structure Explaination
              </h2>
            </div>
            <div>
              <img src="https://mason.gmu.edu/~kshiffl4/375/HTML_Tags.jpg" />
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                }}
              >
                HTML page structure
              </h2>
              <p style={{ paddingLeft: "30px" }}>
                Below is a visualization of an HTML page structure:
              </p>
            </div>
            <div>
              <img
                src="https://kumarsher45.files.wordpress.com/2015/01/html-5-page-structure.jpg"
                width="1000px"
              />
            </div>
            <div>
              <h2
                style={{
                  color: "lime",
                  textDecoration: "underline",
                  paddingLeft: "30px",
                }}
              >
                Video tutorial of HTML
              </h2>
              <p style={{ paddingLeft: "30px" }}>
                Below is a video tutorial of everything you need to know:
              </p>
            </div>
            <div>
              <iframe
                width="871"
                height="490"
                src="https://www.youtube.com/embed/UB1O30fR-EE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default htmlPage;
