import CardConfiguracoes from "./CardConfiguracoes"
import Card from "./Card"

function FormConfiguracoes() {
    return (
        <CardConfiguracoes>
            <Card>
                <div className="config-page-card__header">
                    <h3 className="config-page-card__header___titulo">Dados de Acesso</h3>
                    <i className="material-icons material-icons--config">folder_shared</i>
                </div>
                    

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
                <div className="config-page-card__header">
                    <h3 className="config-page-card__header___titulo">Status do Sistema</h3>
                    <i className="material-icons material-icons--config">computer</i>
                </div>
                
                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="nome">Status</label>
                    <input className="input input--form" type="text" placeholder="Ativo/Inativo" name="nome"/>
                </div>
            </Card>

            <Card>
                <div className="config-page-card__header">
                    <h3 className="config-page-card__header___titulo">Imagem do Perfil</h3>
                    <i className="material-icons material-icons--config">image</i>
                </div>

                <div className="config-page-card__input-box">
                    <label className="label" htmlFor="nome">Editar Imagem</label>
                    <div className="config-page-card__input-button-box">

                        <input className="input input--escolherArquivo" type="text" placeholder="Ativo/Inativo" name="nome"/>
                        <button className="config-page-card__input-button-box___button">Escolher Arquivo</button>

                    </div>
                </div>
            </Card>

            <Card>
                <div className="config-page-card__header">
                    <h3 className="config-page-card__header___titulo">Informações de Contato</h3>
                    <i className="material-icons material-icons--config">import_contacts</i>
                </div>
                

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
                <div className="config-page-card__header">
                    <h3 className="config-page-card__header___titulo">Informações de Contato</h3>
                    <i className="material-icons material-icons--config">phone_callback</i>
                </div>

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