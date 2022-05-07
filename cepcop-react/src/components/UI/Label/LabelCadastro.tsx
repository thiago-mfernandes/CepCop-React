import ILabel from "../../Interfaces/ILabel";
import { StyledLabel } from "./Label";
import styled from "styled-components";

export const StyledLabelCadastro = styled(StyledLabel)`
    opacity: 0.7;

    @media screen and (max-width: 768px) {
        padding-left: 2%;
    }
`;

export default function LabelCadastro(props: ILabel) {
    return <StyledLabelCadastro htmlFor={props.htmlFor}></StyledLabelCadastro>;
}
