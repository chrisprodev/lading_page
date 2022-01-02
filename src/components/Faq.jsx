import React, { useState } from "react"
import styled from "styled-components"

const Faq = ({ title, content }) => {
  const [open, setOpen] = useState(false)

  return (
    <Container open={open}>
      <Header onClick={() => setOpen(!open)} open={open}>
        <p>{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            id="Group_11"
            data-name="Group 11"
            transform="translate(-940 -4154)"
          >
            {!open && (
              <line
                id="line_1"
                data-name="Line 1"
                y2="20"
                transform="translate(952 4156)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="4"
              />
            )}
            <line
              id="line_2"
              data-name="Line 2"
              y2="20"
              transform="translate(962 4166) rotate(90)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="4"
            />
          </g>
        </svg>
      </Header>
      {open && <Content>{content}</Content>}
    </Container>
  )
}

export default Faq

const Container = styled.div`
  user-select: none;
  width: 70%;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 1rem;
  transition: background 50ms ease;
  background: ${props => (props.open ? "#262633" : "none")};

  :hover {
    background: #262633;
  }

  @media only screen and (max-width: 1340px) {
    width: 90%;
    margin-top: 5rem;
    padding: 0;
    border-radius: 0;
    background: unset;
    :hover {
      background: unset;
    }
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }

  svg {
    transition: all 400ms ease;
    transform: ${props => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
    line {
      transition: all 400ms ease;
      stroke: ${props => (props.open ? "var(--white)" : "var(--gray)")};
    }
  }

  @media only screen and (max-width: 1340px) {
    p {
      max-width: 80%;
    }
  }
`

const Content = styled.p`
  margin-top: 1.6rem;
  font-size: 1.8rem;
  color: var(--gray-2);
`
