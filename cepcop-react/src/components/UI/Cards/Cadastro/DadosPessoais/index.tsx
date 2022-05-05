import BoxTelefone from "../BoxTelefone";
import ContainerTelefone from "../ContainerTelefone";
import EntradaDados from "../EntradaDados";
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
                    <EntradaDados 
                        conteudoLabel={"Nome Completo"} 
                        typeInput={"text"} 
                        placeholderInput={"Informe seu nome:"} 
                        nameInput={"nome-completo"} 
                        ariaDescribedbyInput={"nome-completo"}
                        required
                    />
                    <EntradaDados 
                        conteudoLabel={"Email"} 
                        typeInput={"email"} 
                        placeholderInput={"seunome@dominio.com"} 
                        nameInput={"email"} 
                        ariaDescribedbyInput={"emailHelp"}
                        required
                    />
                    <EntradaDados 
                        conteudoLabel={"CPF"} 
                        typeInput={"number"} 
                        placeholderInput={"000.000.000-00"} 
                        nameInput={"nome-completo"} 
                        ariaDescribedbyInput={"textHelp"}
                    />
                    <ContainerTelefone>
                        <BoxTelefone>
                            
                        </BoxTelefone>
                    </ContainerTelefone>                   
                </Opcoes>
            </TituloBox>
        </StyledSecaoGenerica>
    );
}

export default DadosPessoais;
