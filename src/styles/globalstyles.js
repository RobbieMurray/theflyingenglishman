import { createGlobalStyle } from "styled-components"

const BLK = "#2c2c2c"

const GlobalStyle = createGlobalStyle`
    body{
        overflow-x:hidden; 
    }
    h1{
        color: ${BLK};
    }
    p{
        color: ${BLK};}
    a{
        color: ${BLK};
        text-decoration: none;
    }

    a:hover,
    a:focus {
        color: gray;
        text-decoration: "none";
        transition: color 300ms;
    }
    ul{
        list-style-type: none;
    }
`
export default GlobalStyle
