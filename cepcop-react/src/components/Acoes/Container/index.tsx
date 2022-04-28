import IContainerProps from "../../Interfaces/IContainerProps";
import { ContainerBox } from "./styles";

function Container(props: IContainerProps) {
    return (
        <ContainerBox
            borderBottom={props.borderBottom}
            paddingBottom={props.paddingBottom}
            justifyContentDireita={props.justifyContentDireita}
        >
            {props.children}
        </ContainerBox>
    );
}
export default Container;
