import styled from "styled-components";
export const VideoTextModuleStyles = styled.section`
  .container {
    h2 {
      padding-bottom: 30px; // Space below the title
    }

    iframe {
      width: 100%;
      height: auto; // Maintain the aspect ratio
      max-width: 800px; // Maximum video width
      aspect-ratio: 16 / 9; // Maintain a 16:9 aspect ratio
      margin: 0 auto; // Center the iframe
    }

    @media (min-width: 1024px) {
      .video-container {
        position: relative;
        padding-top: 56.25%; // Aspect ratio hack for 16:9
        height: 0; // Collapse container height
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
