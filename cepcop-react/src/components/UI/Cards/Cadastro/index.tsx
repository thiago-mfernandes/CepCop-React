import ContainerFundoAzul from "../Login/ContainerFundoAzul"
import CardAlerta from "./CardAlerta"
import CardCadastro from "./CardCadastro"
import FormCadastro from "./FormCadastro"

function PageCadastro() {
    return (
        <ContainerFundoAzul>
            <CardAlerta/>
            <CardCadastro>
                <FormCadastro>
                    
                </FormCadastro>
            </CardCadastro>
        </ContainerFundoAzul>
    )
}

export default PageCadastro