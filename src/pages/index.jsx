import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TestimonialCard from "../components/TestimonialCard"
import PricingCard from "../components/PricingCard"
import MobileMenu from "../components/MobileMenu"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Faq from "../components/Faq"
import {
  faqs,
  features,
  logosData,
  pricingTable,
  testimonials,
} from "../constants/data"
import "../global.css"

export default function Home() {
  const [menu, showMenu] = useState(false)

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
                  <Link to="/">Get Started</Link>
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
            <FeatureWrapper>
              <Features>
                {features.map(feature => (
                  <>
                    <Feature bg={feature.color}>
                      <VideoContainer bg={feature.color}></VideoContainer>
                      <div className="feature__main-feature">
                        <h2>{feature.mainTitle}</h2>
                        <p className="main-feature__description">
                          {feature.mainDesc}
                        </p>
                      </div>
                    </Feature>
                    <MiniFeatures>
                      {feature.subFeats.map(subFeat => (
                        <div className="mini-features__description">
                          {subFeat.icon && subFeat.icon}
                          <h4>{subFeat.title}</h4>
                          <p>{subFeat.desc}</p>
                        </div>
                      ))}
                    </MiniFeatures>
                  </>
                ))}
              </Features>
            </FeatureWrapper>
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
                <Faq
                  title={question.title}
                  content={question.content}
                  initialState={question.initialState}
                />
              ))}
            </FAQs>
          </Container>
          <Footer />
        </>
      )}
    </>
  )
}

const Container = styled.main``

const Header = styled.header`
  padding: 16rem 0;
  background: var(--blue);

  @media only screen and (max-width: 1340px) {
    padding: 16rem 3rem 8rem 3rem;
  }
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

const FeatureWrapper = styled.section`
  @media only screen and (max-width: 1340px) {
    padding: 16rem 3rem 8rem 3rem;
  }
`

const Features = styled.div`
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
    bg === "orange" ? "var(--orange)" : "var(--blue-2)"};
  border-radius: 2rem;

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
    align-items: center;

    h2,
    p {
      margin-top: 1.6rem;
    }

    .feature__main-feature {
      width: 100%;
      max-width: 32rem;

      p {
        margin-bottom: 2.4rem;
      }

      .main-feature__description {
        margin-bottom: 5rem;
      }
    }
  }
`

const VideoContainer = styled.span`
  width: 50%;
  height: 65rem;
  background: ${({ bg }) =>
    bg === "orange" ? "var(--yellow)" : "var(--blue)"};
  border-radius: 2rem 0 0 2rem;

  @media only screen and (max-width: 1340px) {
    width: 100%;
    border-radius: 2rem 2rem 0 0;
    height: 25rem;
  }
`

const MiniFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  margin: 16rem auto;
  max-width: 129rem;

  .mini-features__description {
    max-width: 28rem;

    svg {
      height: 5rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 1.8rem;
      margin-top: 2.4rem;
      line-height: 3rem;
    }
  }

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
    padding: 8rem 3rem;
    margin: 0;

    .mini-features__description {
      text-align: center;
      max-width: unset;
    }
  }
`

const Pricing = styled.section`
  padding: 10rem 0;
  background: #f2f6f9;

  @media only screen and (max-width: 1340px) {
    padding: 8rem 3rem;
  }
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

  @media only screen and (max-width: 1340px) {
    padding: 8rem 3rem;
  }
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
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 1340px) {
    h2 {
      text-align: center;
    }
  }
`
