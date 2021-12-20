import React from "react"
import styled from "styled-components"

function Linkedin() {
  return (
    <Svg height="26px" viewBox="0 0 68.9 49.5">
      <g>
        <g>
          <path
            id="back_8_"
            d="M17.2,2.2h34.5c2.9,0,5.3,2.4,5.3,5.3V42c0,2.9-2.4,5.3-5.3,5.3H17.2
			c-2.9,0-5.3-2.4-5.3-5.3V7.5C11.9,4.6,14.3,2.2,17.2,2.2z"
          />
          <g id="Linkedin-2_8_">
            <path
              style={{ fill: "#262633" }}
              d="M22.2,20.4h5.2v16.8h-5.2V20.4z M24.8,12.1c1.7,0,3,1.4,3,3s-1.4,3-3,3s-3-1.4-3-3l0,0
				C21.8,13.4,23.1,12.1,24.8,12.1"
            />
            <path
              style={{ fill: "#262633" }}
              d="M30.7,20.4h5v2.3h0.1c1-1.7,2.9-2.8,4.9-2.7c5.3,0,6.3,3.5,6.3,8v9.2h-5.2v-8.2c0-2,0-4.5-2.7-4.5
				s-3.1,2.1-3.1,4.3v8.3h-5.2V20.4z"
            />
          </g>
        </g>
      </g>
    </Svg>
  )
}

export default Linkedin

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
