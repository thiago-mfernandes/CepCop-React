import styled from "styled-components";
import IChildProp from "../../../Interfaces/IChildProp";

//modificar aqui (max-height: 0; overflow: hidden;)
const StyledOpcoes = styled.div`
    //1.o bloco vai ficar sem aparecer
    display: flex;
    flex-direction: row;
    max-height: 100%; //modificar
    overflow: visible; //modificar
    transition: max-height 3s ease;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export default function Opcoes(props: IChildProp) {
    return <StyledOpcoes>{props.children}</StyledOpcoes>;
}
