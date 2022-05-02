import TotalCadastros from "../Titulos/TotalCadastros";
import { StyledTotalAnalisantes } from "./styled";
import Container from "./Container";
import { MdListAlt } from "react-icons/md";

function CardTotalAnalisants() {
    return (
        <StyledTotalAnalisantes>
            <TotalCadastros totalCadastros="Total de Analisantes:"/>
            <Container>
                <MdListAlt
                    style={{
                        color: '#787887',
                        fontSize: '2rem',
                        fontWeight: 700,
                        padding: 0
                    }}
                />
                <p className="card-totalAnalisantes__valor">31</p>
            </Container>
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
