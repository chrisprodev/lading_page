/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { variants } from "../constants/animation";
import { logosData } from "../constants/data";

const Logos = () => {
  return (
    <Container initial={variants.initial} animate={variants.fadeUp}>
      <h5>Used by top designers from the world's top companies</h5>
      <div className="logos__container">{logosData.map(logo => logo)}</div>
    </Container>
  );
};

export default Logos;

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin: 6rem auto 12rem auto;

  h5 {
    font-size: 1.8rem;
    text-align: center;
    line-height: 2rem;
    color: var(--black);
    opacity: 0.7;
    font-weight: 400;
  }

  .logos__container {
    margin-top: 3rem;
    width: 60%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    svg {
      height: 3.6rem;
      width: auto;
      color: var(--black);
      margin: 3rem 3rem 0 3rem;
    }
  }

  @media only screen and (max-width: 1340px) {
    margin: 5rem auto 7rem auto;

    h5 {
      font-size: 1.2rem;
    }

    .logos__container {
      justify-content: center;
      width: 70%;

      svg {
        height: 2.4rem;
        width: auto;
        margin: 1rem 1rem 0 1rem;
      }
    }
  }
`;
