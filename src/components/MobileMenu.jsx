import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MobileMenu = () => {
  return (
    <Container>
      <Menu>
        <Link to="/">Features</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Contact us</Link>
      </Menu>
      <Buttons>
        <span className="navbar-container__loginbtn">
          <Link to="/">Login</Link>
        </span>
        <span className="navbar-container__demobtn">
          <Link to="/">Request a Demo</Link>
        </span>
      </Buttons>
    </Container>
  )
}

export default MobileMenu

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #0e0e12;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14rem;
  margin-top: 10rem;
  margin-left: 2.4rem;

  a {
    color: var(--gray);
    font-size: 2.6rem;
    transition: color 150ms ease;
    :hover {
      color: var(--white);
    }
  }
`

const Buttons = styled.div`
  padding: 0 2.4rem;

  .navbar-container__loginbtn {
    margin-top: 3.2rem;
    flex-grow: 1;
    cursor: pointer;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    outline: solid 2px var(--purple);
    margin-right: 2rem;
    transition: all 150ms ease;

    a {
      color: var(--white);
      font-size: 1.6rem;
    }

    :hover {
      background: var(--purple);
    }
  }

  .navbar-container__demobtn {
    margin-top: 2.4em;
    flex-grow: 1;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    border: none;
    background: var(--purple);
    transition: all 150ms ease;

    a {
      color: var(--white);
      font-size: 1.6rem;
    }

    :hover {
      background: var(--purple-hover);
    }
  }
`
