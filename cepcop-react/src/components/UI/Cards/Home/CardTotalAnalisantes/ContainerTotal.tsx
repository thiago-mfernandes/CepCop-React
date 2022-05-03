import { StyledContainerTotal } from "./styled";

function ContainerTotal(props: { children:React.ReactNode }) {
    return (
        <StyledContainerTotal>
            {props.children}
        </StyledContainerTotal>
    )
}

export default ContainerTotal