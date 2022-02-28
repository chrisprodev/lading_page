import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { faqs, logosData, pricingTable, testimonials } from "../constants/data"
import TestimonialCard from "../components/TestimonialCard"
import PricingCard from "../components/PricingCard"
import MobileMenu from "../components/MobileMenu"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Modal from "../components/Modal"
import Faq from "../components/Faq"
import "../global.css"

export default function Home() {
  const [menu, showMenu] = useState(false)
  const [modal, showModal] = useState(false)

  return (
    <>
      <NavBar onOpenMobileMenu={() => showMenu(!menu)} menu={menu} />
      {menu ? (
        <MobileMenu />
      ) : (
        <>
          <Container>
            <Header>
              <ContentWrapper>
                <h1>Explainer videos made simple</h1>
                <p>Scale your business with unlimited video editing.</p>
                <span className="header__btn">
                  <Link to="/" onClick={() => showModal(true)}>
                    Get Started
                  </Link>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80%"
                  height="auto"
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
                      <stop offset="0" stop-color="#fff" />
                      <stop offset="1" stop-color="#fff" />
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
              </ContentWrapper>
            </Header>
            <Logos>
              <h5>Used by top designers from the world's top companies</h5>
              <div className="logos__container">
                {logosData.map(logo => logo)}
              </div>
            </Logos>
            <Features>
              <Feature bg="green">
                <VideoContainer></VideoContainer>
                <div className="feature__main-feature">
                  <h2>The Ultimate Creative Solution</h2>
                  <p className="main-feature__description">
                    Replace dozens of tools, save money, and manage your entire
                    video business needs from anywhere with one simple platform.
                  </p>
                </div>
              </Feature>
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
              <Feature bg="blue">
                <VideoContainer bg="blue"></VideoContainer>
                <div className="feature__main-feature">
                  <h2>Market your products</h2>
                  <p className="main-feature__description">
                    Position your marketing team for rapid growth. Whether you
                    have a video editor on staff who needs support or you are
                    handling the creative on your own.
                  </p>
                </div>
              </Feature>
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
            </Features>
            <Pricing>
              <PricingContentWrapper>
                <h2>Find the plan that is right for you</h2>
                <p>No hiden fees.</p>
                <PricingWrapper>
                  {pricingTable.map(card => (
                    <PricingCard {...card} />
                  ))}
                </PricingWrapper>
              </PricingContentWrapper>
            </Pricing>
            <Testimonials>
              <TestimonialsWrapper>
                <h2>Take your business to the next level</h2>
                <p className="testimonials__sub-title">
                  Become part of a growing community of innovative
                  Entrepreneurs, Marketers and Agencies.
                </p>
                <TestimonialsGrid>
                  {testimonials.map(element => (
                    <TestimonialCard
                      user={element.user}
                      account={element.account}
                      body={element.description}
                      date={element.date}
                    />
                  ))}
                </TestimonialsGrid>
              </TestimonialsWrapper>
            </Testimonials>
            <FAQs>
              <h2>Frequently asked questions</h2>
              {faqs.map(question => (
                <Faq title={question.title} content={question.content} />
              ))}
            </FAQs>
          </Container>
          <Footer />
        </>
      )}
      {modal && <Modal onCloseModal={() => showModal(false)} />}
    </>
  )
}

const Container = styled.main`
  @media only screen and (max-width: 1340px) {
    padding: 0 3rem;
  }
`

const Header = styled.header`
  padding: 16rem 0;
  background: var(--blue);
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin-left: auto;
  margin-right: auto;

  p {
    color: var(--opacity-7);
    margin-top: 2rem;
    text-align: center;
  }

  h1 {
    color: #fff;
    max-width: 64rem;
    text-align: center;
  }

  .header__btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background: #fff;
    width: 14rem;
    height: 4.8rem;
    margin-top: 3.6rem;
    transition: all 150ms ease;

    a {
      font-size: 1.6rem;
    }

    :hover {
      background: var(--opacity-7);
    }
  }

  svg {
    margin-top: 4.8rem;
  }

  @media only screen and (max-width: 1340px) {
    svg {
      margin-top: 2.8rem;
    }
    p {
      margin-top: 1.4rem;
    }
  }
`

const Logos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin: 12rem auto;

  h5 {
    font-size: 1.8rem;
    text-align: center;
    line-height: 2rem;
    color: var(--black);
    opacity: 0.7;
    font-weight: 400;
  }

  .logos__container {
    margin-top: 3rem;
    width: 60%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    svg {
      height: 3.6rem;
      width: auto;
      color: var(--black);
      margin: 3rem 3rem 0 3rem;
    }
  }

  @media only screen and (max-width: 1340px) {
    margin-top: 5rem;

    h5 {
      font-size: 1.2rem;
    }

    .logos__container {
      justify-content: center;
      width: 100%;

      svg {
        height: 2.4rem;
        width: auto;
        margin: 1rem 1rem 0 1rem;
      }
    }
  }
`
const Features = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 138rem;
  margin-left: auto;
  margin-right: auto;
`
const Feature = styled.div`
  display: flex;
  background: ${({ bg }) =>
    bg === "green" ? "var(--orange)" : "var(--blue-2)"};
  border-radius: 1rem;

  .feature__main-feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    align-items: center;

    h2,
    p {
      margin-top: 2rem;
      color: #fff;
      max-width: 51rem;
    }
  }

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
    text-align: center;

    h2,
    p {
      margin-top: 1.6rem;
    }

    .feature__main-feature {
      margin-left: 0;
      p {
        margin-bottom: 2.4rem;
      }

      .main-feature__description {
        margin-bottom: 5rem;
      }
    }

    .feature__main-feature--right {
      margin-right: 0;
    }
  }
`

const VideoContainer = styled.span`
  width: 50%;
  height: 65rem;
  background: ${({ bg }) => (bg === "blue" ? "var(--blue)" : "var(--yellow)")};
  border-radius: 1rem 0 0 1rem;
`

const MiniFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  margin: 16rem auto;
  max-width: 129rem;

  .mini-features__description {
    max-width: 28rem;

    p {
      font-size: 1.8rem;
      margin-top: 2.4rem;
      line-height: 3rem;
    }
  }

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
    margin-top: 0;

    .mini-features__description {
      max-width: unset;
      p {
        margin-top: 1.6rem;
        margin-bottom: 5rem;
      }
    }
  }
`

const Pricing = styled.section`
  padding: 10rem 0;
  background: #f2f6f9;
`

const PricingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin-left: auto;
  margin-right: auto;

  h2,
  p {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 1340px) {
    margin-top: 7rem;

    h2,
    p {
      margin-top: 1.6rem;
    }

    h2 {
      text-align: center;
    }
  }
`

const PricingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 5rem;

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
    width: 90%;
  }
`

const Testimonials = styled.section`
  padding: 10rem 0;
  background: var(--dark-gray);
`

const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 129rem;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-top: 2rem;
  }

  h2,
  .testimonials__sub-title {
    color: #fff;
    text-align: center;
  }

  .testimonials__mini-title {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--white);
  }

  @media only screen and (max-width: 1340px) {
    margin-top: 7rem;
  }
`

const TestimonialsGrid = styled.div`
  margin-top: 5rem;
  columns: 3 auto;
  column-gap: 2rem;

  @media only screen and (max-width: 1340px) {
    columns: 1 auto;
    column-gap: 2rem;

    div:nth-of-type(1n + 4) {
      display: none;
    }
  }
`

const FAQs = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 129rem;
  margin-top: 23rem;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1340px) {
    margin-top: 7rem;

    h2 {
      text-align: center;
    }
  }
`
