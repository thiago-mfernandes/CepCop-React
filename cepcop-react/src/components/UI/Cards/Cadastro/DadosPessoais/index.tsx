import EntradaDadosObrigatoria from "../EntradaDadosObrigatoria";
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
                    <EntradaDadosObrigatoria 
                        conteudoLabel={"Nome Completo"} 
                        typeInput={"text"} 
                        placeholderInput={"Informe seu nome:"} 
                        nameInput={"nome-completo"} 
                        ariaDescribedbyInput={"nome-completo"}
                        required
                    />
                    <EntradaDadosObrigatoria 
                        conteudoLabel={"Email"} 
                        typeInput={"email"} 
                        placeholderInput={"seunome@dominio.com"} 
                        nameInput={"email"} 
                        ariaDescribedbyInput={"emailHelp"}
                        required
                    />
                    <EntradaDadosObrigatoria 
                        conteudoLabel={"Nome Completo"} 
                        typeInput={"text"} 
                        placeholderInput={"Informe seu nome:"} 
                        nameInput={"nome-completo"} 
                        ariaDescribedbyInput={"nome-completo"}
                    />                   
                </Opcoes>
            </TituloBox>
        </StyledSecaoGenerica>
    );
}

export default DadosPessoais;
