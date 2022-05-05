import ContainerFundoAzul from "../Login/ContainerFundoAzul";
import CardAlerta from "./CardAlerta";
import CardCadastro from "./CardCadastro";
import DadosPessoais from "./DadosPessoais";
import EnderecoComercial from "./EnderecoComercial";
import EnderecoResidencial from "./EnderecoResidencial";
import FormCadastro from "./FormCadastro";
import OutrasInformacoes from "./OutrasInformacoes";

function PageCadastro() {
    return (
        <ContainerFundoAzul>
            <CardAlerta />
            <CardCadastro>
                <FormCadastro>
                    <DadosPessoais />
                    <EnderecoResidencial />
                    <EnderecoComercial />
                    <OutrasInformacoes />
                </FormCadastro>
            </CardCadastro>
        </ContainerFundoAzul>
    );
}

export default PageCadastro;
