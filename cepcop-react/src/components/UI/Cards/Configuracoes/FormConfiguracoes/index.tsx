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
import ButtonBox from "./BoxButton"
import BotaoEscolherArquivo from "./BotaoEscolherArquivo"
import { BotaoSalvarConfiguracoes } from "src/components/UI/Botao/BotaoSalvarConfiguracoes"
import InputEscolherArquivo from "src/components/UI/Input/InputEscolherArquivo"

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
                    <InputForm 
                        type={"text"} 
                        placeholder={"Informe seu nome..."} 
                        name={"nome"} 
                        ariaDescribedby={""} 
                    />
                </Box>
                <Box>
                    <Label htmlFor="email">Email</Label>
                    <InputForm 
                        type={"text"} 
                        placeholder={"Informe seu email de acesso..."} 
                        name={"email"} 
                        ariaDescribedby={""} 
                    />
                </Box>
                <Box>
                    <Label htmlFor="senha">Senha</Label>
                    <InputForm 
                        type={"text"} 
                        placeholder={"Informe sua senha..."} 
                        name={"senha"} 
                        ariaDescribedby={""} 
                    />
                </Box>
            </Card>
            <Card>
                <Header>
                    <Titulo descricao="Status do Sistema" />
                    <IconComputer />
                </Header>                
                <Box>
                    <Label htmlFor="status">Status</Label>
                    <InputForm 
                        type={"text"} 
                        placeholder={"Ativo/Inativo"} 
                        name={"nome"} 
                        ariaDescribedby={""} 
                    />
                </Box>
            </Card>
            <Card>
                <Header>
                    <Titulo descricao="Imagem do Perfil" />
                    <IconImage />
                </Header>
                <Box>
                    <Label htmlFor="nome">Editar Imagem</Label>
                    <ButtonBox>
                        <InputEscolherArquivo 
                            type={"text"} 
                            placeholder={"Ativo/Inativo"} 
                            name={"nome"} 
                            ariaDescribedby={""} />
                        <BotaoEscolherArquivo />
                    </ButtonBox>
                </Box>
            </Card>
            <Card>
                <Header>
                    <Titulo descricao="Informações de Contato" /> 
                    <IconContact />
                </Header>
                <Box>
                    <Label htmlFor="email">Email</Label>
                    <InputForm 
                        type={"text"} 
                        placeholder={"seu-email@dominio.com"} 
                        name={"email"} 
                        ariaDescribedby={""} 
                    />
                </Box>
                <Box>
                    <Label htmlFor="telefone">Telefone</Label>
                    <InputForm 
                        type={"text"} 
                        placeholder={"seu-email@dominio.com"} 
                        name={"telefone"} 
                        ariaDescribedby={""} 
                    />
                </Box>
            </Card>
            <Card>
                <Header>
                    <Titulo descricao="Informações de Contato" /> 
                    <IconPhone />
                </Header>
                <Box>
                    <Label htmlFor="inscricoes">Inscrições</Label>
                    <InputForm 
                        type={"text"} 
                        placeholder={"Sim"} 
                        name={"inscricoes"} 
                        ariaDescribedby={""} 
                    />
                </Box>                    
            </Card>
            <BotaoSalvarConfiguracoes>Salvar</BotaoSalvarConfiguracoes>
        </CardConfiguracoes>
    )
}

export default FormConfiguracoes