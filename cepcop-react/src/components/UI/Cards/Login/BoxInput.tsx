import { StyledContainerBoxInput } from "./styled";

function BoxInput(props: {children: React.ReactNode}) {
    return (
        <StyledContainerBoxInput>{props.children}</StyledContainerBoxInput>
    )
}

export default BoxInput