import Container from "./Container";
import FilaEspera from "./FilaEspera";
import Pessoa from "./Pessoa";
import Quantidade from "../Quantidade/Quantidade";
import TituloGenerico from "../../Home/Titulos/TituloGenerico";
import IconHourglass from "./IconHourglass";

export default function CardFilaEspera() {
    return (
        <FilaEspera>
            <TituloGenerico conteudo="Fila de espera:" />
            <Container>
                <IconHourglass />
                <Quantidade quantidade={16} />
                {/* mockar o dado */}
            </Container>
            <Container>
                <Pessoa nome="1 - João da Silva" />
                {/* mockar o dado */}
            </Container>
        </FilaEspera>
    );
}
