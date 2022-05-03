import { StyledBox } from "./styled";

function Box(props: {children: React.ReactNode}) {
    return (
        <StyledBox>{props.children}</StyledBox>
    )
}

export default Box