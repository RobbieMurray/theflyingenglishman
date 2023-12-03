import styled from "styled-components";

export const BasicTextModuleStyles = styled.section`
  .container {
    margin: 0;
    padding: 0 50px;

    h2 {
      padding: 0 0 30px 0;
    }
    @media (min-width: 768px) {
      > div {
        width: 100%;
        align-content: center;
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
