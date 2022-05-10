import TituloModal from "src/components/Modais/TituloModal";
import BotaoLogin from "../../Botao/BotaoLogin";
import InputLogin from "../../Input/InputLogin";
import LabelLogin from "../../Label/LabelLogin";
import Box from "./Box";
import BoxInput from "./BoxInput";
import Container from "./ContainerFundoAzul";

function Login() {
    return (
        <Container>
            <Box>
                <TituloModal conteudo={"Faça login na sua conta:"} />
                <BoxInput>
                    <LabelLogin
                        htmlFor={"acesso"}
                        conteudo={"Tipo de Acesso"}
                    />
                    <InputLogin
                        typeInput={"text"}
                        placeholderInput={"Ex.:admin"}
                        nameInput={"acesso"}
                        ariaDescribedbyInput={""}
                    />
                    <LabelLogin htmlFor={"email"} conteudo={"Email"} />
                    <InputLogin
                        typeInput={"text"}
                        placeholderInput={"nome@email.com"}
                        nameInput={"email"}
                        ariaDescribedbyInput={""}
                    />
                    <LabelLogin htmlFor={"senha"} conteudo={"Senha"} />
                    <InputLogin
                        typeInput={"number"}
                        placeholderInput={"******"}
                        nameInput={"senha"}
                        ariaDescribedbyInput={""}
                    />
                </BoxInput>
                <BotaoLogin>Login</BotaoLogin>
            </Box>
        </Container>
    );
}

export default Login;
