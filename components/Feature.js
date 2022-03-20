import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { features } from "../constants/data";
import banner_01 from "../public/images/banner_01@2x.png";
import banner_02 from "../public/images/banner_02@2x.png";

const Feature = () => {
  const animationControl = useAnimation();
  const { ref, inView } = useInView();

  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: [0.25, 0.66, 0.33, 0.95],
      },
    });
  }

  return (
    <Container
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={animationControl}
      ref={ref}
    >
      {features.map(feature => (
        <Fragment key={feature.mainTitle}>
          <FeatContent bg={feature.color}>
            <VideoContainer bg={feature.color}>
              <div className="image-holder">
                <Image
                  src={feature.image === "banner_01" ? banner_01 : banner_02}
                  alt={feature.mainTitle}
                  layout="responsive"
                  width={feature.width}
                  height={feature.height}
                />
              </div>
            </VideoContainer>
            <div className="feature__main-feature">
              <h2>{feature.mainTitle}</h2>
              <p className="main-feature__description">{feature.mainDesc}</p>
            </div>
          </FeatContent>
          <MiniFeatures>
            {feature.subFeats.map(subFeat => (
              <div className="mini-features__description" key={subFeat.title}>
                {subFeat.icon && subFeat.icon}
                <h4>{subFeat.title}</h4>
                <p>{subFeat.desc}</p>
              </div>
            ))}
          </MiniFeatures>
        </Fragment>
      ))}
    </Container>
  );
};

export default Feature;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 138rem;
  margin-left: auto;
  margin-right: auto;
`;

const FeatContent = styled.div`
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
      padding: 4rem 0;

      p {
        margin-bottom: 2.4rem;
      }
    }
  }
`;

const VideoContainer = styled.span`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem 0 0 2rem;
  background: ${({ bg }) =>
    bg === "orange" ? "var(--yellow)" : "var(--blue)"};

  .image-holder {
    padding: 8rem;
    width: 70%;
  }

  @media only screen and (max-width: 1340px) {
    width: 100%;
    border-radius: 2rem 2rem 0 0;

    .image-holder {
      padding: 6rem;
    }
  }
`;

const MiniFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  margin: 16rem auto;
  max-width: 129rem;

  .mini-features__description {
    max-width: 28rem;

    svg {
      height: 8rem;
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
`;
