import React from "react";
import styled from "styled-components";

const PricingCard = ({ name, level, price, features }) => {
  return (
    <Container>
      <h5>{name}</h5>
      <span>{level}</span>
      <span className="pricing__price">
        {price === "Free" ? price : `$${price}`}
      </span>
      <span className="pricing__tag">What is included</span>
      <ul>
        {features.map(feat => (
          <li key={feat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      <button>Request a Demo</button>
      <small>(no credit card require)</small>
    </Container>
  );
};

export default PricingCard;

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  padding: 3rem;
  background: #fff;
  width: 26rem;
  transition: all 100ms ease;

  :hover {
    outline: solid 2px var(--blue);
  }

  span {
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: var(--black);
    opacity: 0.8;
  }

  .pricing__price {
    font-weight: 600;
    margin-top: 4rem;
    font-size: 6.2rem;
    color: var(--black);
    opacity: 1;
  }

  .pricing__tag {
    margin-top: 2rem;
  }

  h5 {
    font-size: 3.4rem;
  }

  ul {
    margin-bottom: 4rem;
    margin-top: 2rem;
    padding: 0;
    width: 100%;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      svg {
        width: 2rem;
        margin-right: 1rem;
        color: var(--green);
      }
      span {
        font-size: 1.6rem;
        line-height: 3.6rem;
        opacity: 1;
      }
    }
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 4.8rem;
    background: var(--blue);
    color: #fff;
    border-radius: 1rem;
    border: none;
    font-size: 1.6rem;
    transition: all 150ms ease;

    :hover {
      background: var(--blue-2);
    }
  }

  small {
    color: var(--black);
    opacity: 0.8;
    margin-top: 1rem;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 1340px) {
    width: auto;
  }
`;
