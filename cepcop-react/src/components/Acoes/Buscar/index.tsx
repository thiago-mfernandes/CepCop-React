import Container from "../Container";
import Input from "../../UI/Input"

function Buscar() {
    return (
        <>
            <Input type="inputPadrao" />
            <Container>
                <p className="bloco-adicionarBuscar__container___conteudo">
                    Mostrar
                </p>
                <div className="output-bloco-busca">10</div>
                <p className="bloco-adicionarBuscar__container___conteudo">
                    entradas
                </p>
            </Container>
        </>
    );
}

export default Buscar;
