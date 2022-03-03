import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Links>
          <Link href="/">
            <a>Privacy statement</a>
          </Link>
          <Link href="/">
            <a>Terms of service</a>
          </Link>
          <Link href="/">
            <a>Careers</a>
          </Link>
          <Link href="/">
            <a>Privacy Statement</a>
          </Link>
        </Links>
        <span>Copyright © 2022 Vidbox</span>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  margin-top: 10rem;
  height: 8rem;
  display: flex;
  align-items: center;
  border-top: solid 1px var(--gray-3);

  @media only screen and (max-width: 1340px) {
    margin-top: 8rem;
    height: auto;
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 129rem;
  margin-left: auto;
  margin-right: auto;

  .footer-container__logo {
    transform: scale(0.9);
  }

  span {
    color: var(--black);
    opacity: 0.8;
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: var(--black);
    opacity: 0.8;
    margin-left: 4rem;
    font-size: 1.6rem;
    transition: color 150ms ease;
    font-weight: 400;
    :hover {
      color: var(--blue);
    }
  }

  @media only screen and (max-width: 1340px) {
    margin-top: 2rem;
    flex-direction: column;

    a {
      text-align: center;
      margin-left: 0;
      margin-bottom: 2rem;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  svg {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 1340px) {
    margin-top: 2rem;
  }
`;
