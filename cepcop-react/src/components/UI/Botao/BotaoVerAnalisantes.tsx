import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";
import { brancoBg } from "../variaveis";
import { Abstract } from "./Absctrat";

const StyledBotaoVerAnalisantes = styled(Abstract)`
    height: 5vh;
    width: 70%;
    margin: 7.5% auto 15%;
    @media screen and (min-width: 768px) {
        margin: 7.5% auto;
    }
    & a {
        color: ${brancoBg};
        font-size: 0.75rem;
        font-weight: 400;
        text-decoration: none;
    }
`;

export default function BotaoVerAnalisantes(props: IChildProp) {
    return <StyledBotaoVerAnalisantes>{props.children}</StyledBotaoVerAnalisantes>;
}
