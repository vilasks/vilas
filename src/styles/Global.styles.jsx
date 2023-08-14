import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
    padding: 0;
    margin: 0;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bg};
    font-family: 'Open Sans', sans-serif;
}

`