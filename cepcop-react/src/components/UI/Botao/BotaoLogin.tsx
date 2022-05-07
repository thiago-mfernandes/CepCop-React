import styled from "styled-components";
import { Abstract } from "./Absctrat";

const StyledBotaoLogin = styled(Abstract)`
    margin-left: 0;
    width: 75%;
`;

export default function BotaoLogin() {
    return <StyledBotaoLogin></StyledBotaoLogin>;
}
