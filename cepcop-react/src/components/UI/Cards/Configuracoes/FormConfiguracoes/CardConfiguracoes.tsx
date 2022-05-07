import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

const StyledConfigPage = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 1fr);
    gap: 16px;
    padding: 5% 2.5%;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 90%;
        margin: 0 auto;
    }
`;

export default function CardConfiguracoes(props: IChildProp) {
    return <StyledConfigPage>{props.children}</StyledConfigPage>;
}
