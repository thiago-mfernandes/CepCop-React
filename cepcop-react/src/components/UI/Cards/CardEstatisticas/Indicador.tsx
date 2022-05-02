import { StyledIndicador, StyledIndicadorVerde } from "./styled";

function Indicador(props: {verde?: boolean}) {
    return (
        props.verde ? <StyledIndicadorVerde/> : <StyledIndicador/> 
    )
}

export default Indicador