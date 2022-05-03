import {
    azulEscuroFosco,
    azulMedioBrilhante,
    cinzaEscuro,
    cinzaMedio,
} from "src/components/UI/variaveis";
import styled from "styled-components";

export const NavLista = styled.ul`
    display: flex;
    flex-direction: column;
    //-------------------------------------------->
    @media screen and (max-width: 768px) {
        border: none;
        display: flex;
        flex-direction: row;
        height: 25vh;
        justify-content: flex-end;
        overflow-x: auto;
        width: 100%;
    }
`;

export const NavItem = styled.li`
    align-items: center;
    border-bottom: 1px solid ${cinzaMedio};
    display: flex;
    flex-direction: row;
    height: 8.5vh;
    justify-content: flex-start;
    text-decoration: none;
    width: 100%;

    &:first-child {
        border-top: 1px solid ${cinzaMedio};
        margin-left: 0;
        margin-top: 7.5%;
        //-------------------------------------------->
        @media screen and (max-width: 768px) {
            border-bottom: 1px solid ${cinzaMedio}; //pode retirar se quiser
            border-top: none;
            flex-direction: row-reverse;
            justify-content: space-between;
            margin-top: 0;
            position: absolute;
            left: 0;
            top: 5%;
            width: 100vw;
        }
    }
    
    &:hover {
        border-left: 4px solid ${azulEscuroFosco};
        cursor: pointer;
        
        i {
            color: ${azulMedioBrilhante};
        }
        p {
            color: #000;
        }


        //-------------------------------------------->
        @media screen and (max-width: 768px) {
            border-left: none;
        }
    }
    //-------------------------------------------->
    @media screen and (max-width: 768px) {
        align-items: center;
        border-bottom: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 5%;
        width: 100%;
    }
`;

export const NavIcon = styled.i`
    color: ${cinzaEscuro};
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0 7.5%;

    //---------------------------------------------------->
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const NavLink = styled.p`
    color: ${cinzaEscuro};
    font-size: 1.25rem;
    font-family: "Lato", sans-serif;
    text-decoration: none;
    width: 100%;

    //-------------------------------------------->
    @media screen and (max-width: 768px) {
        width: 75%;
        padding-left: 10%;
    }
`;
