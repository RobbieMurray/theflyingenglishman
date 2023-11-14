import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  .container {
    margin: 0;

    h2 {
      padding: 30px 0;
    }
    @media (min-width: 768px) {
      > div {
        width: 66.666%;
        max-width: 700px;
      }
      h2 {
        padding: 50px 0;
      }
    }
  }
`
