import React from "react";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";

const SkillSection = ({ about, skills }) => {
  const skill = skills.map((item) => {
    return (
      <div className="skill_item" key={item.name}>
        <h4>{item.name}</h4>
        <ProgressBar>
          <ProgressBar now={item.level} min={0} max={100}></ProgressBar>
        </ProgressBar>
      </div>
    );
  });

  return (
    <section className="welcome_area p_120">
      <Container>
        <Row className="welcome_inner">
          <Col lg={6}>
            <div className="welcome_text">
              <h4>About Myself</h4>
              <p>{about.bio}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="tools_expert">
              <div className="skill_main">{skill}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillSection;
