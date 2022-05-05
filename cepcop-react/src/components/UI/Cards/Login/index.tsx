import TituloModal from "src/components/Modais/TituloModal"
import { BotaoLogin } from "../../Botao/BotaoLogin"
import InputLogin from "../../Input/InputLogin"
import LabelLogin from "../../Label/LabelLogin"
import Box from "./Box"
import BoxInput from "./BoxInput"
import Container from "./ContainerFundoAzul"

function Login() {
    return (

        <Container>
            <Box>
                <TituloModal conteudo={"Faça login na sua conta:"}/>
                <BoxInput>
                    <LabelLogin htmlFor={"acesso"} conteudo={"Tipo de Acesso"}/>
                    <InputLogin type={"text"} placeholder={"Ex.:admin"} name={"acesso"} ariaDescribedby={""} />
                    <LabelLogin htmlFor={"email"} conteudo={"Email"}/>
                    <InputLogin type={"text"} placeholder={"nome@email.com"} name={"email"} ariaDescribedby={""} />
                    <LabelLogin htmlFor={"senha"} conteudo={"Senha"}/>
                    <InputLogin type={"number"} placeholder={"******"} name={"senha"} ariaDescribedby={""} />
                </BoxInput>
                <BotaoLogin>Login</BotaoLogin>
            </Box>
        </Container>
    )
}

export default Login
