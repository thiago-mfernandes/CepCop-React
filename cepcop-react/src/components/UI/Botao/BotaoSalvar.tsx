import styled from "styled-components";
import { Abstract } from "./Absctrat";

const StyledBotaoSalvar = styled(Abstract)`
    margin-left: 0;
    width: 45%;
    &:hover {
        width: 45%;
    }
`;

export default function BotaoSalvar() {
    return <StyledBotaoSalvar></StyledBotaoSalvar>;
}
