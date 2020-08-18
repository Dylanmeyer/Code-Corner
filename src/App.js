import React, { Component } from "react";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";

import "./App.css";
import { Link } from "react-router-dom";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Code Corner
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="signIn">Register</Link>
              <Link to="login">Login</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="htmlPage">HTML</Link>
              <Link to="cssPage">CSS</Link>
              <Link to="javaPage">Javascript</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer size="mega">
            <FooterSection type="middle">
              <FooterDropDownSection className="footer-bottom" title="Features">
                <FooterLinkList style={{ paddingLeft: "145px" }}>
                  <a href="#">About us</a>
                  <a href="#">Terms</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="Contact us">
                <FooterLinkList style={{ paddingLeft: "145px" }}>
                  <a href="#">Contact number</a>
                  <a href="#">Email</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="FAQ">
                <FooterLinkList style={{ paddingLeft: "145px" }}>
                  <a href="#">Questions</a>
                  <a href="#">Answers</a>
                </FooterLinkList>
              </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom" logo="Code Corner Inc.">
              <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
