import { StyledSecaoGenerica } from "../styled";
import TituloBox from "../TituloBox";
import TituloSecao from "../TituloSecao";

function DadosPessoais() {
    return (
        <StyledSecaoGenerica>
            <TituloBox>
                <TituloSecao conteudo={"Dados Pessoais"} />
                <i id="arrow-expand" className="material-icons arrow-expand">expand_more</i>
            </TituloBox>      
        </StyledSecaoGenerica>
    )
}

export default DadosPessoais