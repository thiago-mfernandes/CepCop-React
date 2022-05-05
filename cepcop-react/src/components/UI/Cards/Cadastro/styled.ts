import styled from "styled-components";
import { cinzaClaro } from "../../variaveis";

export const StyledCardCadastro = styled.div`
    background: ${cinzaClaro};    
    border-radius: 8px;
    box-shadow: 2px 10px 15px 0px rgba(0,0,0,.2);
    grid-column: 1 / 3; 
    margin: 5% auto 2.5%;
    padding: 10% 5%;
    width: 80%;   

    //----------------------------------------------------------->
    @media screen and (max-width: 768px) {
        width: 90%
    }
`;

export const StyledFormCadastro = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
