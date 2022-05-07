import IChildProp from "../../Interfaces/IChildProp";
import styled from "styled-components";

const StyledTheadTh = styled.th`
    font-family: "Fjalla-One", sans-serif;
    padding: 0.25%;
    vertical-align: middle;
`;

export default function THeadTh(props: IChildProp) {
    return <StyledTheadTh>{props.children}</StyledTheadTh>;
}
