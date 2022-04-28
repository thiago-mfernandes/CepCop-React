import styled, { css } from "styled-components";
import IContainerProps from "src/components/Interfaces/IContainerProps";

export const ContainerBox = styled.div<IContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
        props.justifyContentDireita ? "flex-end" : "flex-start"};
    padding-bottom: ${(props) => props.paddingBottom};
    border-bottom: ${(props) => props.borderBottom};
    ${(props) =>
        props.justifyContentDireita &&
        css`
            margin-right: 5%;
        `};
    //------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;
