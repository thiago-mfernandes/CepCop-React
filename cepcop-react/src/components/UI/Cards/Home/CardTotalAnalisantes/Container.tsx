import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";
import { cinzaMedio } from "src/components/UI/variaveis";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid ${cinzaMedio};
    margin: auto 0;
    padding: 5% 0;
`;

export default function Container(props: IChildProp) {
    return <StyledContainer>{props.children}</StyledContainer>;
}
