import styled from "styled-components";
import { cinzaEscuro } from "../UI/variaveis";

const StyledFooterInfo = styled.p`
    color: ${cinzaEscuro};
    font-size: 0.75rem;
    font-style: italic;
    font-weight: lighter;
    margin: 0 2%;
    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export default function FooterInfo(props: { texto: string }) {
    return <StyledFooterInfo>{props.texto}</StyledFooterInfo>;
}
