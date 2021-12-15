import React from "react"
import NavBar from "../components/NavBar"
import styled from "styled-components"
import "../global.css"
import { Link } from "gatsby"

export default function Home() {
  const logos = [1, 2, 3, 4, 5]
  return (
    <div>
      <NavBar />
      <Header>
        <h1>Explainer videos made simple</h1>
        <p>Scale your business with unlimited video editing.</p>
        <span className="header__btn">
          <Link to="/">Get Started</Link>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="848"
          height="479"
          viewBox="0 0 848 479"
        >
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="0.967"
              cy="0"
              r="2.048"
              gradientTransform="matrix(-0.016, 1, -0.571, -0.009, 0.983, -0.967)"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#e43689" />
              <stop offset="1" stop-color="#9b6bfe" />
            </radialGradient>
          </defs>
          <rect
            id="Rectangle_2"
            data-name="Rectangle 2"
            width="848"
            height="479"
            rx="20"
            fill="url(#radial-gradient)"
          />
        </svg>
      </Header>
      <Logos>
        <h5>Used by top designers from the world's top companies</h5>
        <div className="logos__container">
          {logos.map(logo => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="165"
              height="57"
              viewBox="0 0 165 57"
            >
              <rect
                id="Rectangle_4"
                width="165"
                height="57"
                rx="28.5"
                fill="#73869a"
              />
            </svg>
          ))}
        </div>
      </Logos>
      <Features>
        <Feature>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="416"
            height="765"
            viewBox="0 0 416 765"
          >
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="0"
                cy="0"
                r="1.217"
                gradientTransform="matrix(0.212, 0.977, -2.889, 0.628, 0, 0)"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#e57a62" />
                <stop offset="1" stop-color="#813cc4" />
              </radialGradient>
            </defs>
            <rect
              id="Rectangle_3"
              width="416"
              height="765"
              rx="20"
              fill="url(#radial-gradient)"
            />
          </svg>
          <div className="feature__main-feature">
            <p className="main-feature__mini-title">
              The Ultimate Creative Solution
            </p>
            <h2>One simple platform</h2>
            <p>
              Replace dozens of tools, save money, and manage your entire video
              business needs from anywhere with one simple platform.
            </p>
            <MiniFeatures>
              <div className="mini-features__description">
                <h4>Easy to use</h4>
                <p>
                  Say goodbye to clunky video software and hello to one-click
                  editing online. No training needed.
                </p>
              </div>
              <div className="mini-features__description">
                <h4>Tell your story</h4>
                <p>Produce material that engages and grows your audiences.</p>
              </div>
            </MiniFeatures>
            <MiniFeatures>
              <div className="mini-features__description">
                <h4>Add subtitles</h4>
                <p>
                  Say goodbye to clunky video software and hello to one-click
                  editing online. No training needed.
                </p>
              </div>
              <div className="mini-features__description">
                <h4>Sound design</h4>
                <p>Produce material that engages and grows your audiences.</p>
              </div>
            </MiniFeatures>
          </div>
        </Feature>
        <Feature>
          <div className="feature__main-feature feature__main-feature--right">
            <p className="main-feature__mini-title">Grow your business</p>
            <h2>Market your products</h2>
            <p>
              Position your marketing team for rapid growth. Whether you have a
              video editor on staff who needs support or you are handling the
              creative on your own.
            </p>
            <MiniFeatures>
              <div className="mini-features__description">
                <h4>Deliverables in Days</h4>
                <p>
                  Designers ensures that you do not miss opportunities by
                  delivering created by professional video editors.
                </p>
              </div>
              <div className="mini-features__description">
                <h4>Time Savings</h4>
                <p>
                  You can request new videos, ask for revisions through an
                  intuitive and engaging portal.
                </p>
              </div>
            </MiniFeatures>
            <MiniFeatures>
              <div className="mini-features__description">
                <h4>Cost Efficiency</h4>
                <p>
                  Say goodbye to clunky video software and hello to one-click
                  editing online. No training needed.
                </p>
              </div>
              <div className="mini-features__description">
                <h4>Unmatched Skills</h4>
                <p>
                  Our team has video editors with over 10 years of experience.
                </p>
              </div>
            </MiniFeatures>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="416"
            height="765"
            viewBox="0 0 416 765"
          >
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="0"
                cy="0"
                r="1.217"
                gradientTransform="matrix(0.212, 0.977, -2.889, 0.628, 0, 0)"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#e57a62" />
                <stop offset="1" stop-color="#813cc4" />
              </radialGradient>
            </defs>
            <rect
              id="Rectangle_3"
              width="416"
              height="765"
              rx="20"
              fill="url(#radial-gradient)"
            />
          </svg>
        </Feature>
      </Features>
    </div>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin-top: 19.2rem;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-top: 2rem;
  }

  .header__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    background: var(--purple);
    width: 12rem;
    height: 4.4rem;
    margin-top: 3.6rem;

    a {
      color: #eff5f8;
      font-size: 1.6rem;
    }
  }

  svg {
    margin-top: 4.8rem;
  }
`

const Logos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  h5 {
    font-size: 1.6rem;
    color: var(--gray);
  }

  .logos__container {
    margin-top: 3.4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    svg {
      opacity: 0.1;
    }
  }
`
const Features = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 129rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
`
const Feature = styled.div`
  margin-top: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    flex-shrink: 0;
  }

  .feature__main-feature {
    margin-left: 12.4rem;

    h2,
    p {
      margin-top: 2rem;
    }

    .main-feature__mini-title {
      font-size: 1.6rem;
      color: var(--white);
    }
  }

  .feature__main-feature--right {
    margin-left: 0;
    margin-right: 12.4rem;
  }
`

const MiniFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9rem;

  .mini-features__description {
    max-width: 29rem;
    p {
      font-size: 1.6rem;
      margin-top: 2.4rem;
      line-height: 2.8rem;
    }
  }
`
