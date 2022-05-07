import { cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledData = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    font-style: italic;
    font-weight: lighter;
    padding: 5% 0%;
    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
        padding: 2.5% 0;
    }
`;

export default function Data(props: { dataHoje: string }) {
    return <StyledData>{props.dataHoje}</StyledData>;
}
