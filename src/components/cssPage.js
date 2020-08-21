import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class cssPage extends Component {
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
                Welcome to our CSS section where we inform you of everything
                CSS.
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
                What is Css?
              </h2>
              <ul>
                <li>CSS stands for Cascading Style Sheets</li>
                <li>
                  CSS describes how HTML elements are to be displayed on screen,
                  paper, or in other media
                </li>
                <li>
                  CSS saves a lot of work. It can control the layout of multiple
                  web pages all at once
                </li>
                <li>External stylesheets are stored in CSS files</li>
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
                How the basic structure of CSS should look:
              </h2>
            </div>
            <div>
              <img
                src="https://mdn.mozillademos.org/files/17009/declaration-block.png"
                alt=""
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
                Css Property types:
              </h2>
            </div>
            <div>
              <img
                src="https://bennadel-cdn.com/resources/uploads/cfdump/coldfusion_css_rule_property_map.gif"
                alt=""
                width="500px"
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
                Video tutorial of CSS
              </h2>
              <p style={{ paddingLeft: "30px" }}>
                Below is a video tutorial of everything you need to know:
              </p>
            </div>
            <div>
              <iframe
                width="871"
                height="490"
                title="CSS tutorial"
                src="https://www.youtube.com/embed/wNX7lWzchow"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Cell>
          <Cell col={6}>
            <img
              className="last-image"
              src="https://content.linkedin.com/content/dam/me/learning/blog/2016/september/CSS.jpg"
              alt=""
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default cssPage;
