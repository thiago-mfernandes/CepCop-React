import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";

const StyledFormCadastro = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default function FormCadastro(props: IChildProp) {
    return <StyledFormCadastro>{props.children}</StyledFormCadastro>;
}
