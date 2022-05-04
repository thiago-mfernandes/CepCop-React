import { StyledContainerBox } from "./styled";

function Box(props: { children: React.ReactNode }) {
    return (
        <StyledContainerBox>{props.children}</StyledContainerBox>
    )
}

export default Box