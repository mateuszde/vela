import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, 
    *::after, 
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        min-height: 100vh;
        background-color: ${({ theme }) => theme.colors.white};
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        /*
        font-weight: 300;
        letter-spacing: 0.07em; */
        /* background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black}; */
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        /* font-family: "Teko", sans-serif;
        font-weight: 900;
        letter-spacing: 0.05em; */
    }

    h1 {
        /* font-size: 50px;
        margin-bottom: 16px; */
    }

    h2 {
        /* font-size: 30px; */
    }

    h3 {
        /* font-size: 24px;
        font-weight: 600; */
    }

    p {
        letter-spacing: 0.05em; 
        font-weight: lighter;
        /* font-family:'Montserrat', sans-serif; */
    }

`;
