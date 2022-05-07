import { cinzaClaro, cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";
import { StyledTituloGenerico } from "./TituloGenerico";

const StyledTituloCardHoje = styled(StyledTituloGenerico)`
    color: ${cinzaClaro};
    font-size: 1rem;
    height: 6vh;
    width: 100%;
    background-color: ${cinzaEscuro};
    margin-bottom: 7.5%;
    padding-top: 12.5%;
    vertical-align: baseline;
    @media screen and (max-width: 768px) {
        height: 4vh;
        padding: 2.5% 0;
        vertical-align: middle;
    }
`;

export default function TituloCardHoje(props: { conteudo: string }) {
    return <StyledTituloCardHoje>{props.conteudo}</StyledTituloCardHoje>;
}
