import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <h1 style={{ paddingTop: "20px", textAlign: "left" }}>
              <b>Welcome to Code Corner</b>
            </h1>
            <h3 style={{ color: "MediumSeaGreen" }}>
              The site that helps you to code
            </h3>
            <p>
              <b>
                Welcome coders. Here at Code Corner we would like to promote
                coding to all individuals who are looking to gain an
                understanding on a base level of how to create their own
                webpages irrespective of ones experiance. Code Corner also
                offeres instructional videos to help you understand and you can
                even follow along.
              </b>
            </p>

            <h2 style={{ paddingTop: "20px", textAlign: "left" }}>
              <b>What do we do?</b>
            </h2>
            <p>
              <b>
                We offer young individuals the chance to expiriance coding on a
                base level to create their own webpages using HTML and CSS.
              </b>
            </p>
          </Cell>
          <Cell col={6}>
            <div className="backing">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20190828/pngtree-design-background-of-person-working-on-his-computer-in-top-view-image_307725.jpg"
                alt=""
                className="backgraound-img"
                width="900px"
              />
              <div className="backing-text">
                <h1 style={{ color: "black" }}>
                  <b>Join us</b>
                </h1>
                <h1 style={{ color: "yellow", fontSize: "100px" }}>
                  <b>Today</b>
                </h1>
              </div>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="icon-backing">
              <img
                src="https://miro.medium.com/max/2800/1*5OESKBkRDpjUUbsXwVkbjA.jpeg"
                alt=""
                className="image-background"
                width="860px"
              />
            </div>
          </Cell>
          <Cell col={6}>
            <div className="side-text">
              <h2
                style={{
                  textAlign: "left",
                  marginLeft: "70px",
                  fontSize: "60px",
                }}
              >
                <b>Can't travel?</b>
              </h2>
              <p>
                <b>
                  Code Corner allows you to learn multiple coding languages
                  right from the comfort of your home,making for simple learning
                  at any time...where ever you are, its that simple, and with
                  all our online tutorials it makes learning a breeze...
                </b>
              </p>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="info-back">
              <img
                src="https://www.amarinfotech.com/wp-content/uploads/2018/12/programming-languages-2019.jpg"
                alt=""
                className="image-back"
                width="1700px"
              />
            </div>
            <div className="info-backing">
              <h1 style={{ color: "yellow", textDecoration: "underline" }}>
                <strong>What we offer?</strong>
              </h1>
              <h1
                style={{
                  color: "yellow",
                  textDecoration: "underline",
                  textDecorationColor: "green",
                }}
              >
                <strong>HTML</strong>
              </h1>
              <p style={{ color: "yellow" }}>
                <b>The foundation of your webpage</b>
              </p>
              <h1
                style={{
                  color: "yellow",
                  textDecoration: "underline",
                  textDecorationColor: "purple",
                }}
              >
                <strong>CSS</strong>
              </h1>
              <p style={{ color: "yellow" }}>
                <b>The basic styling to get your webpage looking awesome</b>
              </p>
              <h1
                style={{
                  color: "yellow",
                  textDecoration: "underline",
                  textDecorationColor: "orange",
                }}
              >
                <strong>Js</strong>
              </h1>
              <p style={{ color: "yellow" }}>
                <b>Add some movement to your webpage with javascript</b>
              </p>
              <div>
                <h1 className="bottom-link" style={{ color: "black" }}>
                  <b>Want a change in career?,why not study web development.</b>
                </h1>
                <h1 className="bottom" style={{ color: "mediumseagreen" }}>
                  <b>Make a change and start investing in yourself today.</b>
                </h1>
                <h1 className="bottom" style={{ color: "black" }}>
                  <b>Learn Today</b>
                </h1>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
