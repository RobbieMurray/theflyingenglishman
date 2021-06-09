import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        overflow-x:hidden; 
        overflow-y:${({ nav }) => (nav ? "hidden" : "visible")}; 
    }
    a{
        color: #2c2c2c;
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
