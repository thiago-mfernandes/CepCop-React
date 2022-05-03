import styled from "styled-components";
import {
    azulMedioBrilhante,
    branco,
    brancoBg,
    cinzaEscuro,
    verdePadrao,
} from "../../../variaveis";

export const StyledEstatisticas = styled.section`
    background-color: ${branco};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
    grid-column: 1 / 5;
    width: 100%;

    //----------------------------------------------------->
    @media screen and (max-width: 768px) {
        grid-row: 6 / 9;
        box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.15);
    }
`;

export const StyledTitulo = styled.p`
    color: ${brancoBg};
    font-size: 1.25rem;
    background-color: ${cinzaEscuro};
    border-radius: 24px 24px 0 0;
    height: 6vh;
    padding: 2.5%;
    margin-bottom: 1.5%;
    text-align: center;

    //-------------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 7.5vh;
    }
`;

export const StyledContainerLegenda = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

export const StyledContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    width: 50%;
`;

export const StyledLegendaMes = styled.p`
    color: ${cinzaEscuro};
    font-size: 1.1rem;
    text-align: center;
`;

export const StyledIndicador = styled.span`
    height: 50%;
    width: 10%;
    background-color: ${azulMedioBrilhante};
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    //-------------------------------------------->
    @media screen and (max-width: 768px) {
        height: 35px;
        width: 35px;
    }
`;

export const StyledIndicadorVerde = styled(StyledIndicador)`
    background-color: ${verdePadrao};
`;

export const StyledContainerGrafico = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5% 0;
    padding: 3% 0;
`;

export const StyledContainerGraficoBox = styled.div`
    display: flex;
    flex-direction: row;
    height: 20vh;
    width: 5%;
`;

//@media screen and (max-width: 768px)
