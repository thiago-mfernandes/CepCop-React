import IBodyTdProps from "src/components/Interfaces/IBodyTdProps";
import { StyledTBodyTd } from "../styles";

function TBodyTd(props: IBodyTdProps) {
    return (
        <StyledTBodyTd data-label={props.dataLabel}>
            {props.children}
        </StyledTBodyTd>
    );
}

export default TBodyTd;
