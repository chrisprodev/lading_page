import styled from "styled-components";
import Link from "next/link";
import Testimonials from "../components/Testimonials";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Logos from "../components/Logos";
import { motion } from "framer-motion";
import { faqs } from "../constants/data";
import Feature from "../components/Feature";
import PricingTable from "../components/PricingTable";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container initial="initial" animate="animate" exit="exit">
        <Header id="home">
          <ContentWrapper>
            <h1>Explainer videos made simple</h1>
            <p>Scale your business with unlimited video editing.</p>
            <span className="header__btn">
              <Link href="/">
                <a>Get Started</a>
              </Link>
            </span>
          </ContentWrapper>
          <video
            autoPlay={true}
            muted
            loop
            src={require("../public/demoreel.mp4")}
          />
        </Header>
        <Logos />
        <FeatureWrapper id="features">
          <Feature />
        </FeatureWrapper>
        <div id="pricing">
          <PricingTable id />
        </div>
        <Testimonials />
        <FAQs id="faqs">
          <h2>Frequently asked questions</h2>
          {faqs.map(question => (
            <Faq
              key={question.title}
              title={question.title}
              content={question.content}
              initialState={question.initialState}
            />
          ))}
        </FAQs>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

const Container = styled(motion.main)``;

const Header = styled.header`
  position: relative;
  overflow: hidden;
  height: 90rem;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media only screen and (max-width: 1340px) {
    height: 60rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin-left: auto;
  margin-right: auto;

  p {
    color: #fff;
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

  @media only screen and (max-width: 1340px) {
    padding: 0 3rem;
    p {
      margin-top: 1.4rem;
    }
  }
`;

const FeatureWrapper = styled.section`
  @media only screen and (max-width: 1340px) {
    padding: 0 3rem;
  }
`;

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
`;
