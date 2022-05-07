import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

const StyledBoxButton = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
`;

export default function ButtonBox(props: IChildProp) {
    return <StyledBoxButton>{props.children}</StyledBoxButton>;
}
