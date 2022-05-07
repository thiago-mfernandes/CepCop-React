import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledDiaSemana = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    font-style: italic;
    font-weight: lighter;
    padding: 5% 0% 10%;
    @media screen and (max-width: 768px) {
        padding: 5% 0 0;
    }
`;

export default function DiaSemana(props: { dia: string }) {
    return <StyledDiaSemana>{props.dia}</StyledDiaSemana>;
}
