import { createGlobalStyle } from "styled-components";
import { cinzaClaro, brancoBg } from "./UI/variaveis";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    border-collapse: collapse;
	border-spacing: 0;
    list-style: none;
}

body {
    
    font-size: 16px;
    display: grid;
    grid-template-columns: 15% 85%;
    background-color: ${cinzaClaro};
    transition: background-color .5s ease-in-out;
    min-height: 100vh;

    @media screen and (max-width:768px) {
        display: block;
        grid-template-columns: none;
        background-color: ${brancoBg};
        transition: background-color .5s ease-in-out;  
    }     
}
`