import React from "react";
import styled from "styled-components";
import { faqs } from "../constants/data";
import Faq from "./Faq";

const FAQs = () => {
  return (
    <Container>
      <h2>Frequently asked questions</h2>
      {faqs.map(question => (
        <Faq
          key={question.title}
          title={question.title}
          content={question.content}
          initialState={question.initialState}
        />
      ))}
    </Container>
  );
};

export default FAQs;

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 129rem;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 1340px) {
    h2 {
      text-align: center;
    }
  }
`;
