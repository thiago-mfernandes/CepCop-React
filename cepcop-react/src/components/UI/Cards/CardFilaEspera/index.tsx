import { MdHourglassBottom } from "react-icons/md";
import Container from "./Container";
import FilaEspera from "./FilaEspera";
import Pessoa from "./Pessoa";
import Quantidade from "../Quantidade/Quantidade";
import TituloGenerico from "../Titulos/TituloGenerico";

function CardFilaEspera() {
    return (
        <FilaEspera>
            <TituloGenerico conteudo="Fila de espera:" />
            <Container>
                <MdHourglassBottom 
                    style={{
                        color: '#787887',
                        fontSize: '2rem',
                        fontWeight: 700,
                        marginLeft: "5%",
                        marginRight: "5%",
                    }}
                />
                <Quantidade quantidade={16} />{/* mockar o dado */}
            </Container>
            <Container>
                <Pessoa nome="1 - João da Silva"/>{/* mockar o dado */}
            </Container>
        </FilaEspera>
    );
}

export default CardFilaEspera;
