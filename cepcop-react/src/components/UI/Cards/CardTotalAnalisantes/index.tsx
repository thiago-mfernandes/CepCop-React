import TotalCadastros from "../Titulos/TotalCadastros";
import { StyledTotalAnalisantes } from "./styled";
import Container from "./Container";
import { MdListAlt } from "react-icons/md";
import Quantidade from "../Quantidade/Quantidade";

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
                <Quantidade quantidade={31}/>
            </Container>
            <div className="card-totalAnalisantes__box total">
                <p className="card-totalAnalisantes__totalNaoAtendido">
                    Total de analisantes que não estão na fila:
                </p>
                <div className="card-totalAnalisantes__box-n">
                    <MdListAlt
                        style={{
                            color: '#787887',
                            fontSize: '2rem',
                            fontWeight: 700,
                            padding: 0
                        }}
                    />
                    <Quantidade quantidade={31}/>
                </div>
            </div>
        
        </StyledTotalAnalisantes>
        
    );
}

export default CardTotalAnalisants;
