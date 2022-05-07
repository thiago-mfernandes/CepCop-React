import IChildProp from "src/components/Interfaces/IChildProp";
import { cinzaMedio } from "src/components/UI/variaveis";
import styled from "styled-components";

const StyledCardConfigHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${cinzaMedio};
    padding-bottom: 2.5%;
    margin-top: 5%;
    width: 100%;
`;

export default function Header(props: IChildProp) {
    return <StyledCardConfigHeader>{props.children}</StyledCardConfigHeader>;
}
