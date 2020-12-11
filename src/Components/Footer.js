import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = ({ socialLinks }) => {
  const social = socialLinks.map((item) => {
    return (
      <li key={item.name}>
        <a href={item.url}>
          <i className={item.className}></i>
        </a>
      </li>
    );
  });
  return (
    <footer className="footer_area p_120">
      <Container>
        <Row className="footer_inner">
          <Col lg={6} sm={6} className="text-center">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>About Me</h3>
              </div>
              <p>
                Do you want to be even more successful? Learn to love learning
                and growth. The more effort you put into improving your skills,
              </p>
            </aside>
          </Col>
          <Col lg={6} className="text-center">
            <aside className="f_widget social_widget">
              <div className="f_title">
                <h3>Follow Me</h3>
              </div>
              <p>Let us be social</p>
              <ul className="list">{social}</ul>
            </aside>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
