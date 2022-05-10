import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

const StyledBoxConteudoNascimento = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export default function BoxConteudoNascimento(props: IChildProp) {
    return (
        <StyledBoxConteudoNascimento>{props.children}</StyledBoxConteudoNascimento>
    )
}