import { MdHourglassBottom } from "react-icons/md";
import Container from "./Container";
import FilaEspera from "./FilaEspera";
import Pessoa from "./Pessoa";
import Quantidade from "./Quantidade";
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
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: '5%',
                        paddingRight: "5%",
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
