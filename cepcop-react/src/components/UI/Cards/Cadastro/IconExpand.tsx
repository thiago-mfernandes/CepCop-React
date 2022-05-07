import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { azulMedioBrilhante } from "../../variaveis";

const StyledIconExpand = styled.i`
    color: ${azulMedioBrilhante};
    font-size: 2.5rem;
    animation: Flashing 0.8s ease-in alternate infinite;
    padding: 0;
    &:hover {
        cursor: pointer;
    }
`;

export default function IconExpand() {
    return (
        <StyledIconExpand>
            <MdExpandMore />
        </StyledIconExpand>
    );
}
