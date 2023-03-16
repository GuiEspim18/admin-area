import { Button, Card, Container } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";
import { border1, color1, error, placeholder, primaryColor, secondaryColor, terciaryColor } from "./main";

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
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100%;
`;

export const StyledCard = styled(Card)`
    padding: 14px 34px 34px 34px;
    width: 40%;
    background: ${secondaryColor} !important;
    border-radius: 10px !important;

    @media screen and (max-width: 700px) {
        width: 90%;
    }
`;

export const StyledInputContainer: any = styled.div`
    width: 100%;
    border: solid 1px ${(props: any) => props.invalid === true ? error : border1};
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 15px;

    input {
        height: 100%;
        margin: 0;
        padding: 15px 20px;
        width: 100%;
        border: none;
        outline: none;
        font-size: 1rem;
        color: ${color1};
        border-radius: 4px;
        background: transparent;
    }

    &:hover {
        border-color: ${terciaryColor};
    }

    &:focus-within {
        border-color: ${terciaryColor};
    }
`;

export const StyledPasswordContainer: any = styled.div`
    width: 100%;
    border: solid 1px ${(props: any) => props.invalid === true ? error : border1};
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    margin-bottom: 15px;
    box-sizing: border-box;
    transition: 0.3s;

    input {
        height: 100%;
        margin: 0;
        padding: 15px 20px;
        flex: 1;
        border: none;
        outline: none;
        font-size: 1rem;
        color: ${color1};
        border-radius: 4px;
        background: transparent;

    }

    &:hover {
        border-color: ${terciaryColor};
    }

    &:focus-within {
        border-color: ${terciaryColor};
    }

`;

export const H2 = styled.h2`
    color: ${color1};
    font-size: 2rem;
    text-align: center;
`;

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled(Button)`
    background: ${terciaryColor} !important;
    padding: 10px 15px !important;
    min-width: 150px !important;
`;

export const StyledInput: any =  styled("input")`
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props: any) => props.invalid === true ? error : placeholder};
    opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${(props: any) => props.invalid === true ? error : placeholder};;
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: ${(props: any) => props.invalid === true ? error : placeholder};;
}
`;