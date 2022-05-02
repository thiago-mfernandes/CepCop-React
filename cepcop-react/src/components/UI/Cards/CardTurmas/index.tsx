import Quantidade from "../Quantidade/Quantidade";
import {StyledCardTurmas} from "./styled";
import Titulo from "./Titulo";

function CardTurmas() {
    return(
        <StyledCardTurmas>
            <Titulo titulo="Turmas" />
            <Quantidade quantidade={2}/>
        </StyledCardTurmas>
    )
}

export default CardTurmas
