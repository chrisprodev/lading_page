import styled from "styled-components"

export const Header = styled.header`
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
    width: 14rem;
    height: 4.4rem;
    margin-top: 3.6rem;

    a {
      color: var(--white);
      font-size: 1.6rem;
    }
  }

  svg {
    margin-top: 4.8rem;
  }
`

export const Logos = styled.section`
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
export const Features = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 129rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
`
export const Feature = styled.div`
  margin-top: 22rem;
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
      font-weight: 500;
      font-size: 1.6rem;
      color: var(--white);
    }
  }

  .feature__main-feature--right {
    margin-left: 0;
    margin-right: 12.4rem;
  }
`

export const MiniFeatures = styled.div`
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

export const Pricing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 129rem;
  margin-top: 23rem;
  margin-left: auto;
  margin-right: auto;

  h2,
  p {
    margin-top: 2rem;
  }

  .testimonials__mini-title {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--white);
  }
`

export const PricingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 5rem;
`

export const Testimonials = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 129rem;
  margin-top: 23rem;
  margin-left: auto;
  margin-right: auto;

  h2,
  p {
    margin-top: 2rem;
  }

  .testimonials__mini-title {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--white);
  }
`

export const FAQs = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 129rem;
  margin-top: 23rem;
  margin-left: auto;
  margin-right: auto;
`

export const TestimonialsGrid = styled.div`
  margin-top: 5rem;
  columns: 3 auto;
  column-gap: 2rem;
`
