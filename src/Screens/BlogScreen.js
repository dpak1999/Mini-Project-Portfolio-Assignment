import React from "react";
import { Container } from "react-bootstrap";
import BlogSection from "../Components/BlogSection";
import { blogs } from "../portfolioData";

const BlogScreen = () => {
  return (
    <div>
      <section className="home_banner_area blog_banner">
        <div className="banner_inner d-flex align-items-center">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
          ></div>
          <Container>
            <div className="blog_b_text text-center">
              <h2>
                Hey there <br /> glad to see you here
              </h2>
              <p>
                There is a moment in the life of any aspiring astronomer that it
                is time to buy that first
              </p>
            </div>
          </Container>
        </div>
      </section>

      <BlogSection blogs={blogs} />
    </div>
  );
};

export default BlogScreen;
