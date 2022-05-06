import { azulMedioBrilhante } from "./../../variaveis";
import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";
import { cinzaClaro, cinzaMedio } from "../../variaveis";

export const StyledCardCadastro = styled.div`
    background: ${cinzaClaro};
    border-radius: 8px;
    box-shadow: 2px 10px 15px 0px rgba(0, 0, 0, 0.2);
    grid-column: 1 / 3;
    margin: 5% auto 2.5%;
    padding: 10% 5%;
    width: 80%;

    //----------------------------------------------------------->
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const StyledFormCadastro = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledSecaoGenerica = styled.section`
    border-bottom: 1px solid ${cinzaMedio};
    height: 100%;
    padding: 2.5% 0;
    &:hover {
        cursor: pointer;
    }
`;

export const StyledTituloBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 2% 0;
`;

export const StyledTituloSecao = styled.h2`
    font-family: "Fjalla-One", sans-serif;
    color: ${cinzaEscuro};
    font-size: 1.5rem;
    opacity: 0.9;
`;

export const StyledIconExpand = styled.i`
    color: ${azulMedioBrilhante};
    font-size: 2.5rem;
    animation: Flashing 0.8s ease-in alternate infinite;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`;

export const StyledOpcoes = styled.div`
    //1.o bloco vai ficar sem aparecer
    display: flex;
    flex-direction: row;
    max-height: 0;
    overflow: hidden;
    transition: max-height 3s ease;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    //------------------------------------------------------>
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const StyledContainerConteudo = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;

    //------------------------------------------------------>
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledContainerTelefone = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid ${cinzaMedio};
    border-bottom: 1px solid ${cinzaMedio};
    margin: 7.5% 0;
`;

export const StyledContainerConteudoTelefone = styled(StyledContainerConteudo)`
    width: 100%;
`;

export const StyledTituloBoxTelefone = styled.h2`
    @extend %fjala;
    @include color-fontSize($cinza-escuro, 1.1rem);
    font-family: "Fjalla-One", sans-serif;
    color: ${cinzaEscuro};
    font-size: 1.1rem;
    margin: 5% 0;
    opacity: 0.7;
    text-align: center;
`;

//@media screen and (max-width: 768px)
