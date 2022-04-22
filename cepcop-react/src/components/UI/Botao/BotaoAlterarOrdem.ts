import styled from "styled-components";
import { Abstract } from './Absctrat';

export const BotaoAlterarOrdem = styled(Abstract)`
    margin-left: 5%;
    width: 20%;

    &:hover {
        width: 25%;
    }

    //------------------------>
    @media screen and(max-width: 768px) {
        width: 10%;

        &:hover {
            width: unset;
        }
    }
`;