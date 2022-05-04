import CardConfiguracoes from "./CardConfiguracoes"
import Card from "./Card"
import Header from "./Header"
import Titulo from "./Titulo"
import IconFolder from "./IconFolder"
import IconComputer from "./IconComputer"
import IconImage from "./IconImage"
import IconContact from "./IconContacts"
import IconPhone from "./IconPhone"

function FormConfiguracoes() {
    return (
        <CardConfiguracoes>
            <Card>
                <Header>
                    <Titulo descricao="Dados de Acesso" />
                    <IconFolder />
                </Header>
                    

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="nome">Nome</label>
                    <input className="input input--form" type="text" placeholder="Informe seu nome..." name="nome"/>
                </div>

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input input--form" type="text" placeholder="Informe seu email de acesso..." name="email"/>
                </div>

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="senha">Senha</label>
                    <input className="input input--form" type="text" placeholder="Informe sua senha..." name="senha"/>
                </div>
            </Card>            

            <Card>
                <Header>
                    <Titulo descricao="Status do Sistema" />
                    <IconComputer />
                </Header>
                
                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="nome">Status</label>
                    <input className="input input--form" type="text" placeholder="Ativo/Inativo" name="nome"/>
                </div>
            </Card>

            <Card>
                <Header>
                    <Titulo descricao="Imagem do Perfil" />
                    <IconImage />
                </Header>

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="nome">Editar Imagem</label>
                    <div className="config-page-card__input-button-box">

                        <input className="input input--escolherArquivo" type="text" placeholder="Ativo/Inativo" name="nome"/>
                        <button className="config-page-card__input-button-box___button">Escolher Arquivo</button>

                    </div>
                </div>
            </Card>

            <Card>
                <Header>
                    <Titulo descricao="Informações de Contato" /> 
                    <IconContact />
                </Header>
                

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input input--form" type="text" placeholder="seu-email@dominio.com" name="email"/>
                </div>

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="telefone">Telefone</label>
                    <input className="input input--form" type="text" placeholder="seu-email@dominio.com" name="telefone"/>
                </div>
            </Card>

            <Card>
                <Header>
                    <Titulo descricao="Informações de Contato" /> 
                    <IconPhone />
                </Header>

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="inscricoes">Inscrições</label>
                    <input className="input input--form" type="text" placeholder="Sim" name="inscricoes"/>
                </div>                    
            </Card>
            <button className="btn botao-salvar config">Salvar</button>

        </CardConfiguracoes>
    )
}

export default FormConfiguracoes