import BoxTelefone from "../BoxTelefone";
import ContainerTelefone from "../ContainerTelefone";
import EntradaDados from "../EntradaDados";
import IconExpand from "../IconExpand";
import Opcoes from "../Opcoes";
import { StyledSecaoGenerica } from "../OutrasInformacoes";
import TituloBox from "../TituloBox";
import TituloBoxTelefone from "../TituloBoxTelefone";
import TituloSecao from "../TituloSecao";
import EntradaDadosTelefone from "../EntradaDadosTelefone";
import LabelCadastroObrigatorio from "src/components/UI/Label/LabelCadastroObrigatorio";
import InputForm from "src/components/UI/Input/InputForm";
import BotaoAdicionarNovo from "src/components/UI/Botao/BotaoAdicionarNovo";

export default function DadosPessoais() {
    return (
        <StyledSecaoGenerica>
            <TituloBox>
                <TituloSecao conteudo={"Dados Pessoais"} />
                <IconExpand />
                <Opcoes>
                    <EntradaDados
                        labelObrigatorio={true}
                        required
                        conteudoLabel={"Nome Completo"}
                        typeInput={"text"}
                        name={"nome"}
                        htmlFor={"nome"}
                        placeholderInput={"Informe seu nome:"}
                        nameInput={"nome-completo"}
                        ariaDescribedbyInput={"nome-completo"}
                    />
                    <EntradaDados
                        labelObrigatorio={true}
                        required
                        conteudoLabel={"Email"}
                        typeInput={"email"}
                        placeholderInput={"seunome@dominio.com"}
                        nameInput={"email"}
                        ariaDescribedbyInput={"emailHelp"}
                        name={"email"}
                        htmlFor={"email"}
                    />
                    <EntradaDados
                        labelObrigatorio={false}
                        conteudoLabel={"CPF"}
                        typeInput={"number"}
                        placeholderInput={"000.000.000-00"}
                        nameInput={"nome-completo"}
                        ariaDescribedbyInput={"textHelp"}
                        name={"cpf"}
                        htmlFor={"cpf"}
                    />
                    <ContainerTelefone>
                        <BoxTelefone>
                            <TituloBoxTelefone conteudoTitulo={"Telefones"} />
                            <EntradaDadosTelefone>
                                <LabelCadastroObrigatorio
                                    conteudoLabel={"Telefone"}
                                    htmlFor={"telefone"}
                                />
                                <InputForm
                                    id={"inputTelefone"}
                                    typeInput={"text"}
                                    placeholderInput={"(XX)XXXXX-XXXX"}
                                    nameInput={"telefone[]"}
                                    ariaDescribedbyInput={"textHelp"}
                                />
                                <BotaoAdicionarNovo conteudoBotao={"+"} />
                            </EntradaDadosTelefone>
                        </BoxTelefone>
                    </ContainerTelefone>
                </Opcoes>
            </TituloBox>
        </StyledSecaoGenerica>
    );
}
