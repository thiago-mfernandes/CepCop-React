import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledTotalCadastros = styled.p`
    font-family: "Lato", sans-serif;
    color: ${cinzaEscuro};
    font-size: 2rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        font-size: 2.25rem;
    }
`;

export default function TotalCadastros(props: { total: number }) {
    return <StyledTotalCadastros>{props.total}</StyledTotalCadastros>;
}
