import { StyledContainer } from "./styled";

function Container(props: { children: React.ReactNode }) {
    return (
        <StyledContainer>{props.children}</StyledContainer>
    )
}

export default Container