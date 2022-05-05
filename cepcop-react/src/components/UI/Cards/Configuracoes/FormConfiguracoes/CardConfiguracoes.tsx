import IChildProp from "src/components/Interfaces/IChildProp";
import { StyledConfigPage } from "./styled";

function CardConfiguracoes(props: IChildProp) {
    return <StyledConfigPage>{props.children}</StyledConfigPage>;
}

export default CardConfiguracoes;
