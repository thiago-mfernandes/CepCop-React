

import styled from "styled-components";

export interface ContainerProps {
    children: any;
    borderBottom: string;
    paddingBottom: string;
}

const ContainerBox = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: ${(props) => props.paddingBottom};
    border-bottom: ${(props) => props.borderBottom};
    
    //---------------------------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

const Container: React.FC<ContainerProps> = ({ 
    children,
    borderBottom, 
    paddingBottom
 }) => (
    <ContainerBox 
        borderBottom={borderBottom}
        paddingBottom={paddingBottom}>
        { children }
    </ContainerBox>
);


export default Container;
