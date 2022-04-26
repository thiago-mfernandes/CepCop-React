import Table from "./Table";
import THead from "../Tabela/THead/THead";
import THeadTr from "../Tabela/THead/THeadTr";
import THeadTh from "../Tabela/THead/THeadTh";
import TBody from "../Tabela/TBody/TBody";
import TBodyTr from "../Tabela/TBody/TBodyTr";
import TBodyTd from "../Tabela/TBody/TBodyTd"

function Tabela() {
    return (
        <>
            <Table>
                <THead>
                    <THeadTr>
                        <THeadTh>{'Nome'}</THeadTh> {/* mockar tudo */}
                        <THeadTh>{'Email'}</THeadTh> {/* mockar tudo */}
                        <THeadTh>{'CPF'}</THeadTh> {/* mockar tudo */}
                        <THeadTh>{'Celular'}</THeadTh>  {/* mockar tudo */}
                        <THeadTh>{'Curso'}</THeadTh> {/* mockar tudo */}
                        <THeadTh>{'Permissões'}</THeadTh> {/* mockar tudo */}
                        <THeadTh>{'Data de Cadastro'}</THeadTh> {/* mockar tudo */}
                        <THeadTh>{'Ação'}</THeadTh> {/* mockar tudo */}
                    </THeadTr>
                </THead>
                <TBody>
                    <TBodyTr>
                        <TBodyTd dataLabel={"Nome"}>{"Hudson Bonomo"}</TBodyTd>
                        <TBodyTd dataLabel={"Email"}>{"hudson@gmail.com"}</TBodyTd>
                        
                        <TBodyTd dataLabel={"CPF"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Celular"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Curso"}>{"Clínica Psicanalítica Freud-Lacan"}</TBodyTd>
                        <TBodyTd dataLabel={"Permissoes"}>{"Gerenciar Superviores: SIM"}</TBodyTd>
                        <TBodyTd dataLabel={"Data do Cadastro"}>{"01/01/2022"}</TBodyTd>
                        <TBodyTd dataLabel={"Acao"}>{"Excluir ou Deletar"}</TBodyTd>
                    </TBodyTr>
                    <TBodyTr>
                        <TBodyTd dataLabel={"Nome"}>{"Hudson Bonomo"}</TBodyTd>
                        <TBodyTd dataLabel={"Email"}>{"hudson@gmail.com"}</TBodyTd>
                        
                        <TBodyTd dataLabel={"CPF"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Celular"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Curso"}>{"Clínica Psicanalítica Freud-Lacan"}</TBodyTd>
                        <TBodyTd dataLabel={"Permissoes"}>{"Gerenciar Superviores: SIM"}</TBodyTd>
                        <TBodyTd dataLabel={"Data do Cadastro"}>{"01/01/2022"}</TBodyTd>
                        <TBodyTd dataLabel={"Acao"}>{"Excluir ou Deletar"}</TBodyTd>
                    </TBodyTr>
                    <TBodyTr>
                        <TBodyTd dataLabel={"Nome"}>{"Hudson Bonomo"}</TBodyTd>
                        <TBodyTd dataLabel={"Email"}>{"hudson@gmail.com"}</TBodyTd>
                        
                        <TBodyTd dataLabel={"CPF"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Celular"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Curso"}>{"Clínica Psicanalítica Freud-Lacan"}</TBodyTd>
                        <TBodyTd dataLabel={"Permissoes"}>{"Gerenciar Superviores: SIM"}</TBodyTd>
                        <TBodyTd dataLabel={"Data do Cadastro"}>{"01/01/2022"}</TBodyTd>
                        <TBodyTd dataLabel={"Acao"}>{"Excluir ou Deletar"}</TBodyTd>
                    </TBodyTr>
                    <TBodyTr>
                        <TBodyTd dataLabel={"Nome"}>{"Hudson Bonomo"}</TBodyTd>
                        <TBodyTd dataLabel={"Email"}>{"hudson@gmail.com"}</TBodyTd>
                        
                        <TBodyTd dataLabel={"CPF"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Celular"}>{"000.111.222-33"}</TBodyTd>
                        <TBodyTd dataLabel={"Curso"}>{"Clínica Psicanalítica Freud-Lacan"}</TBodyTd>
                        <TBodyTd dataLabel={"Permissoes"}>{"Gerenciar Superviores: SIM"}</TBodyTd>
                        <TBodyTd dataLabel={"Data do Cadastro"}>{"01/01/2022"}</TBodyTd>
                        <TBodyTd dataLabel={"Acao"}>{"Excluir ou Deletar"}</TBodyTd>
                    </TBodyTr>
                </TBody>
            </Table>
        </>
    )
}

export default Tabela;