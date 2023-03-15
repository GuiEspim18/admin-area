import { Container } from "@mui/system";
import styled, { createGlobalStyle } from "styled-components";
import { primaryColor } from "../main";

export const Global = createGlobalStyle`
    html, body, body>#root {
        height: 100% !important;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${primaryColor};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;