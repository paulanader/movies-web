import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --gray-dark: #282828;
    --black10: rgba(0, 0, 0, 0.9)
    --white: #ffffff;
    --yellow: #FFD640
    --gray50: #E2E8F0;
    --gray400: #A0AEC0;
     }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        background: rgba(0, 0, 0, 0.9);
        -webkit-font-smoothing: antialiased;
    }

    body,input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2 ,h3 ,h4 ,h5 ,h6 ,strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    // Bootstrap overrides

    

`;
