import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";
import { azulEscuroFosco } from "../variaveis";
import { Abstract } from "./Absctrat";

const StyledBotaoSalvarConfiguracoes = styled(Abstract)`
    margin-left: 0;
    margin: 6.5% auto 0;
    &:hover {
        border: 1px solid ${azulEscuroFosco};
        transition: all 0.3s ease-in-out;
    }
`;

export default function BotaoSalvarConfiguracoes(props: IChildProp) {
    return <StyledBotaoSalvarConfiguracoes>{props.children}</StyledBotaoSalvarConfiguracoes>;
}
