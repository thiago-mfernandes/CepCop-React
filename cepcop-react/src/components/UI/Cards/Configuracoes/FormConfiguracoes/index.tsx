import CardConfiguracoes from "./CardConfiguracoes"
import Card from "./Card"
import Header from "./Header"
import Titulo from "./Titulo"
import IconFolder from "./IconFolder"
import IconComputer from "./IconComputer"
import IconImage from "./IconImage"
import IconContact from "./IconContacts"
import IconPhone from "./IconPhone"
import Box from "./Box"
import Label from "src/components/UI/Label/Label"
import InputForm from "src/components/UI/Input/InputForm"

function FormConfiguracoes() {
    return (
        <CardConfiguracoes>
            <Card>
                <Header>
                    <Titulo descricao="Dados de Acesso" />
                    <IconFolder />
                </Header>                    

                <Box>
                    <Label htmlFor="nome">Nome</Label>
                    
                </Box>

                <Box>
                    <Label htmlFor="email">Email</Label>
                    <input className="input input--form" type="text" placeholder="Informe seu email de acesso..." name="email"/>
                </Box>

                <Box>
                    <Label htmlFor="senha">Senha</Label>
                    <input className="input input--form" type="text" placeholder="Informe sua senha..." name="senha"/>
                </Box>
            </Card>            

            <Card>
                <Header>
                    <Titulo descricao="Status do Sistema" />
                    <IconComputer />
                </Header>
                
                <Box>
                    <Label htmlFor="status">Status</Label>
                    <input className="input input--form" type="text" placeholder="Ativo/Inativo" name="nome"/>
                </Box>
            </Card>

            <Card>
                <Header>
                    <Titulo descricao="Imagem do Perfil" />
                    <IconImage />
                </Header>

                <Box>
                    <Label htmlFor="nome">Editar Imagem</Label>
                    <div className="config-page-card__input-button-box">

                        <input className="input input--escolherArquivo" type="text" placeholder="Ativo/Inativo" name="nome"/>
                        <button className="config-page-card__input-button-box___button">Escolher Arquivo</button>

                    </div>
                </Box>
            </Card>

            <Card>
                <Header>
                    <Titulo descricao="Informações de Contato" /> 
                    <IconContact />
                </Header>
                

                <Box>
                    <Label htmlFor="email">Email</Label>
                    <input className="input input--form" type="text" placeholder="seu-email@dominio.com" name="email"/>
                </Box>

                <Box>
                    <Label htmlFor="telefone">Telefone</Label>
                    <input className="input input--form" type="text" placeholder="seu-email@dominio.com" name="telefone"/>
                </Box>
            </Card>

            <Card>
                <Header>
                    <Titulo descricao="Informações de Contato" /> 
                    <IconPhone />
                </Header>

                <Box>
                    <Label htmlFor="inscricoes">Inscrições</Label>
                    <input className="input input--form" type="text" placeholder="Sim" name="inscricoes"/>
                </Box>                    
            </Card>
            <button className="btn botao-salvar config">Salvar</button>

        </CardConfiguracoes>
    )
}

export default FormConfiguracoes