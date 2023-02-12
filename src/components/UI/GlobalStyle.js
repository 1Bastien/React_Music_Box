import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        transition: linear 0.2s;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
        font-family: Montserrat;
    }
    button {
        font-family: Montserrat;
        padding: 12px 20px;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
        cursor: pointer;
        border: solid 1px;
        transition: linear 0.2s;
    }
    button:hover {
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.mainColor};
    }
    h1, h2, h3, h4, h5{
        letter-spacing: 2px;
    }
    h1 {
        font-size: 1.6rem;
    }
    h2 {
        font-size: 1.4rem;
    }
`;

export default GlobalStyle;