import { branco } from "src/components/UI/variaveis";
import styled from "styled-components";
import { StyledTituloGenerico } from "./TituloGenerico";

const StyledTituloCardTotalAnalisantes = styled(StyledTituloGenerico)`
    color: ${branco};
    font-size: 1rem;
    background-color: rgba(18, 18, 224, 0.7);
    padding: 12.5% 0;
    @media screen and (max-width: 768px) {
        padding: 5% 0;
    }
`;

export default function TotalCadastros(props: { totalCadastros: string }) {
    return (
        <StyledTituloCardTotalAnalisantes>
            {props.totalCadastros}
        </StyledTituloCardTotalAnalisantes>
    );
}
