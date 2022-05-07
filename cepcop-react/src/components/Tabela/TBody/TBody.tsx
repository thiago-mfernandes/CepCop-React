import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledTBody = styled.tbody`
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
    }
`;

export default function TabelaBody(props: IChildProp) {
    return <StyledTBody>{props.children}</StyledTBody>;
}
