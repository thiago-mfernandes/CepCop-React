import styled from "styled-components";

const ContainerBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2.5%;

    //---------------------------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

function Container({ children }: { children : any}):JSX.Element {
    return <ContainerBox>{ children }</ContainerBox>
}

export default Container;
