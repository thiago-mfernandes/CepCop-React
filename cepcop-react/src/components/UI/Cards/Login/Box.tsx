import styled from "styled-components";
import IChildProp from "src/components/Interfaces/IChildProp";
import { cinzaClaro } from "../../variaveis";

const StyledContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70%;
    width: 50%;
    background-color: ${cinzaClaro};
    border-radius: 24px;
    box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.5);
    padding: 2.5%;
    @media screen and (max-width: 768px) {
        height: 60%;
        width: 85%;
        padding: 10%;
    }
`;

export default function Box(props: IChildProp) {
    return <StyledContainerBox>{props.children}</StyledContainerBox>;
}
