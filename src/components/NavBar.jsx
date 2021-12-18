import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavBar = () => {
  return (
    <MainContainer>
      <Container>
        <BlockOne>
          <img
            className="navbar-container__logo"
            src={"/static/logo.svg"}
            alt="vidbox logo"
            width={140}
            height={36}
          />
          <Menu>
            <Link to="/">Features</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Contact us</Link>
          </Menu>
        </BlockOne>
        <BlockTwo>
          <span className="navbar-container__loginbtn">
            <Link to="/">Login</Link>
          </span>
          <span className="navbar-container__demobtn">
            <Link to="/">Request a Demo</Link>
          </span>
        </BlockTwo>
      </Container>
    </MainContainer>
  )
}

export default NavBar

const MainContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #16161e;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 129rem;
  margin-top: 2.4rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`
const BlockOne = styled.div`
  display: flex;
  align-items: center;

  .navbar-container__logo {
    width: 14rem;
    height: 3.6rem;
  }
`

const BlockTwo = styled.div`
  display: flex;
  align-items: center;

  .navbar-container__loginbtn {
    width: 12rem;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    border: solid 2px var(--purple);
    margin-right: 2rem;

    a {
      color: #eff5f8;
      font-size: 1.4rem;
    }
  }

  .navbar-container__demobtn {
    width: 16rem;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    border: none;
    background: var(--purple);

    a {
      color: #eff5f8;
      font-size: 1.4rem;
    }
  }
`

const Menu = styled.div`
  a {
    color: var(--gray);
    margin-left: 4rem;
    font-size: 1.6rem;
    transition: color 150ms ease;
    :hover {
      color: var(--white);
    }
  }
`
