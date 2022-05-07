import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";

const StyledTituloBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 2% 0;
`;

export default function TituloBox(props: IChildProp) {
    return <StyledTituloBox>{props.children}</StyledTituloBox>;
}
