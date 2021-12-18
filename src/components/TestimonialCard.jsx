import React from "react"
import styled from "styled-components"

const TestimonialCard = ({ user, account, body, date }) => {
  return (
    <Card>
      <CardHeader>
        {/* //img */}
        <UserDetails>
          <h6>{user}</h6>
          <p>{account}</p>
        </UserDetails>
      </CardHeader>
      <p>{body}</p>
      <span className="card__datetime">{date}</span>
    </Card>
  )
}

export default TestimonialCard

const Card = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 3rem;
  background: #262633;

  p {
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: var(--gray-2);
  }

  .card__datetime {
    margin-top: 2rem;
    color: var(--gray-2);
    display: block;
    margin-top: 3rem;
    font-size: 1.6rem;
  }
`

const CardHeader = styled.div`
  display: flex;
`
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    color: var(--white);
    font-size: 1.8rem;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`
