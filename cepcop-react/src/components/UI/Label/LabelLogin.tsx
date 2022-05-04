import { StyledLabelLogin } from "./styled";

function LabelLogin(props: { htmlFor: string; conteudo: string }) {
    return (
        <StyledLabelLogin htmlFor={props.htmlFor}>
            {props.conteudo}
        </StyledLabelLogin>
    )
}

export default LabelLogin