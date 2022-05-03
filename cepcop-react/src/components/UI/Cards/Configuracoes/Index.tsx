import TipoUsuario from "src/components/Acoes/TipoUsuario";
import Box from "./Box";
import CardPrincipal from "./CardConfiguracoes/Index";
import Container from "./Container/Index";
import IconSettings from "./IconSettings";

function Configuracoes() {
    return (
        <CardPrincipal>
            <Container>
                <Box>
                    <TipoUsuario nome="Configurações"/>
                    <IconSettings />
                </Box>
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
