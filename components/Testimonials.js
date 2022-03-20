import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "../constants/data";

const Testimonials = () => {
  const animationControl = useAnimation();
  const { ref, inView } = useInView();

  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: [0.25, 0.66, 0.33, 0.95],
      },
    });
  }

  return (
    <Container
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={animationControl}
      ref={ref}
    >
      <TestimonialsWrapper>
        <h2>Take your business to the next level</h2>
        <p className="testimonials__sub-title">
          Become part of a growing community of innovative Entrepreneurs,
          Marketers and Agencies.
        </p>
        <TestimonialsGrid>
          {testimonialsData.map(element => (
            <TestimonialCard
              key={element.user}
              user={element.user}
              account={element.account}
              body={element.description}
              date={element.date}
            />
          ))}
        </TestimonialsGrid>
      </TestimonialsWrapper>
    </Container>
  );
};

export default Testimonials;

const Container = styled(motion.section)`
  padding: 12rem 0;
  background: var(--dark-gray);

  @media only screen and (max-width: 1340px) {
    padding: 8rem 3rem;
  }
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 129rem;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-top: 2rem;
  }

  h2,
  .testimonials__sub-title {
    color: #fff;
    text-align: center;
  }

  .testimonials__mini-title {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--white);
  }
`;

const TestimonialsGrid = styled.div`
  margin-top: 5rem;
  columns: 3 auto;
  column-gap: 2rem;

  @media only screen and (max-width: 1340px) {
    columns: 1 auto;
    column-gap: 2rem;

    div:nth-of-type(1n + 4) {
      display: none;
    }
  }
`;
