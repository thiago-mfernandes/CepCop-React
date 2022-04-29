import { StyledData } from "./styled";


function Data (props: {dataHoje: string}) {
    return (
        <StyledData>{props.dataHoje}</StyledData>
    )
}

export default Data;