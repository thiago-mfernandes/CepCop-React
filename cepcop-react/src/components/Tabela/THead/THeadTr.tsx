import { brancoBg, cinzaEscuro } from "src/components/UI/variaveis";
import styled from "styled-components";
import IChildProp from "../../Interfaces/IChildProp";

const StyledTheadTr = styled.tr`
    color: ${brancoBg};
    font-size: 0.75rem;
    background-color: rgba(18, 18, 224, 0.7);
    text-align: center;
    &___tr:nth-of-type(even) {
        color: ${cinzaEscuro};
    }
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
    }
`;

export default function THeadTr(props: IChildProp) {
    return <StyledTheadTr>{props.children}</StyledTheadTr>;
}
