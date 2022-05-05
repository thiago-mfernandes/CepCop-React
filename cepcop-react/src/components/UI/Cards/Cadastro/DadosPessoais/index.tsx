import IconExpand from "../IconExpand";
import Opcoes from "../Opcoes";
import { StyledSecaoGenerica } from "../styled";
import TituloBox from "../TituloBox";
import TituloSecao from "../TituloSecao";

function DadosPessoais() {
    return (
        <StyledSecaoGenerica>
            <TituloBox>
                <TituloSecao conteudo={"Dados Pessoais"} />
                <IconExpand />
                <Opcoes>
                    
                </Opcoes>
            </TituloBox>
        </StyledSecaoGenerica>
    );
}

export default DadosPessoais;
