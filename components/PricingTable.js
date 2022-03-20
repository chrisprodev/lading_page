import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pricingTable } from "../constants/data";
import PricingCard from "./PricingCard";

const PricingTable = () => {
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
    <PricingSection
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={animationControl}
      ref={ref}
    >
      <PricingContentWrapper>
        <h2>Find the plan that is right for you</h2>
        <p>No hiden fees.</p>
        <PricingWrapper>
          {pricingTable.map(card => (
            <PricingCard {...card} key={card.name} />
          ))}
        </PricingWrapper>
      </PricingContentWrapper>
    </PricingSection>
  );
};

export default PricingTable;

const PricingSection = styled(motion.section)`
  padding: 12rem 0;
  background: #f2f6f9;

  @media only screen and (max-width: 1340px) {
    padding: 8rem 3rem;
  }
`;

const PricingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin: 0;
  }

  p {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 1340px) {
    h2,
    p {
      margin-top: 1.6rem;
    }

    h2 {
      text-align: center;
    }
  }
`;

const PricingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 5rem;

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
    width: 90%;
  }
`;
