import CardPrincipal from "./CardConfiguracoes/Index";
import Container from "./Container/Index";

function Configuracoes() {
    return (
        <CardPrincipal>
            <Container>
                <div className="bloco-adicionarBuscar__container config">
                    <h2 className="titulo-bloco-busca">Configurações</h2>
                    <i className="material-icons config-icon">settings</i>
                </div>

                <hr className="linha"></hr>

                <div className="bloco-adicionarBuscar__container config">
                    <p className="bloco-adicionarBuscar___alerta-config">
                        Todas as informações devem ser{" "}
                        <span>obrigatoriamente </span>preenchidas.
                    </p>
                    <p className="bloco-adicionarBuscar___alerta-config">
                        Clique em <span>Salvar</span> para finalizar.
                    </p>
                </div>
            </Container>
        </CardPrincipal>
    );
}

export default Configuracoes;
