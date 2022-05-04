import TipoUsuario from "src/components/Acoes/TipoUsuario";
import Box from "../Box";
import Container from "../Container/Index";
import IconSettings from "../IconSettings";
import Instrucoes from "../Instrucoes";
import CardConfiguracoes from "./CardConfiguracoes";

function CardPrincipal() {
    return (
        <CardConfiguracoes>
            <Container>
                <Box>
                    <TipoUsuario nome="Configurações"/>
                    <IconSettings />
                </Box>
                <Box>
                    <Instrucoes 
                        descricao1="Todas as informações devem ser "
                        textoSpan="obrigatoriamente"
                        descricao2=" preenchidas."
                    />
                    <Instrucoes 
                        descricao1="Clique em "
                        textoSpan="Salvar"
                        descricao2=" para finalizar."
                    />
                </Box>
            </Container>
        </CardConfiguracoes>
    );
}

export default CardPrincipal
