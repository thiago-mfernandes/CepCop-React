import { StyledSecondContainer } from "./styled";

function ContainerNaoRelacionados(props: {children:React.ReactNode}) {
    return (
        <StyledSecondContainer>{props.children}</StyledSecondContainer>
    )
}

export default ContainerNaoRelacionados