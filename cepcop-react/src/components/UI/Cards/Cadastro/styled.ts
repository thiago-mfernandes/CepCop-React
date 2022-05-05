import { cinzaEscuro } from 'src/components/UI/variaveis';
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
