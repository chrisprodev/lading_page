import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavBar = ({ menu, onOpenMobileMenu }) => {
  const [show, setShow] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.document.location.pathname === "/") {
      setAnimation(true)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      setShow(true)
    }
  }, [])

  const handleScroll = () => {
    setShow(window.pageYOffset > 80)
  }

  return (
    <MainContainer animation={animation} bg={show}>
      <Container animation={animation} bg={show}>
        <BlockOne>
          <img
            className="navbar-container__logo"
            src={"/logo.svg"}
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
        <Hamburguer onClick={onOpenMobileMenu} menu={menu}>
          <span />
          <span />
        </Hamburguer>
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
  z-index: 99;
  padding: 0rem 2rem;
  transition: all 450ms ease;
  background-color: ${({ bg }) => (bg ? "var(--dark-gray)" : "transparent")};
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
    cursor: pointer;
    width: 8rem;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin-right: 2rem;
    transition: all 150ms ease;

    a {
      color: var(--opacity-7);
      font-size: 1.6rem;
    }

    :hover {
      background: var(--opacity-15);
    }
  }

  .navbar-container__demobtn {
    cursor: pointer;
    width: 17rem;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    border: none;
    background: #fff;
    transition: all 150ms ease;

    a {
      font-size: 1.6rem;
    }

    :hover {
      background: var(--opacity-7);
    }
  }

  @media only screen and (max-width: 1340px) {
    display: none;
  }
`

const Menu = styled.div`
  a {
    color: var(--opacity-7);
    margin-left: 4rem;
    font-size: 1.6rem;
    transition: color 150ms ease;
    :hover {
      color: #fff;
    }
  }

  @media only screen and (max-width: 1340px) {
    display: none;
  }
`

const Hamburguer = styled.div`
  display: none;
  cursor: pointer;
  height: 1.6rem;
  width: 2.8rem;

  @media only screen and (max-width: 1340px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    width: 2.8rem;
    height: 0.2rem;
    background: var(--white);
    border-radius: 0.3rem;
    transition: all 200ms ease;
    transform-origin: 15% center;
  }

  span:first-child {
    transform: ${({ menu }) => (menu ? "rotate(45deg)" : "rotate(0)")};
  }

  span:last-child {
    transform: ${({ menu }) => (menu ? "rotate(-45deg)" : "rotate(0)")};
  }
`
