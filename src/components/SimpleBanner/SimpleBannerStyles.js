import styled from "styled-components";

export const SimpleBannerStyles = styled.section`
  height: 50vh;
  position: relative;
  padding: var(--gap) var(--borderSpacing);
  @media (min-width: 768px) {
    height: 70vh;
  }
  @media (min-width: 1024px) {
    height: 100vh;
  }

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image,
  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    .banner__image img {
      object-position: 75% 80%;
    }
  }

  .gradient {
  }

  .banner__content {
    position: relative;
    z-index: 2;
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) {
      width: 100vw;
    }

    h1 {
      font-size: var(--bannerTitle);
      border-bottom: 2px solid rgba(255, 255, 255, 0.35);
      display: inline-block;
      text-shadow: var(--textShadow);
    }

    p {
      font-size: calc(var(--bannerTitle) / 4);
      color: white;
      text-shadow: var(--textShadow);
      text-align: left;
    }
  }
`;
