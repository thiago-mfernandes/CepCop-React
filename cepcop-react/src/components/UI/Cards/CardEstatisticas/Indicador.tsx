import { StyledIndicador, StyledIndicadorVerde } from "./styled";

function Indicador(props: {verde?: boolean}) {
    return (
        props.tipo ? <StyledIndicadorVerde/> : <StyledIndicador/> 
    )
}

export default Indicador