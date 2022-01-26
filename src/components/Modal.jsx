import React from "react"
import styled from "styled-components"

const Modal = ({ onCloseModal }) => {
  return (
    <Container>
      <Wrapper>
        <h2>Request a quote</h2>
        <h4>Contact information</h4>
        <Row>
          <Column>
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" />
          </Column>
          <Column>
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" />
          </Column>
        </Row>
        <Row>
          <Column>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </Column>
        </Row>

        <h4>Video requirements</h4>
        <Row>
          <Column>
            <label htmlFor="email">Lenght</label>
            <input type="number" id="email" />
          </Column>
        </Row>
        <Row>
          <Column>
            <label htmlFor="email">Style</label>
          </Column>
        </Row>
        <Row>
          <Column>
            <label htmlFor="email">Characters</label>
            <input type="number" id="email" />
          </Column>
        </Row>
        <div className="request__button">
          <button>Send request</button>
        </div>
      </Wrapper>
      <svg
        onClick={onCloseModal}
        className="modal__close-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(14, 14, 18, 1);

  .modal__close-icon {
    cursor: pointer;
    height: 6rem;
    width: 6rem;
    position: absolute;
    top: 3rem;
    right: 3rem;
    color: var(--gray);
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  h4 {
    font-size: 2.8rem;
    margin-top: 6rem;
    margin-bottom: 2rem;
  }

  label {
    color: var(--gray-3);
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }

  input {
    border: none;
    border-radius: 0.8rem;
    height: 3rem;
    padding: 0.5rem 1.5rem;
    color: var(--gray);
    font-size: 1.6rem;
    background: #262633;

    :focus {
      outline: solid 2px var(--purple);
      color: var(--gray-2);
    }
  }

  .request__button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    background: var(--purple);
    height: 4.8rem;
    margin-top: 3.6rem;
    transition: all 150ms ease;

    button {
      cursor: pointer;
      color: var(--white);
      font-size: 1.6rem;
      background: transparent;
      border: none;
    }

    :hover {
      background: var(--purple-hover);
    }
  }
`
const Row = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 3rem;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
