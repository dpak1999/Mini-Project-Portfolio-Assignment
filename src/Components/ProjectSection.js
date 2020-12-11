import React from "react";
import { Container, Media } from "react-bootstrap";

const ProjectSection = ({ projects }) => {
  const project = projects.map((item) => {
    return (
      <li key={item.name}>
        <span></span>
        <Media>
          <div className="d-flex">
            <p>
              {item.startDate} to {item.endDate}
            </p>
          </div>
          <Media.Body>
            <a className="h4 text-white" href={item.link}>
              {item.name}
            </a>
            <p>{item.desc}</p>
          </Media.Body>
        </Media>
      </li>
    );
  });
  return (
    <section className="mytabs_area p_120">
      <Container>
        <h3 className="text-center mb-5">PROJECTS</h3>
        <div className="tabs_inner">
          <div className="tab-content">
            <div className="tab-pane active">
              <ul className="list">{project}</ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
