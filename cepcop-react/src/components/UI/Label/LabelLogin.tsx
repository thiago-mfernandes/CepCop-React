import styled from "styled-components";
import { StyledLabel } from "./Label";

const StyledLabelLogin = styled(StyledLabel)`
    margin: 2% 0;

    //-------------------------------------------------->
    @media screen and (max-width: 768px) {
        margin: 5% 0;
    }
`;

export default function LabelLogin(props: {
    htmlFor: string;
    conteudo: string;
}) {
    return (
        <StyledLabelLogin htmlFor={props.htmlFor}>
            {props.conteudo}
        </StyledLabelLogin>
    );
}
