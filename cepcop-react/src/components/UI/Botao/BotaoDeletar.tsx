import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { vermelhoPadrao } from "../variaveis";

export const StyledBotaoDeletar = styled.i`
    color: ${vermelhoPadrao};
    font-size: 1.25rem;
    cursor: pointer;

    //---------------------------------------------->
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin: 0 5%;
    }
`;

function BotaoDeletar(id: string, children: React.ReactNode): JSX.Element {
    return (
        <StyledBotaoDeletar>
            <MdDelete />
        </StyledBotaoDeletar>
    );
}

export default BotaoDeletar;
