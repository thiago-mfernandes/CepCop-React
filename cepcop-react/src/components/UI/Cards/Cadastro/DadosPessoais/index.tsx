import IconExpand from "../IconExpand";
import { StyledSecaoGenerica } from "../styled";
import TituloBox from "../TituloBox";
import TituloSecao from "../TituloSecao";

function DadosPessoais() {
    return (
        <StyledSecaoGenerica>
            <TituloBox>
                <TituloSecao conteudo={"Dados Pessoais"} />
                <IconExpand/>
            </TituloBox>      
        </StyledSecaoGenerica>
    )
}

export default DadosPessoais