import CardConfiguracoes from "./CardConfiguracoes";
import Card from "./Card";
import Header from "./Header";
import Titulo from "./Titulo";
import IconFolder from "./IconFolder";
import IconComputer from "./IconComputer";
import IconImage from "./IconImage";
import IconContact from "./IconContacts";
import IconPhone from "./IconPhone";
import Box from "./Box";
import Label from "src/components/UI/Label/Label";
import InputForm from "src/components/UI/Input/InputForm";
import ButtonBox from "./BoxButton";
import BotaoEscolherArquivo from "./BotaoEscolherArquivo";
import { BotaoSalvarConfiguracoes } from "src/components/UI/Botao/BotaoSalvarConfiguracoes";
import InputEscolherArquivo from "src/components/UI/Input/InputEscolherArquivo";

export default function FormConfiguracoes() {
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
                        typeInput={"text"}
                        placeholderInput={"Informe seu nome..."}
                        nameInput={"nome"}
                        ariaDescribedbyInput={""}
                    />
                </Box>
                <Box>
                    <Label htmlFor="email">Email</Label>
                    <InputForm
                        typeInput={"text"}
                        placeholderInput={"Informe seu email de acesso..."}
                        nameInput={"email"}
                        ariaDescribedbyInput={""}
                    />
                </Box>
                <Box>
                    <Label htmlFor="senha">Senha</Label>
                    <InputForm
                        typeInput={"text"}
                        placeholderInput={"Informe sua senha..."}
                        nameInput={"senha"}
                        ariaDescribedbyInput={""}
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
                        typeInput={"text"}
                        placeholderInput={"Ativo/Inativo"}
                        nameInput={"nome"}
                        ariaDescribedbyInput={""}
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
                            typeInput={"text"}
                            placeholderInput={"Ativo/Inativo"}
                            nameInput={"nome"}
                            ariaDescribedbyInput={""}
                        />
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
                        typeInput={"text"}
                        placeholderInput={"seu-email@dominio.com"}
                        nameInput={"email"}
                        ariaDescribedbyInput={""}
                    />
                </Box>
                <Box>
                    <Label htmlFor="telefone">Telefone</Label>
                    <InputForm
                        typeInput={"text"}
                        placeholderInput={"seu-email@dominio.com"}
                        nameInput={"telefone"}
                        ariaDescribedbyInput={""}
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
                        typeInput={"text"}
                        placeholderInput={"Sim"}
                        nameInput={"inscricoes"}
                        ariaDescribedbyInput={""}
                    />
                </Box>
            </Card>
            <BotaoSalvarConfiguracoes>Salvar</BotaoSalvarConfiguracoes>
        </CardConfiguracoes>
    );
}
