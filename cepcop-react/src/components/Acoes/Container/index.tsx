

import styled from "styled-components";

export interface ContainerProps {
    children: any;
    borderBottom: string;
}

const ContainerBox = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2.5%;
    padding-bottom: 2.5%;
    border-bottom: ${(props) => props.borderBottom};
    
    //---------------------------------------------------------->
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

const Container: React.FC<ContainerProps> = ({ 
    children,
    borderBottom
 }) => (
    <ContainerBox borderBottom={borderBottom}>
        { children }
    </ContainerBox>
);


export default Container;
