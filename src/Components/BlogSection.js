import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { blogs } from "../portfolioData";

const BlogSection = () => {
  const blog = blogs.map((item) => {
    return (
      <Col lg={4} md={6} key={item.name}>
        <div className="feature_item">
          <a className="h4" href={item.link} target="_blank" rel="noreferrer">
            {item.name}
          </a>
          <p className="mt-3">{item.desc}</p>
        </div>
      </Col>
    );
  });
  return (
    <section className="feature_area p_120">
      <Container>
        <div className="main_title">
          <h2>Featured Blogs</h2>
          <p>
            Here are some of my featured blogs. Do check them and comment how
            you feel about it.
          </p>
        </div>
        <Row className="feature_inner">{blog}</Row>
      </Container>
    </section>
  );
};

export default BlogSection;
