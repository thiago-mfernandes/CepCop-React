import Container from "./Container";
import FilaEspera from "./FilaEspera";
import TituloGenerico from "./TituloGenerico";

function CardFilaEspera() {
    return (
        <FilaEspera>
            <TituloGenerico conteudo="Fila de espera:" />
            <Container>
                <i className="material-icons">hourglass_bottom</i>
                <p className="card-filaEspera__quantidade">16</p>
            </Container>
            <Container>
                <p className="card-filaEspera__pessoa">1 - João da Silva</p>
            </Container>
        </FilaEspera>
    );
}

export default CardFilaEspera;
