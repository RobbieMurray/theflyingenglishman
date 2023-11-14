import styled from "styled-components";

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
  .banner__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    box-sizing: border-box;
  }

  .banner__logo {
    max-width: 60%; /* Adjust the size of your logo as needed */
    filter: invert(1) drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
    @media (min-width: 1024px) {
      max-width: 50%;
    }
  }

  .gradient {
    background: radial-gradient(
      at bottom left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 33vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    h2 {
      text-shadow: var(--textShadow);
    }

    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
    }

    h2 {
      font-size: var(--h5);
      font-weight: 400;
    }

    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .banner__sub {
    align-self: center; /* Align to the bottom */
    justify: center;

    padding-bottom: 30px; /* Add some padding at the bottom if needed */
  }

  .banner__btns {
    display: flex;
    justify-content: center;
    gap: var(--gap);
  }
`;
