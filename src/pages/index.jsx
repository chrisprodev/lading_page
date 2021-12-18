import React from "react"
import NavBar from "../components/NavBar"
import * as Style from "./index.Styles"
import { Link } from "gatsby"
import Faq from "../components/Faq"
import { faqs, logosData, testimonials } from "../constants/data"
import "../global.css"
import TestimonialCard from "../components/TestimonialCard"

export default function Home() {
  return (
    <div>
      <NavBar />
      <Style.Header>
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
      </Style.Header>
      <Style.Logos>
        <h5>Used by top designers from the world's top companies</h5>
        <div className="logos__container">
          {logosData.map(logo => (
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
      </Style.Logos>
      <Style.Features>
        <Style.Feature>
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
            <h2>The Ultimate Creative Solution</h2>
            <p>
              Replace dozens of tools, save money, and manage your entire video
              business needs from anywhere with one simple platform.
            </p>
            <Style.MiniFeatures>
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
            </Style.MiniFeatures>
            <Style.MiniFeatures>
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
            </Style.MiniFeatures>
          </div>
        </Style.Feature>
        <Style.Feature>
          <div className="feature__main-feature feature__main-feature--right">
            <h2>Market your products</h2>
            <p>
              Position your marketing team for rapid growth. Whether you have a
              video editor on staff who needs support or you are handling the
              creative on your own.
            </p>
            <Style.MiniFeatures>
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
            </Style.MiniFeatures>
            <Style.MiniFeatures>
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
            </Style.MiniFeatures>
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
                <stop offset="0" stop-color="#7D47E2" />
                <stop offset="1" stop-color="#447F8C" />
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
        </Style.Feature>
      </Style.Features>
      <Style.Testimonials>
        <h2>Take your business to the next level</h2>
        <p>
          Become part of a growing community of innovative Entrepreneurs,
          Marketers and Agencies.
        </p>
        <Style.TestimonialsGrid>
          {testimonials.map(element => (
            <TestimonialCard
              user={element.user}
              account={element.account}
              body={element.description}
              date={element.date}
            />
          ))}
        </Style.TestimonialsGrid>
      </Style.Testimonials>
      <Style.FAQs>
        <h2>Frequently asked questions</h2>
        {faqs.map(question => (
          <Faq title={question.title} content={question.content} />
        ))}
      </Style.FAQs>
    </div>
  )
}
