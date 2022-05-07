import styled from "styled-components";

const StyledPessoaCadastrada = styled.p`
    font-size: 0.9rem;
    padding: 2.5% 0;
    margin: 0 7.5%;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        text-align: left;
        width: 90%;
    }
`;

export default function PessoaCadastrada(props: { pessoa: string }) {
    return <StyledPessoaCadastrada>{props.pessoa}</StyledPessoaCadastrada>;
}
