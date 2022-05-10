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
import ContainerNascimento from "../ContainerNascimento";
import BoxConteudoNascimento from "../BoxConteudoNascimento";
import BoxDiaMesAno from "../BoxDiaMesAno";
import Label from "src/components/UI/Label/Label";
import { useState } from "react";
import Select from "../Select";

export default function DadosPessoais() {

    const [diaMes, setDiaMes] = useState([])

    fetch("http://localhost:3000/listaDiaMes", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resposta) => resposta.json())
    .then((dados) => {
        setDiaMes(dados)
    })
    .catch((err) => console.log(err))

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
                    <EntradaDados 
                        labelObrigatorio={false}
                        conteudoLabel={"Nome do Pai"}
                        typeInput={"text"}
                        placeholderInput={"Nome Completo"}
                        nameInput={"nome-completo"}
                        ariaDescribedbyInput={"textHelp"}
                        name={"nome-pai"}
                        htmlFor={"nome-pai"} 
                    />
                    <EntradaDados 
                        labelObrigatorio={false}
                        conteudoLabel={"Profissão do Pai"}
                        typeInput={"text"}
                        placeholderInput={"Ex.: Motorista"}
                        nameInput={"nome-completo"}
                        ariaDescribedbyInput={"textHelp"}
                        name={"profissao-pai"}
                        htmlFor={"profissao-pai"} 
                    />
                    <EntradaDados 
                        labelObrigatorio={false}
                        conteudoLabel={"Nome do Mãe"}
                        typeInput={"text"}
                        placeholderInput={"Nome Completo"}
                        nameInput={"nome-completo"}
                        ariaDescribedbyInput={"textHelp"}
                        name={"nome-mae"}
                        htmlFor={"nome-mae"} 
                    />
                     <EntradaDados 
                        labelObrigatorio={false}
                        conteudoLabel={"Profissão da Mãe"}
                        typeInput={"text"}
                        placeholderInput={"Ex.: Advogada"}
                        nameInput={"nome-completo"}
                        ariaDescribedbyInput={"textHelp"}
                        name={"profissao-mae"}
                        htmlFor={"profissao-mae"} 
                    />
                    <ContainerNascimento>
                        <LabelCadastroObrigatorio 
                            conteudoLabel={"Data de Nascimento"} 
                            htmlFor={""}
                        />
                        <BoxConteudoNascimento>
                            <BoxDiaMesAno>
                                <Label htmlFor={"dia"} children={"Dia"} />
                                <Select valores={diaMes} name={"dia"}/>
                            </BoxDiaMesAno>
                            <BoxDiaMesAno>
                                <Label htmlFor={""} children={"Mês"} />
                                <select name="" id=""></select>
                            </BoxDiaMesAno>
                            <BoxDiaMesAno>
                                <Label htmlFor={""} children={"Ano"} />
                            </BoxDiaMesAno>
                        </BoxConteudoNascimento>


                    </ContainerNascimento>

                </Opcoes>
            </TituloBox>
        </StyledSecaoGenerica>
    );
}
