import styled from "styled-components";

export const PortfolioModuleStyles = styled.section`
  .container {
    margin: 0;
    padding: 0 20px;

    h2 {
      padding: 0 0 30px 0;
    }
    .itemcontainer {
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;

      .video-container {
        width: 100%;
        position: relative;

        &:before {
          content: "";
          display: block;
          padding-top: 56.25%; // 16:9 aspect ratio
        }

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }

      .text-container {
        padding: 15px 0;
      }

      h4 {
        padding-bottom: 30px;
      }
    }
    @media (min-width: 768px) {
      padding: 0 40px;
      .itemcontainer {
        flex-direction: row; // Align children side by side for tablet and above
        align-items: center;
        justify-content: space-between;

        .video-container {
          flex: 0 0 60%; // Fixed 60% width for the video container on tablet
          position: relative;
          padding-top: 0;
          min-width: 0; // Remove min-width constraint
          min-height: 0; // Remove min-height constraint
        }

        .text-container {
          flex: 1; // Allow text container to take remaining space
          padding: 0 15px;
        }
      }
    }

    @media (min-width: 1024px) {
      padding: 0 50px;
      .itemcontainer {
        .video-container {
          flex-basis: 60%; // Adjusted for desktop view
          max-width: 60%; // Adjusted for desktop view
          max-width: 700px;
        }

        .text-container {
          flex: 1;
          padding: 0 15px;
        }
      }
    }
  }
`;
