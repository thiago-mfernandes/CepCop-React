import TituloGenerico from "../CardFilaEspera/TituloGenerico";
import TotalCadastros from "../Titulos/TotalCadastros";
import { StyledTotalAnalisantes } from "./styled";

function CardTotalAnalisants() {
    return (
        <StyledTotalAnalisantes>
            <TotalCadastros totalCadastros="Total de Analisantes:"/>
            <div className="card-totalAnalisantes__box">
                <i className="material-icons">view_list</i>
                <p className="card-totalAnalisantes__valor">31</p>
            </div>
            <div className="card-totalAnalisantes__box total">
                <p className="card-totalAnalisantes__totalNaoAtendido">
                    Total de analisantes que não estão na fila:
                </p>
                <div className="card-totalAnalisantes__box-n">
                    <i className="material-icons">view_list</i>
                    <p className="card-totalAnalisantes__valor">31</p>
                </div>
            </div>
        
        </StyledTotalAnalisantes>
        
    );
}

export default CardTotalAnalisants;
