import Box from "./Box";
import CardPrincipal from "./CardConfiguracoes/Index";
import Container from "./Container/Index";

function Configuracoes() {
    return (
        <CardPrincipal>
            <Container>
                <Box>
                    <h2 className="titulo-bloco-busca">Configurações</h2>
                    <i className="material-icons config-icon">settings</i>
                </Box>
                <hr className="linha"></hr>
                <Box>
                    <p className="bloco-adicionarBuscar___alerta-config">
                        Todas as informações devem ser{" "}
                        <span>obrigatoriamente </span>preenchidas.
                    </p>
                    <p className="bloco-adicionarBuscar___alerta-config">
                        Clique em <span>Salvar</span> para finalizar.
                    </p>
                </Box>
            </Container>
        </CardPrincipal>
    );
}

export default Configuracoes;
