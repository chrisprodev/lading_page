import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const MobileMenu = ({ onDisplayMenu }) => {
  return (
    <Container>
      <Menu>
        <Link
          onClick={onDisplayMenu}
          to="features"
          activeClass="active"
          spy={true}
          offset={-120}
          smooth={"easeInOutQuart"}
          duration={800}
        >
          Features
        </Link>
        <Link
          onClick={onDisplayMenu}
          to="pricing"
          activeClass="active"
          spy={true}
          offset={-90}
          smooth={"easeInOutQuart"}
          duration={800}
        >
          Pricing
        </Link>
        <Link
          onClick={onDisplayMenu}
          to="faqs"
          activeClass="active"
          spy={true}
          offset={-130}
          smooth={"easeInOutQuart"}
          duration={800}
        >
          FAQs
        </Link>
      </Menu>
      <Buttons>
        <span className="navbar-container__loginbtn">Login</span>
        <span className="navbar-container__demobtn">Request a Demo</span>
      </Buttons>
    </Container>
  );
};

export default MobileMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--dark-gray);
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14rem;
  margin-top: 10rem;
  margin-left: 2.4rem;

  a {
    color: var(--opacity-7);
    font-size: 2.6rem;
    transition: color 150ms ease;

    &.active {
      color: #fff;
    }

    :hover {
      color: var(--white);
    }
  }
`;

const Buttons = styled.div`
  padding: 0 2.4rem;

  .navbar-container__loginbtn {
    display: block;
    margin-top: 2.2rem;
    cursor: pointer;
    transition: all 150ms ease;
    user-select: none;
    color: var(--opacity-7);
    font-size: 2.6rem;
    transition: color 150ms ease;

    :hover {
      color: var(--white);
    }
  }

  .navbar-container__demobtn {
    cursor: pointer;
    margin-top: 2.8rem;
    flex-grow: 1;
    height: 5.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    border: none;
    background: #fff;
    transition: all 150ms ease;
    user-select: none;
    color: var(--black);
    font-weight: 500;
    font-size: 1.6rem;

    :hover {
      background: var(--opacity-7);
    }
  }
`;
