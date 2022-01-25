import React from "react"
import styled from "styled-components"

const Modal = ({ onCloseModal }) => {
  return (
    <Container>
      <Wrapper>
        <h2>Request a quote</h2>
        <h4>Contact information</h4>
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" />
        <label htmlFor="lastname">Last name</label>
        <input type="text" id="lastname" />
        <label htmlFor="email">email</label>
        <input type="text" id="email" />

        <h4>Video requirements</h4>
        <label htmlFor="email">Lenght</label>
        <input type="text" id="email" />
        <label htmlFor="email">Style</label>
        <label htmlFor="email">Characters</label>
        <input type="text" id="email" />
      </Wrapper>
    </Container>
  )
}

export default Modal

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: #0e0e12;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 4rem;
  }

  label {
    color: #73869a;
    font-size: 2rem;
    line-height: 3.6rem;
    margin-top: 1rem;
  }

  input {
    background: #73869a;
    border: none;
    border-radius: 0.5rem;
    height: 2.8rem;
  }
`
