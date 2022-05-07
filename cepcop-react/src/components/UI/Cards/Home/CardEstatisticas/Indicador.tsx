import { azulMedioBrilhante, verdePadrao } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledIndicador = styled.span`
    height: 50%;
    width: 10%;
    background-color: ${azulMedioBrilhante};
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 768px) {
        height: 35px;
        width: 35px;
    }
`;

const StyledIndicadorVerde = styled(StyledIndicador)`
    background-color: ${verdePadrao};
`;

export default function Indicador(props: { verde?: boolean }) {
    return props.verde ? <StyledIndicadorVerde /> : <StyledIndicador />;
}
