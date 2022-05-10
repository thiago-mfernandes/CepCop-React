import IChildProp from "src/components/Interfaces/IChildProp";
import styled from "styled-components";
import { StyledContainer } from "./ContainerNascimento";

const StyledBoxDiaMesAno = styled(StyledContainer)`
    width: 30%;
`;

export default function BoxDiaMesAno(props: IChildProp) {
    return <StyledBoxDiaMesAno>{props.children}</StyledBoxDiaMesAno>;
}
