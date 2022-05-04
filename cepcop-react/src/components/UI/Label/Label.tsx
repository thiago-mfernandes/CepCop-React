import { StyledLabel } from "./styled";

function Label(props: { htmlFor: string; children: React.ReactNode }) {
    return (
        <StyledLabel htmlFor={props.htmlFor}>
            {props.children}
        </StyledLabel>
    )
}

export default Label