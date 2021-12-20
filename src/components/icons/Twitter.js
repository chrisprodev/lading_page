import React from "react"
import styled from "styled-components"

function Twitter() {
  return (
    <Svg height="26px" viewBox="0 0 68.9 49.5">
      <path
        id="Twitter-2_15_"
        d="M62.5,8.6c-2,0.9-4.2,1.5-6.4,1.8c2.3-1.4,4.1-3.6,4.9-6.2
	c-2.2,1.3-4.6,2.2-7.1,2.7C49.6,2.3,42.6,2.1,38,6.3c-2.3,2.1-3.5,5.1-3.5,8.2c0,0.9,0.1,1.7,0.3,2.6c-9-0.4-17.4-4.7-23.1-11.6
	c-3,5.1-1.4,11.6,3.4,14.9c-1.8-0.1-3.5-0.5-5.1-1.4v0.1c0,5.3,3.8,9.9,9,11c-1.6,0.4-3.4,0.5-5.1,0.2c1.5,4.6,5.7,7.7,10.5,7.8
	c-4,3.1-8.9,4.8-13.9,4.8c-0.9,0-1.8-0.1-2.7-0.2c5.1,3.3,11.1,5.1,17.2,5c20.6,0,31.9-17.1,31.9-31.9c0-0.5,0-1,0-1.5
	C59.1,12.8,61,10.8,62.5,8.6z"
      />
    </Svg>
  )
}

export default Twitter

const Svg = styled.svg`
  cursor: pointer;
  path {
    transition: all 150ms ease;
    fill: var(--gray);
  }

  :hover {
    path {
      fill: var(--white);
    }
  }
`
