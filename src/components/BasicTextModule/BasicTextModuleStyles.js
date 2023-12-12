import styled from "styled-components";

export const BasicTextModuleStyles = styled.section`
  .container {
    h2 {
      padding: 0 0 30px 0;
    }
    @media (min-width: 768px) {
      > div {
        width: 100%;
        align-content: center;
        max-width: 700px;
      }
      h2 {
        padding: 0 0 50px 0;
      }
    }

    @media (min-width: 1024px) {
      > div {
        width: 100%;
        align-content: center;
        padding: 0 150px;
      }
      h2 {
        padding: 0 0 50px 0;
      }
    }
  }
`;
