import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
        font-family: "Inter", sans-serif;
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        transition: background .3s ease, color .3s ease;
        min-height: 100vh;
    }
`;
