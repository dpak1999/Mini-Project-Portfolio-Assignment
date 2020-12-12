import React from "react";
import { Container, Media } from "react-bootstrap";
import { personalDetails, socialLinks } from "../portfolioData";

const AboutSection = () => {
  const social = socialLinks.map((item) => {
    return (
      <Media as="li" key={item.name}>
        <a href={item.url} target="_blank" rel="noreferrer">
          <i className={item.className}></i>
        </a>
      </Media>
    );
  });

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
                  <h3>{personalDetails.name}</h3>
                  <h4>{personalDetails.title}</h4>
                  <ul className="list-unstyled basic_info">
                    <Media as="li">
                      <a href="/#">
                        <i className="icon-calendar"></i> {personalDetails.dob}
                      </a>
                    </Media>
                    <Media as="li">
                      <a href="/#">
                        <i className="icon-phone"></i> {personalDetails.contact}
                      </a>
                    </Media>

                    <Media as="li">
                      <a href="/#">
                        <i className="icon-envelope"></i>{" "}
                        {personalDetails.email}
                      </a>
                    </Media>
                    <Media as="li">
                      <a href="/#">
                        <i className="icon-home"></i> {personalDetails.address}
                      </a>
                    </Media>
                  </ul>
                  <ul className="list-unstyled personal_social">{social}</ul>
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
