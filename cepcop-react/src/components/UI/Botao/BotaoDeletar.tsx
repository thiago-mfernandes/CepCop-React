import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { vermelhoPadrao } from "../variaveis";

export const StyledBotaoDeletar = styled.i`
    color: ${vermelhoPadrao};
    font-size: 1.25rem;
    cursor: pointer;
    padding-left: 2.5%;
    //---------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin: 0 5%;
    }
`;

function BotaoDeletar(props: { id?: string }) {
    return (
        <StyledBotaoDeletar id={props.id}>
            <MdDelete />
        </StyledBotaoDeletar>
    );
}

export default BotaoDeletar;
