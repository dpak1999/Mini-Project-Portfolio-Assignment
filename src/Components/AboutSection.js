import React from "react";
import { Container, Media } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section className="home_banner_area">
      <Container className="container box_1620">
        <div className="banner_inner d-flex align-items-center">
          <div className="banner_content">
            <Media>
              <div className="d-flex">
                <img
                  src="img/profile.jpg"
                  height="600px"
                  width="600px"
                  alt=""
                />
              </div>
              <Media.Body>
                <div className="personal_text">
                  <h6>Hello Everybody, i am</h6>
                  <h3>Donald McKinney</h3>
                  <h4>Junior UI/UX Developer</h4>
                  <ul className="list-unstyled basic_info">
                    <Media as="li">
                      <a href="#">
                        <i className="icon-calendar"></i> 31st December, 1992
                      </a>
                    </Media>
                    <Media as="li">
                      <a href="#">
                        <i className="icon-phone"></i> 44 (012) 6954 783
                      </a>
                    </Media>

                    <Media as="li">
                      <a href="#">
                        <i className="icon-envelope"></i> businessplan@donald
                      </a>
                    </Media>

                    <Media as="li">
                      <a href="#">
                        <i className="icon-home"></i> Santa monica bullevard
                      </a>
                    </Media>
                  </ul>
                  <ul className="list-unstyled personal_social">
                    <Media as="li">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </Media>

                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Media.Body>
            </Media>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
