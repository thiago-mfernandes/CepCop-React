import styled, { css } from "styled-components";

export interface ContainerProps {
    children: any;
    borderBottom: string;
    paddingBottom: string;
    justifyContentDireita?: boolean;
}

const ContainerBox = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
        props.justifyContentDireita ? "flex-end" : "flex-start"};
    padding-bottom: ${(props) => props.paddingBottom};
    border-bottom: ${(props) => props.borderBottom};
    ${(props) =>
        (props.justifyContentDireita &&
        css`
            margin-right: 5%;
        `)};
    //------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

const Container: React.FC<ContainerProps> = ({
    children,
    borderBottom,
    paddingBottom,
    justifyContentDireita,
}) => (
    <ContainerBox
        borderBottom={borderBottom}
        paddingBottom={paddingBottom}
        justifyContentDireita={justifyContentDireita}
    >
        {children}
    </ContainerBox>
);

export default Container;
