import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Lato', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333333;
        font-size: 100%;
        background-color: black;
	    padding: 0;
	    margin: 0;
    }
    * {
	    box-sizing: border-box;
    }
    a {
        color: red;
    }
    a:hover {
        color: white;
    }
    .about-flex-item {
        margin: 4px;
    }
    .about-list-item:hover {
        color: blue;
        cursor: pointer;
        text-decoration: underline;
    }
    .disabled-link {
        pointer-events: none;
    }
`
