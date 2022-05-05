import LabelCadastro from "src/components/UI/Label/LabelCadastro";
import ContainerConteudo from "../ContainerConteudo";
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
                    <ContainerConteudo>
                        <LabelCadastro>
                            NomeCompleto
                            <span> *</span>
                        </LabelCadastro>
                        
                        <input className="input input--form" type="text" name="nome-completo" aria-describedby="nome-completo" required placeholder="Informe seu nome"/>
                        <p className="msg-adicional"></p>
                    </ContainerConteudo>
                </Opcoes>
            </TituloBox>
        </StyledSecaoGenerica>
    );
}

export default DadosPessoais;
