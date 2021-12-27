import { Link } from "gatsby"
import React from "react"
import Linkedin from "./icons/Linkedin"
import Twitter from "./icons/Twitter"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <img
          className="footer-container__logo"
          src={"/logo.svg"}
          alt="vidbox logo"
          width={140}
          height={36}
        />
        <Links>
          <Link to="/">Privacy statement</Link>
          <Link to="/">Terms of service</Link>
          <Link to="/">Careers</Link>
        </Links>
        <SocialMedia>
          <Twitter />
          <Linkedin />
        </SocialMedia>
      </Container>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  margin-top: 20rem;
  background: #262633;
  height: 8rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1340px) {
    margin-top: 10rem;
    height: auto;
    padding: 3rem 0;
  }
`

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

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: var(--gray-2);
    margin-left: 4rem;
    font-size: 1.6rem;
    transition: color 150ms ease;
    :hover {
      color: var(--white);
    }
  }

  @media only screen and (max-width: 1340px) {
    margin-top: 2rem;
  }
`

const SocialMedia = styled.div`
  display: flex;
  svg {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 1340px) {
    margin-top: 2rem;
  }
`
