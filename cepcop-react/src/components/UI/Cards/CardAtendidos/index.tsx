import TituloGenerico from "../CardFilaEspera/TituloGenerico"
import { StyledCardAtendidos } from "./styled"

function CardAtendidos() {
    return (
        <StyledCardAtendidos>
            <TituloGenerico conteudo="Atendidos:" />
            <div className="card-atendidos__box">
                <i className="material-icons">done</i>
                <p className="card-atendidos__valor">09</p>
            </div>
        </StyledCardAtendidos>
    )
}

export default CardAtendidos